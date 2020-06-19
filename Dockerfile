FROM alpine:3.9
RUN apk add yarn
COPY . /app
WORKDIR /app
RUN yarn
CMD yarn start

