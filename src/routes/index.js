const { Router } = require("express");

const emailsService = require("../services/sendEmails");
const emailLayout = require("../utils/emailLayout");

const router = Router();

router.post("/send-email", async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  const htmlMessage = emailLayout({
    name,
    email,
    phone,
    message,
  });

  const result = await emailsService.sendMail({
    from: "Jose Developer Test <josedev29.test@gmail.com>",
    to: email,
    subject: "Hello. I´m new message from nodemailer",
    message: "Hello. I´m new message from nodemailer",
    html: htmlMessage,
  });

  //console.log("---Result send email: ", result);

  res.redirect("/success.html");
});

module.exports = router;
