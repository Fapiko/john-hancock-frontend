FROM nginx

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
