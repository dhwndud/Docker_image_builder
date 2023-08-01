FROM node:16-alpine

RUN apk update
RUN apk add nginx

RUN mkdir -p  /var/www/html

WORKDIR /tmp/docker-image-builder-web

COPY . ./

RUN npm install

RUN npx vite build

RUN cp -r dist/* /var/www/html

RUN chown nginx:nginx /var/www/html

CMD ["nginx", "-g", "daemon off;"]