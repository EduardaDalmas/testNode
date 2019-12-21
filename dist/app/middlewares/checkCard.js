"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Card = require('../models/Card'); var _Card2 = _interopRequireDefault(_Card);

// eslint-disable-next-line consistent-return
exports. default = async (req, res, next) => {
  const { id } = req.params;
  const card = await _Card2.default.findByPk(id);

  if (!card) {
    return res.json({ error: 'Card not found.' });
  }
  req.card = card;

  next();
};
