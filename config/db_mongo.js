const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ejercicio_API_REST_MongoDB");

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;