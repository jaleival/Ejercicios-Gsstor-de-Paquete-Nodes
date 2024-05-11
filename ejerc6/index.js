// Importar las dependencias
import express from "express";
import sharp from "sharp";

// Crear la aplicación de Express
const app = express();

// Definir el puerto
const PORT = process.env.PORT || 3000;

// Ruta para procesar la imagen
app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "image/png");
  const imagen = await Jimp.read(
    "https://miviaje.com/wp-content/uploads/2016/05/shutterstock_337174700.jpg"
  );
  await imagen
    .resize(550, Jimp.AUTO)
    .greyscale()
    .quality(20)
    .writeAsync("img.png");
  const imagenData = fs.readFileSync("img.png");
  res.send(imagenData);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
