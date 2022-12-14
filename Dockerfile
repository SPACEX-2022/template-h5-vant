FROM nginx:latest
ADD ./dist /web
ADD ./deploy/nginx-template.conf /etc/nginx/conf.d/default.conf
EXPOSE 8081