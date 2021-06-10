# Australian Cities Weather App powered by Create React App (CRA)

## § Little Demo
https://user-images.githubusercontent.com/45689833/121608679-ce98f280-ca95-11eb-8ba7-d08fc51af47d.mov


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

# Please run the back end code as well, otherwise you will get network Err when you open this page!
https://github.com/JanetZhuo/weather-back-end
```

Then open http://localhost:3000

## $ Project Structure

Only `src/` will be elaborated below.

```
# Trivial folders/files had been omitted
src/
├── components/ # Reusable components go here, eg. Loading
├── constants/ # All global scope keys go here to avoid name collisions
├── utilities/
├── App.js # Currently render weather info here since it's SPA, need to refactor if more pages comes
└── index.js
```

## § TODO

* Unit Testings with Jest
* Responsive desgin & styling improvement
* Deployment
