require("dotenv").config();

module.exports = {
  /* SQLite */
  dialect: "mariadb",
  storage: "./db.mariadb",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdat: 'created_at',
    updatedat: 'updated_at',
  },
};
