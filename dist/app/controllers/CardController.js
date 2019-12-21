"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Card = require('../models/Card'); var _Card2 = _interopRequireDefault(_Card);

class CardController {
  async index(req, res) {
    const cards = await _Card2.default.findAll();

    return res.json(cards);
  }

  async show(req, res) {
    const { card } = req;
    return res.json(card);
  }

  async store(req, res) {
    const { title, content } = req.body;

    const nextId = await _Card2.default.nextId();

    const card = await _Card2.default.create({
      id: nextId,
      title,
      content,
    });

    res.json(card);
  }

  async update(req, res) {
    const { card } = req;
    const { title, content } = req.body;

    card.title = title;
    card.content = content;

    card.save();

    res.json(card);
  }

  async delete(req, res) {
    const { card } = req;

    card.destroy();

    const cards = await _Card2.default.findAll();

    res.json(cards);
  }
}

exports. default = new CardController();
