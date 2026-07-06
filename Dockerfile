# Stage 1: Install dependencies & Build
FROM node:22-alpine AS builderProfile
WORKDIR /app

ENV DOCKER_BUILD=1

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production Runner
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3033

# คัดลอกเฉพาะไฟล์ที่จำเป็นสำหรับการรัน
COPY --from=builderProfile /app/package*.json ./
COPY --from=builderProfile /app/node_modules ./node_modules
COPY --from=builderProfile /app/.next ./.next
COPY --from=builderProfile /app/public ./public

EXPOSE 3033

# บังคับให้ Next.js start ที่พอร์ต 3033 ให้ตรงกับ Docker Compose
CMD ["npx", "next", "start", "-p", "3033"]
