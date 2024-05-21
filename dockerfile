FROM ubuntu:jammy

WORKDIR /app

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

COPY package*.json ./

RUN npm install

RUN npm install vite

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip

RUN pip3 install locust

RUN npm install newrelic

COPY . .

EXPOSE 3000

CMD ["npm", "start"]