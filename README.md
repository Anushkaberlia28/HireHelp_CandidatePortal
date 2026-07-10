# HireHelp Candidate Service

This is the **candidate-service** microservice for HireHelp, an AI-assisted recruitment platform. This service handles candidate authentication, profile management, resume uploads, job applications, dashboard analytics, notifications, and interview status tracking.

## Scope

This service owns the **candidate domain only**:
- Candidate auth (separate from recruiter/admin auth)
- Profile management
- Resume upload and storage
- Job applications
- Dashboard analytics
- Candidate-facing notifications
- Interview status tracking

This service does **not** own:
- Job/requisition data (read from `recruitment-service`)
- AI scoring (read from `ai-evaluation-service`)
- Interview scheduling (read from `interview-service`)

## Tech Stack

- **Backend:** Express.js + TypeScript
- **Frontend:** React + TypeScript + Vite + Tailwind CSS + Shadcn UI
- **Database:** PostgreSQL with Drizzle ORM
- **Validation:** Zod
- **Testing:** Jest
- **Message Queue:** Kafka (kafkajs)
- **File Storage:** S3/MinIO (AWS SDK)

## Folder Structure

```
candidate-service/
├── client/
│   ├── src/
│   │   ├── pages/          # React pages
│   │   ├── components/     # Shared UI components
│   │   ├── api/            # API calls to this service
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── server/
│   ├── src/
│   │   ├── config/         # Environment loading, DB client, constants
│   │   ├── common/
│   │   │   ├── middleware/  # auth, error-handler, validate
│   │   │   └── types/       # express.d.ts (req.user augmentation)
│   │   ├── database/
│   │   │   ├── schema.ts    # Drizzle table definitions
│   │   │   └── migrations/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── profile/
│   │   │   ├── resume/
│   │   │   ├── applications/
│   │   │   ├── dashboard/
│   │   │   ├── notifications/
│   │   │   ├── interview-status/
│   │   │   ├── events/
│   │   │   │   ├── kafka-producer.ts
│   │   │   │   ├── kafka-consumer.ts
│   │   │   │   └── handlers/
│   │   │   └── clients/     # HTTP clients to other services
│   │   ├── routes.ts       # Combines all module routers
│   │   ├── app.ts          # Express app setup
│   │   └── index.ts        # Entry point
│   ├── package.json
│   └── tsconfig.json
├── package.json
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```

## Module Structure

Every module follows this pattern:
- `*.routes.ts` - Express router
- `*.controller.ts` - Request handlers
- `*.service.ts` - Business logic
- `*.repository.ts` - Drizzle DB queries
- `*.schema.ts` - Zod validation schemas
- `*.spec.ts` - Jest tests

## Kafka Events

### Published Events
- `CandidateRegistered` - Emitted when a new candidate registers
- `ResumeUploaded` - Emitted when a candidate uploads a resume

### Consumed Events
- `FitmentScoreCalculated` - Updates application fitment score
- `InterviewScheduled` - Creates interview status record
- `OfferGenerated` - Updates application status to 'offer'

## API Endpoints

### Auth
- `POST /api/auth/register` - Register a new candidate
- `POST /api/auth/login` - Login candidate
- `GET /api/auth/me` - Get current candidate profile

### Profile
- `GET /api/profile` - Get candidate profile
- `PUT /api/profile` - Update candidate profile
- `POST /api/profile/experience` - Add work experience
- `POST /api/profile/education` - Add education
- `POST /api/profile/skills` - Add skill

### Resume
- `POST /api/resume/upload` - Upload resume file
- `GET /api/resume` - List candidate resumes
- `DELETE /api/resume/:id` - Delete resume

### Applications
- `GET /api/applications` - List candidate applications
- `GET /api/applications/:id` - Get application details
- `POST /api/applications` - Apply to a job

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/overview` - Get full dashboard overview

### Notifications
- `GET /api/notifications` - List notifications
- `GET /api/notifications/unread-count` - Get unread count
- `POST /api/notifications/mark-read` - Mark notifications as read
- `POST /api/notifications/mark-all-read` - Mark all as read

### Interview Status
- `GET /api/interview-status` - List interview statuses
- `GET /api/interview-status/:id` - Get interview details
- `PUT /api/interview-status/:id` - Update interview status

## Environment Variables

See `.env.example` for required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT signing secret
- `JWT_EXPIRES_IN` - Token expiration
- `KAFKA_BROKERS` - Kafka broker addresses
- `S3_ENDPOINT` - S3/MinIO endpoint
- `S3_BUCKET` - S3 bucket name
- `S3_ACCESS_KEY` - S3 access key
- `S3_SECRET_KEY` - S3 secret key
- `CLIENT_URL` - Frontend URL for CORS

## Development

### Install Dependencies
```bash
npm install
```

### Run Development
```bash
npm run dev
```

### Run Tests
```bash
npm run test
```

### Lint
```bash
npm run lint
```

## Docker Build

```bash
docker build -t candidate-service .
```

## Database Migrations

Run Drizzle migrations:
```bash
npm run db:migrate
```

## Notes

- This service's database is private — no other service should query it directly
- All cross-service communication happens via HTTP clients or Kafka events
- Candidate auth is separate from recruiter/admin auth (different JWT issuer/audience)
- Resume files are stored in S3/MinIO, never in the database
