# ReadMe
> Publishing platform avaliable for everyone.

## Project Overview
readMe is a fullstack project. It contains both server and frontend. Server is contained in a `server` folder and frontend is stored in `app` folder.

## Code
Overall, code is self documented. Method names and variable names are self-explanotory.

## Get Started
Clone the repo: ```git clone git@github.com:awave1/readme-platform.git && cd readme-platform```

With ```npm``` installed, run the following: 
1. ```npm install```
2. ```npm --prefix ./app install```

#### To start the app:
1. ```cd app```
2. ```npm start``` or ```yarn start```
3. or in ```readme-platform``` folder run ```npm run start_app``` or ```yarn start_app```

#### To start the api server
1. In ```readme-platform``` folder run ```npm run start_server``` or ```yarn start_server``` 

## Things to know

### Basics (HTML/CSS/JS) & React

1. Basic HTML/CSS
2. [React](https://reactjs.org/tutorial/tutorial.html) + [ES6 (modern JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
3. [TypeScript (ES6 with types)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### Async in javascript

Read in following order:

1. [Callbacks](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
2. [Promises](https://codeburst.io/javascript-learn-promises-f1eaa00c5461)
3. [Async/Await](https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65)

### Javascript Unit Testing (Chai and Mocha in particular)

Testing is easy. Look for examples in `server/test` folder.

1. [Mocha](https://mochajs.org/#getting-started)
2. [Chai](http://www.chaijs.com/)

### NodeJS backend & Postgresql

Backend is written in `typescript`, using `express` framework. Database of choice is Postgresql. To access database, we use `pg` library.

1. [Express](https://expressjs.com/)
2. [Postgres tutorial](http://www.postgresqltutorial.com/)
3. [pg](https://node-postgres.com/)
4. [RESTful Api](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)
