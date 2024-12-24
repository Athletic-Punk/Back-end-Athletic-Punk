import nodemailer from "nodemailer";
import SMTP from "../config/smtp.js";

class emailControllers {
  static async welcomeEmail(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: SMTP.from,
          pass: SMTP.pass
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const sendEmail = await transporter.sendMail({
          from: SMTP.from,
          to: email,
          subject: "Bem-vind@ ao Athletic Punk! 🚀",
          html: `<h1>Olá, ${name}!</h1><br>
                <p>É com muita alegria que damos as boas-vindas à comunidade Athletic Punk! 🎉 Aqui, você encontrará um espaço dedicado a esportes, saúde e bem-estar, com conteúdos incríveis sobre basquete, futebol, ginástica, vôlei e muito mais.</p>
                <p>Explore, conecte-se com outros entusiastas e aproveite as funcionalidades da nossa plataforma, como seu perfil personalizado e nosso chatbot inteligente. Estamos animados para fazer parte da sua jornada esportiva!</p>
                <p>Qualquer dúvida, estamos por aqui.</p><br>
                Abraços,<br>
                    Equipe Athletic Punk 🏀⚽🤸‍♀️`,
        })
        .then(() => console.log("Email sent successfully!"))
        .catch((error) => console.error(error));

      res.status(200).send("Email sent successfully!");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
}

export default emailControllers;
