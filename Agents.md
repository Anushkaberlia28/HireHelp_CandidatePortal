# AI Agent Instructions — `candidate-service`

Paste this at the top of the repo (e.g. `AGENTS.md` or `CLAUDE.md`) so any AI agent working in this codebase follows the same rules as the rest of the team.

---

### Project context
This repo is one of 9 microservices that make up **HireHelp**, an AI-assisted recruitment platform. Recruiters publish job requisitions, candidates apply, an AI service scores and helps screen applicants, interviewers give structured feedback, and rejected candidates are archived into a searchable talent pool instead of being lost. All 9 services sit behind a single `api-gateway` and communicate via REST or Kafka events — never via direct cross-service database access.
This document only describes **this repo's** scope and conventions. Do not infer or build functionality that belongs to another service — check the "Scope of this repo" section below before writing code that touches another domain.

### Scope of this repo
This repo owns the **candidate** domain only: candidate auth, profile, resume, applications, dashboard, and candidate-facing notifications. It does **not** own job/requisition data (read it from `recruitment-service`), AI scoring (read it from `ai-evaluation-service`), or interview scheduling (read it from `interview-service`).

### Tech stack — do not deviate
- **Backend:** Express.js + TypeScript (not NestJS, not Fastify)
- **Frontend:** React + TypeScript + Vite + Tailwind + Shadcn UI
- **Drizzle ORM** (not Prisma, not TypeORM) against this service's own **PostgreSQL** database
- Validation with **Zod**
- Tests with **Jest**
- This service's DB is private — no other service, and no other repo's agent, should ever query it directly

### Folder structure — follow exactly, don't reorganize
```
candidate-service/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Login.tsx
│   │   │   └── Register.tsx
│   │   │   └── Dashboard.tsx
│   │   │   └── ProfileForm.tsx
│   │   │   └── ResumeUpload.tsx
│   │   │   └── ApplicationList.tsx
│   │   │   └── ApplicationDetail.tsx
│   │   │   └── NotificationBell.tsx
│   │   │   └── InterviewStatus.tsx
│   │   │   └── AccountSettings.tsx
│   │   ├── components/     shared UI pieces for this service's own pages
│   │   ├── api/             typed calls to this service's routes, via api-gateway
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
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
├── package.json          (server-level; client has its own)
├── tsconfig.json
├── Dockerfile             multi-stage: builds client/ and server/
├── .env.example
└── README.md
```
Every module = `*.routes.ts` + `*.controller.ts` + `*.service.ts` + `*.repository.ts` (Drizzle queries live only in `*.repository.ts`, never in controllers) + `*.schema.ts` (Zod) + `*.spec.ts`.

### Frontend (`client/`)
- **Stack:** React + TypeScript + Vite + Tailwind CSS + Shadcn UI — same across all 9 repos, for visual consistency
- **Pages owned by this service's frontend:** Login, Register, Dashboard, ProfileForm, ResumeUpload, ApplicationList, ApplicationDetail, NotificationBell, InterviewStatus, AccountSettings
- All API calls live in `client/src/api/*.ts` — no inline `fetch`/`axios` calls inside components
- This frontend calls **only this service's own backend** (through `api-gateway`) — never call another service's API directly from a component; if the page needs cross-domain data (e.g. candidate viewing offer status), that data comes back through this service's own backend, which internally calls the other service
- Shared design tokens/components: team has not yet decided between a shared `@hirehelp/ui` package or per-repo styling — confirm before introducing new base components (buttons, inputs, cards) so all 9 frontends don't drift visually

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
- `npm run lint && npm run test` passes locally (both `client/` and `server/`)
- New/changed routes reflected in the service's README (publishes/consumes list, endpoint list)
- No `.env` values or secrets committed
- If a Kafka event was added or changed, ping the team — don't assume other services will auto-adapt
