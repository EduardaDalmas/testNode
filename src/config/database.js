module.exports = {
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
};
