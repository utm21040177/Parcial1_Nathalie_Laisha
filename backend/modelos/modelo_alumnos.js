import{ Schema, model} from "mongoose"

const AlumnosReprobados = new Schema({
    name:{
        type: String
    },
    apepat:{
        type:String
    },
    apemat:{
        type: String
    },
    edad:{
        type: Number
    }
})
export const ModeloAlumnos = new model("Tabla de alumnos reprobados", AlumnosReprobados)