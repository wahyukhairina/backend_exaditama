![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)

# Football League Table
---

## Table of Contents

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Installation](#installation)
- [Other Dependencies](#Other_Dependencies)
- [License](#license)

---

## Introduction
Football League Table is a Backend Service to track all points after game, while the point calculation are:
1.   Winner get 3 point
2.   Draw get 1 point
3.   Loose get 0 point

---


## Configuration
<ol>
  <li>Basic Configuration</li>
  - Node.js - Download and Install [Node.js](https://nodejs.org/en/)
</ol>

---

## Installation
### Clone
```bash
$ git clone https://github.com/wahyukhairina/point_of_sales
$ npm init
$ npm install express
$ npm install nodemon
$ npm install morgan
$ npm install body-parser
$ npm install mysql
$ npm install dotenv
$ npm install cors
```
### Create Environment Variable
```bash

create .env file in your project root 
copy this configuration
```
```bash
DB_HOST = "YOUR HOST"
DB_USER = "YOUR USER"
DB_PASSWORD = "YOUR PASSWORD"
DB_NAME = "YOUR DATABASE NAME"
PORT = Your Port
```

in package.json add :
```bash
"scripts": {
    "start": "nodemon index.js"
  },
```
### Start Development Server

```bash
$ npm start
```
---

## Other_Dependencies

- [mysql](#)
- [crypto](#)
- [nodemon](#)
- [morgan](#)
- [body-parser](#)
- [dotenv](#)

---

## API

### Record Game
<p align="center"> <img width="500" src='https://user-images.githubusercontent.com/61218212/83933115-6d7e7500-a7d8-11ea-9759-e91676254d23.jpg' /> </p>

### League Standing
<p align="center"> <img width="500" src='https://user-images.githubusercontent.com/61218212/83933208-3197df80-a7d9-11ea-8acd-16af19e0ba31.jpg' /> </p>

### Club Rank
<p align="center"> <img width="500" src='https://user-images.githubusercontent.com/61218212/83933222-4d02ea80-a7d9-11ea-81d4-11d666b1d92e.jpg' /> </p>

---

## License

© [Wahyu Khairina](https://github.com/wahyukhairina/ " Wahyu Khairina")

---

