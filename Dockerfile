FROM mysql:latest
RUN chown -R mysql:root /var/lib/mysql
ENV MYSQL_DATABASE: DoacaoDeAnimais
ENV MYSQL_ROOT_PASSWORD: 123456
ENV MYSQL_PASSWORD: 123456

ADD ./utils/DoacaoAnimais.sql etc/mysql/DoacaoAnimais.sql

RUN sed -i 's/MYSQL_DATABASE/'${MYSQL_DATABASE:webhoster}'/g' /etc/mysql/DoacaoAnimais.sql
RUN cp /etc/mysql/m2_webhoster.sql /docker-entrypoint-initdb.d

EXPOSE 3306

FROM node:latest
WORKDIR /app
COPY . .
RUN npm install 
RUN chown -R node /app
EXPOSE 8080
USER node
CMD ["sh", "-c", "sleep 10 && npm start"]