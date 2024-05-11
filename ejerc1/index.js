// Importar el paquete Nodemailer
const nodemailer = require("nodemailer");

// Configurar las propiedades
const transporterOptions = ({
  service: "gmail",
  auth: {
    user: "jleival0903@gmail.com",
    pass: "noku uyks jnei hlgf",
  },
});

// Crear el transporter utilizando las propiedades
const transporter = nodemailer.createTransport(transporterOptions);

// Definir el correo electrónico a enviar
const mailOptions = {
  from: "jleival0903@gmail.com",
  to: "jorge.leiva.l@gmail.com",
  subject: "Correo enviado desde Node.js",
  text: "Hola, este es un correo enviado desde Node.js",
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error al enviar el correo:", error);
  } else {
    console.log("¡Correo enviado con éxito!");
    console.log("ID del mensaje:", info.messageId);
  }
});
