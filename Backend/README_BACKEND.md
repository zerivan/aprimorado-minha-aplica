# Backend - Laughing Octo Enigma

## Setup
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run build
npm start

## Docker local
docker-compose up --build

## Render
Use Docker environment, root directory backend. Dockerfile is multi-stage and will build then run.
