"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _CardController = require('./app/controllers/CardController'); var _CardController2 = _interopRequireDefault(_CardController);
var _checkCard = require('./app/middlewares/checkCard'); var _checkCard2 = _interopRequireDefault(_checkCard);

const routes = _express.Router.call(void 0, );

routes.get('/', (req, res) => res.json('TEST-API'));

routes.get('/cards', _CardController2.default.index);
routes.get('/cards/:id', _checkCard2.default, _CardController2.default.show);
routes.post('/cards', _CardController2.default.store);
routes.put('/cards/:id', _checkCard2.default, _CardController2.default.update);
routes.delete('/cards/:id', _checkCard2.default, _CardController2.default.delete);

exports. default = routes;
