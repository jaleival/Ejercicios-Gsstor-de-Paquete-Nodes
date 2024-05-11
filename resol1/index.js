import nodemailer from 'nodemailer';
import 'dotenv/config';

const { USER_EMAIL, USER_PASSWORD } = process.env;

// Configuracion de las credenciales
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'USER_EMAIL',
        pass: 'USER_PASSWORD'
    }
})
// Configuración de las opciones
let mailOptions = {
    from: 'USER_EMAIL',
    to: 'jorge.leiva.l@gmail.com',
    // cc: 'jleival0903@gmail.com',
    subject: 'Correo enviado desde Node.js',
    html: '<h1 style="color:blue">Hola prueba como estas</h1>' 
}

// Envío del correo
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Email enviado' + info.response)
    }
})