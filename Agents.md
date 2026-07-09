# AI Agent Instructions — `candidate-service`

Paste this at the top of the repo (e.g. `AGENTS.md` or `CLAUDE.md`) so any AI agent working in this codebase follows the same rules as the rest of the team.

---

### Scope of this repo
This repo owns the **candidate** domain only: candidate auth, profile, resume, applications, dashboard, and candidate-facing notifications. It does **not** own job/requisition data (read it from `recruitment-service`), AI scoring (read it from `ai-evaluation-service`), or interview scheduling (read it from `interview-service`).

### Tech stack — do not deviate
- **Express.js + TypeScript** (not NestJS, not Fastify)
- **Drizzle ORM** (not Prisma, not TypeORM) against this service's own **PostgreSQL** database
- Validation with **Zod**
- Tests with **Jest**
- This service's DB is private — no other service, and no other repo's agent, should ever query it directly

### Folder structure — follow exactly, don't reorganize
```
candidate-service/
├── server/
│   ├── config/         env loading, db client, constants
│   ├── common/
│   │   ├── middleware/    auth, error-handler, validate
│   │   └── types/          express.d.ts (req.user augmentation)
│   ├── database/
│   │   ├── schema.ts    Drizzle table definitions
│   │   └── migrations/
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.repository.ts
│   │   │   ├── auth.schema.ts
│   │   │   └── auth.spec.ts
│   │   ├── profile/
│   │   │   ├── profile.routes.ts
│   │   │   ├── profile.controller.ts
│   │   │   ├── profile.service.ts
│   │   │   ├── profile.repository.ts
│   │   │   ├── profile.schema.ts
│   │   │   └── profile.spec.ts
│   │   ├── resume/
│   │   │   ├── resume.routes.ts
│   │   │   ├── resume.controller.ts
│   │   │   ├── resume.service.ts
│   │   │   ├── resume.repository.ts
│   │   │   ├── resume.schema.ts
│   │   │   └── resume.spec.ts
│   │   ├── applications/
│   │   │   ├── applications.routes.ts
│   │   │   ├── applications.controller.ts
│   │   │   ├── applications.service.ts
│   │   │   ├── applications.repository.ts
│   │   │   ├── applications.schema.ts
│   │   │   └── applications.spec.ts
│   │   ├── dashboard/
│   │   │   ├── dashboard.routes.ts
│   │   │   ├── dashboard.controller.ts
│   │   │   ├── dashboard.service.ts
│   │   │   ├── dashboard.repository.ts
│   │   │   ├── dashboard.schema.ts
│   │   │   └── dashboard.spec.ts
│   │   ├── notifications/
│   │   │   ├── notifications.routes.ts
│   │   │   ├── notifications.controller.ts
│   │   │   ├── notifications.service.ts
│   │   │   ├── notifications.repository.ts
│   │   │   ├── notifications.schema.ts
│   │   │   └── notifications.spec.ts
│   │   ├── interview-status/
│   │   │   ├── interview-status.routes.ts
│   │   │   ├── interview-status.controller.ts
│   │   │   ├── interview-status.service.ts
│   │   │   ├── interview-status.repository.ts
│   │   │   ├── interview-status.schema.ts
│   │   │   └── interview-status.spec.ts
│   │   ├── events/
│   │   │   ├── kafka-producer.ts
│   │   │   ├── kafka-consumer.ts
│   │   │   └── handlers/
│   │   └── clients/        HTTP clients to other services
│   ├── routes.ts       combines every module's router
│   ├── app.ts           express() instance, global middleware, mounts routes.ts
│   └── index.ts          imports app, app.listen(PORT)
├── package.json
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```
Every module = `*.routes.ts` + `*.controller.ts` + `*.service.ts` + `*.repository.ts` (Drizzle queries live only in `*.repository.ts`, never in controllers) + `*.schema.ts` (Zod) + `*.spec.ts`.

### API contract rules
- Every route validated with a Zod schema before it touches a controller.
- Public routes are only ever called via `api-gateway` — never assume a request arrived unauthenticated or unvalidated by the gateway; still enforce RBAC here too (defense in depth).
- Don't change an existing endpoint's request/response shape without updating the shared Postman/OpenAPI contract and flagging it to whoever owns the consuming service.

### Auth rules
- Candidate auth is **separate** from recruiter/admin auth (different JWT issuer/audience) — do not merge these flows.
- Resume files go to S3/MinIO via `resume.service.ts`; never store binary data in Postgres.


### Kafka events
- **Publishes:** `CandidateRegistered`, `ResumeUploaded`
- **Consumes:** `FitmentScoreCalculated`, `InterviewScheduled`, `OfferGenerated` — used to update the candidate's dashboard view
- Event payloads are the contract — don't change a published event's shape without checking every consumer.
- All event handling goes in `modules/events/`, not scattered into feature modules.

### Do not modify without team approval
- `database/schema.ts` structure
- Kafka event names/payload shapes
- Candidate JWT auth flow (separate from staff auth)
- Folder structure above

### Coding standards
- Feature-first, one module per folder as shown above
- No business logic in controllers — controller calls service, service calls repository
- No `any` types; every DB row has a Drizzle-inferred type
- Comments only where the "why" isn't obvious — don't narrate what the code already says
- Every new endpoint gets a matching `.spec.ts` before merge

### Before opening a PR
- `npm run lint && npm run test` passes locally
- New/changed routes reflected in the service's README (publishes/consumes list, endpoint list)
- No `.env` values or secrets committed
- If a Kafka event was added or changed, ping the team — don't assume other services will auto-adapt
