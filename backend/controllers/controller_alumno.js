import { ModeloAlumnos } from "../modelos/modelo_alumno.js"

ModeloAlumnos.create({
    name:"Nathalie ",
    apepat:"Mireles",
    apemat:"Rodriguez",
    edad:20
},
{
    name:"Laisha",
    apepat:"Hernandez",
    apemat:"Hernandez",
    edad:22
},
{
    name:"Jessica",
    apepat:"Martinez",
    apemat:"Ramirez",
    edad:23
},
{
    name:"Alejandro",
    apepat:"Davila",
    apemat:"Martinez",
    edad:20
},
{
    name:"Francisco",
    apepat:"Melendes",
    apemat:"Esparza",
    edad:25
}
)
export const test=()=>{
    console.log("Funciona el controlador")
}