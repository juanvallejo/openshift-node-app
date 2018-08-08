FROM node

# create app directory
WORKDIR /opt/app-data/nodeapp

# bundle app source
COPY . ./

ENV HOME /opt/app-data/blog

EXPOSE 8000
CMD [ "node", "."  ]
