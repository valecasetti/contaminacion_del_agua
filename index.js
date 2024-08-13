
let datosUsuarios = `[
    {"ID": "1", 
    "Nombre":"Natalia", 
    "Departamento": "Luján", 
    "email":"natalia@gmail.com"
    },
    {"ID": "2", 
    "Nombre":"Facundo", 
    "Departamento":"Guaymallén", 
    "email":"facundo@gmail.com"
    },
    {"ID": "3", 
    "Nombre":"Carolina", 
    "Departamento":"Ciudad", 
    "email":"carolina@gmail.com"
    }
]`;

let datosJs = JSON.parse(datosUsuarios);

function ingresoDatos() {
    let id = datosJs.length + 1;
    let Nombre = prompt("Ingrese su nombre:");
    let Departamento = prompt("En qué departamento vive?");
    let email = prompt("Ingrese un email de contacto");
    
    datosJs.push({ ID: id, Nombre: Nombre, Departamento: Departamento, email: email });

    localStorage.setItem("usuarios", JSON.stringify(datosJs));
    localStorage.getItem("usuarios");
};

function listaUsuarios() {
    console.log("Registro de Usuarios Mendocinos");
    for (let i = 0; i < datosJs.length; i++) {
    console.log("ID: " + datosJs[i].ID + ", Nombre: " + datosJs[i].Nombre + ", Departamento: " + datosJs[i].Departamento + ", email: " + datosJs[i].email);
    }
};

ingresoDatos();
listaUsuarios();

