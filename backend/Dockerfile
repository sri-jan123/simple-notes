FROM node

RUN mkdir -p notes-backend

COPY . /notes-backend

#if inside any other directory, we specify whole path -> ex: CMD["node","/testapp/server.js"]
CMD ["node","/notes-backend/server.js"]
