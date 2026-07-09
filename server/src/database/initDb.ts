import net from "node:net";
import dotenv from "dotenv";

dotenv.config();

function parsePostgresHostAndPort(databaseUrl: string): { host: string; port: number } | null {
    try {
        // Example:
        // postgresql://user:pass@aws-1-ap-south-1.pooler.supabase.com:6543/postgres
        const match = databaseUrl.match(/^postgres(?:ql)?:\/\/(?:[^@/]+@)?([^:/?#]+)(?::(\d+))?/i);
        if (!match) return null;
        const host = match[1];
        const port = match[2] ? Number(match[2]) : 5432;
        if (!host || Number.isNaN(port)) return null;
        return { host, port };
    } catch {
        return null;
    }
}

export async function initDb(): Promise<boolean> {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        console.log("DB not connected (DATABASE_URL not set)");
        return false;
    }

    // This repo currently has no DB client library wired up.
    // So we do a lightweight connectivity check to the Postgres host:port.
    const target = parsePostgresHostAndPort(databaseUrl);
    if (!target) {
        console.log("DB not connected (could not parse DATABASE_URL)");
        return false;
    }

    const timeoutMs = 3000;
    return new Promise<boolean>((resolve) => {
        const socket = new net.Socket();
        let settled = false;

        const finish = (ok: boolean) => {
            if (settled) return;
            settled = true;
            socket.destroy();
            resolve(ok);
        };

        socket.setTimeout(timeoutMs);
        socket.once("connect", () => finish(true));
        socket.once("timeout", () => finish(false));
        socket.once("error", () => finish(false));

        socket.connect(target.port, target.host);
    }).then((ok) => {
        console.log(ok ? "DB connected" : "DB not connected");
        return ok;
    });
}

