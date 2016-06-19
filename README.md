# MongoDB Node/Express React/Redux Starter

## client

The client side files are cloned from 
https://github.com/StephenGrider/ReduxSimpleStarter

1. install dependencies
```
npm install
```
2. run webpack and development server at localhost:8080
```
npm start
```
alternatively, run webpack itself to generate a bundle.js file
```
webpack
```

## server
1. install dependencies
```
npm install
```
2. run server to serve static files in the client folder
```
node server.js
```

## MongoDB

start running a MongoDB instance
```
mongod
```
Connect to the mongoDB directly in terminal
```
mongo
```

to see mongodb processes that are running
```
ps -ax | grep mongo
```

basic mango shell commands
```
show dbs
use [db name]
show collections
use [collection names]
db.[collection name].find()
```