FROM node:12

WORKDIR /home/node
RUN apt update \
  && apt install -y git yarn vim

#ENV SOURCE_DIRECTORY_PUBLIC=/public
#ENV SOURCE_DIRECTORY_SRC=/src

#ENV INSTALL_DIRECTORY=/home/node/carbon-tutorial
#ENV INSTALL_DIRECTORY_PUBLIC=/home/node/carbon-tutorial/public
#ENV INSTALL_DIRECTORY_SRC=/home/node/carbon-tutorial/src

#RUN mkdir -p $INSTALL_DIRECTORY \
#  && mkdir -p $INSTALL_DIRECTORY_PUBLIC \
#  && mkdir -p $INSTALL_DIRECTORY_SRC

#ADD $SOURCE_DIRECTORY_PUBLIC $INSTALL_DIRECTORY_PUBLIC
#ADD $SOURCE_DIRECTORY_SRC $INSTALL_DIRECTORY_SRC
#ADD package.json $INSTALL_DIRECTORY/package.json
#ADD .npmrc $INSTALL_DIRECTORY/.npmrc
#ADD .yarnrc $INSTALL_DIRECTORY/.yarnrc
#ADD yarn.lock $INSTALL_DIRECTORY/yarn.lock


#RUN git clone https://github.com/carbon-design-system/carbon-tutorial.git \
#  && ls -l  ./carbon-tutorial

WORKDIR /home/node/carbon-tutorial

#RUN ls -l $INSTALL_DIRECTORY
#RUN ls -l
#RUN rm -fr node_modules \
#  && rm yarn.lock \
#  && yarn \
#  && yarn global add serve \
#  && yarn add carbon-components carbon-components-react @carbon/icons-react carbon-icons \
#  && yarn add node-sass@4.12.0 \
#  && yarn add react-router-dom@5.0.0

#RUN yarn format \
#  && yarn ci-check

EXPOSE 3000

#CMD serve -s build
CMD sh run.sh
