FROM node:18.16.0-bullseye-slim

RUN apt-get update \
    && apt-get install -y git vim locales \
    && sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen && locale-gen \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src

COPY ./package.json ./yarn.lock* ./package-lock.json* ./pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

COPY . .
