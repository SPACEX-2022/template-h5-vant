FROM nginx:latest
# RUN echo '这是一个本地构建的nginx镜像' > /usr/share/nginx/html/index.html
COPY ./dist /web
COPY ./deploy/nginx-template.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080