#FROM image-registry.openshift-image-registry.svc:5000/carbon-tutorial-pipelines/node:19
From registry.access.redhat.com/ubi8/nodejs-16:1-82
WORKDIR /usr/src/app

COPY package*.json ./
USER root 
RUN mkdir -p /usr/src/app/node_modules /usr/src/app/


RUN npm install -g npm@9.4.2
# Bundle app source
COPY . .

RUN npm install -g yarn
RUN yarn install


RUN yarn add @carbon/react@1.1.0
RUN yarn add sass@1.51.0

RUN chown -R 1001:0 /usr/src/app/node_modules /usr/src/app/ && chmod -R ug+rwx /usr/src/app/node_modules /usr/src/app/

USER 1001
EXPOSE 3000
CMD [ "yarn", "start" ]
