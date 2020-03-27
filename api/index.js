"use strict" 
console.log("holas mis crespo");

//constantes a usar
const ex = require("express");
const app = ex();
const puerto = 3000;

app.get("/", (req, res) => {
    res.send("home")
})
// metodos de funcion
app.listen(puerto,()=>{
console.log('servidor escuchando en el puerto '+puerto+' y corriendo desde http/localhost:' + puerto);
});