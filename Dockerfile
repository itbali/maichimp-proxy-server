FROM public.ecr.aws/h4m7v9o4/node:18.12.1-alpine-pnpm-8.11.0 as node-build
WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile
EXPOSE 3000

CMD ["pnpm", "start"]