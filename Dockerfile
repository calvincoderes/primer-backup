FROM node:16-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY . .

RUN yarn install
RUN yarn run build
RUN cp -R ./images /app/dist

FROM nginx:1.21-alpine

RUN apk add --no-cache --update bash curl && \
    rm -rf /var/cache/apk/*

EXPOSE 80

HEALTHCHECK --interval=1m --timeout=3s \
    CMD curl --fail http://127.0.0.1 || exit 1

COPY  --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
