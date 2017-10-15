FROM kkarczmarczyk/node-yarn
COPY . /var/www
WORKDIR /var/www
RUN yarn install
ENTRYPOINT yarn start
EXPOSE 3000