<h1 align="center">Welcome to iot-measure-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ENI-projects/iot-measure-api#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ENI-projects/iot-measure-api/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-No-red.svg" />
  </a>
  <a href="https://twitter.com/404MomNotFound" target="_blank">
    <img alt="Twitter: 404MomNotFound" src="https://img.shields.io/twitter/follow/404MomNotFound.svg?style=social" />
  </a>
</p>

> A REST API written in JavaScript using node, express and Joi to manipulate measures.

### 🏠 [Homepage](https://github.com/DreamyProtect/iot-measure-api#readme)

## Install

```sh
npm install
```

## Usage

```sh
node server.js
```

## Endpoints

### Get all measures
```
GET /measures
```
Returns an array of JSON objects, each representing one measure.

### Get one measure
```
GET /measure/:id
```
Returns a JSON object representing one measure

### Add one measure
```
POST /measure
```
Add one measure to the array of the measures, the request body should be formatted this way :
```
{
  "unit": "celcius" || "fahrenheit",
  "type": "temperature",
  "name": "$name",
  "value": $value
}
```

### Modify one measure
```
PUT /measure/:id
```
Modify one measure in the array of the measures, the request body should be formatted this way :
```
{
  "unit": "celcius" || "fahrenheit",
  "type": "temperature",
  "name": "$name",
  "value": $value
}
```

### Delete one measure
```
DELETE /measure/:id
```
Deletes the measure with the id requested

## Author

* Twitter: [@404MomNotFound](https://twitter.com/404MomNotFound)
* Github: [@DreamyProtect](https://github.com/DreamyProtect)

## 🤝 Contributing

This repository was made during a class session at the ENI CS School, and is not made to receive any contribution, however, if you have any question or need any advice concerning the code, I'll gladly answer you, so feel free to create [issues](https://github.com/DreamyProtect/iot-measure-api/issues)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/ENI-projects/iot-measure-api/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_