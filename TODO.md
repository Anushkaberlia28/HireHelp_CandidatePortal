# TODO - Functional backend wiring

## Step 1
- [x] Edit `server/src/server.js` to keep auth mounted
- [x] Add placeholder mounts for other modules (jobs/profile/interviews/applications/notifications/resume/etc) so server compiles even if routes aren’t implemented yet


## Step 2
- [ ] Identify which module route files actually exist under `server/src/modules/**/routes`
- [ ] For modules with missing/empty routes, create minimal route handlers (router + endpoints) that match client service usage

## Step 3
- [ ] Wire route -> controller/service/repository for each implemented module (connect the layers)

## Step 4
- [ ] Run backend and verify endpoints via curl

## Step 5
- [ ] Run frontend compile (if needed) and verify client calls don’t 404

## Build scripts
- [x] Add `npm run build` script to `server/package.json`

