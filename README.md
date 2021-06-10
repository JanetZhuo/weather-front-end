# Australian Cities Weather App powered by Create React App (CRA)

## § Features

* Basics: React + Axios
* State management: N/A since only a selection
* UI lib: Tailwind

## $ Quick Start

```sh
$ git clone https://github.com/JanetZhuo/weather-front-end.git
$ cd weather-front-end/

# Install dependencies
$ npm i

# Run!
$ npm start
```

Then open http://localhost:3000

## $ Project Structure

Only `src/` will be elaborated below.

```
# Trivial folders/files had been omitted
src/
├── components/ # Reusable components go here, eg. Loading
├── constants/ # All global scope keys go here to avoid name collisions
├── utils/
├── App.js # Currently render weather info here since it's SPA, need ro refactor if more pages comes
└── index.js
```

## § TODO

* Unit Testings with Jest
* Responsive desgin & styling improvement
* Deployment