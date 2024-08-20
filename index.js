
let datos = `[
    {"id": "1", 
    "Nombre":"Natalia", 
    "Departamento": "Luján", 
    "email":"natalia@gmail.com"
    },
    {"id": "2", 
    "Nombre":"Facundo", 
    "Departamento":"Guaymallén", 
    "email":"facundo@gmail.com"
    },
    {"id": "3", 
    "Nombre":"Carolina", 
    "Departamento":"Ciudad", 
    "email":"carolina@gmail.com"
    }
]`; 

let datosUsuarios = localStorage.setItem("usuarios", datos);
let datosU = JSON.parse(localStorage.getItem("usuarios"));

function ingresoDatos() {
    let id = datosU.length + 1;
    let Nombre = prompt("Ingrese su nombre:");
    let Departamento = prompt("En qué departamento vive?");
    let email = prompt("Ingrese un email de contacto");
    
    datosU.push({ id: id, Nombre: Nombre, Departamento: Departamento, email: email });

    localStorage.setItem("usuarios", JSON.stringify(datosU));
    localStorage.getItem("usuarios");
};

function listaUsuarios() {
    console.log("Registro de Usuarios Mendocinos");
    for (let i = 0; i < datosU.length; i++) {
    console.log("id: " + datosU[i].id + ", Nombre: " + datosU[i].Nombre + ", Departamento: " + datosU[i].Departamento + ", email: " + datosU[i].email);
    }
};

ingresoDatos();
listaUsuarios();


