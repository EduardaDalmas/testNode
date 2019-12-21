"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Card extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        title: _sequelize2.default.STRING,
        content: _sequelize2.default.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static async nextId() {
    const nextId = await Card.max('id');

    return nextId + 1;
  }
}

exports. default = Card;
