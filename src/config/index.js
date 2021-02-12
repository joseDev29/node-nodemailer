require("dotenv").config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT,
  },
  nodemailer: {
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: Boolean(process.env.NODEMAILER_SECURE),
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
};
