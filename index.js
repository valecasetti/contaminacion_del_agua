
let datos = `[
    {"id": "1", 
    "Nombre":"Natalia", 
    "Departamento": "Luján", 
    "email":"natalia@gmail.com",
    "Contaminacion": "si",
    "Tipo": "microbiologica",
    "Comentario": "Tengo contaminación y me gustaría contactarlos para consulta profesional"
    },
    {"id": "2", 
    "Nombre":"Facundo", 
    "Departamento":"Guaymallén", 
    "email":"facundo@gmail.com",
    "Contaminacion": "si",
    "Tipo": "quimica",
    "Comentario": ""
    },
    {"id": "3", 
    "Nombre":"Carolina", 
    "Departamento":"Ciudad", 
    "email":"carolina@gmail.com",
    "Contaminacion": "no",
    "Tipo": "microbiologica",
    "Comentario": "como puedo hacer para saber si tengo el agua contaminada?"
    }
]`; 

let datosU = JSON.parse(localStorage.getItem("usuarios")) || [];

let formulario = document.querySelector("form#formulario");

formulario.addEventListener("submit", function(event){
    let errores = [];
    let inputNombre = document.querySelector("input#nombre");
    if (inputNombre.value == ""){
        errores.push("Debe completar con su nombre")
    }else if(inputNombre.value.length < 5){
        errores.push("El nombre debe tener al menos 5 caracteres")
    }
    let inputDepartamento = document.querySelector("input#departamento");
    if (inputDepartamento.value.trim() == ""){
        errores.push("Debe completar con el Departamento/Localidad de la propiedad")
    }

    let ulErrores = document.querySelector("div.errores ul");
    ulErrores.innerHTML = "";
    for(let i = 0; i < errores.length; i++){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }

    if (errores.length === 0){
        event.preventDefault();
        ingresoDatos();
        listaUsuarios();
    }else {
        event.preventDefault();
    }
});

function ingresoDatos() {
    let id = datosU.length + 1;
    let nombre = document.querySelector("input#nombre").value;
    let departamento = document.querySelector("input#departamento").value;
    let email = document.querySelector("input#ingresoEmail").value;
    let contaminacion = document.querySelector("select#contaminacion").value;
    let tipo = document.querySelector("input[name=tipo]:checked").value; 
    let comentario = document.querySelector("textarea#comentarios").value;

    datosU.push({ id: id, Nombre: nombre, Departamento: departamento, Email: email, Contaminacion: contaminacion, Tipo: tipo, Comentario: comentario });

    localStorage.setItem("usuarios", JSON.stringify(datosU));
};

function listaUsuarios() {
    console.log("Registro de Usuarios Mendocinos");
    for (let i = 0; i < datosU.length; i++){
    console.log("id: " + datosU[i].id + ", Nombre: " + datosU[i].Nombre + ", Departamento: " + datosU[i].Departamento + ", email: " + datosU[i].Email + ", Contaminación: " + datosU[i].Contaminacion + ", Tipo: " + datosU[i].Tipo + ", Comentario: " + datosU[i].Comentario);
    }
};

fetch("https://randomuser.me/api/?results=5")
.then((response)=>response.json())
.then((datos)=>{
    let usuarios = datos.results
    console.log(usuarios)

    let afectados = document.querySelector("#perfiles")

    for(let i = 0; i < usuarios.length; i++){
        let perfil = usuarios[i]
        let fechaRegistro = perfil.registered.date.split("T")[0];

        afectados.innerHTML += `
        <div class="perfilUsuario">
            <img src="${perfil.picture.medium}" class="fotoPerfil"/>
            <h2>${perfil.name.first} ${perfil.name.last}</h2>
            <p>Localidad: ${perfil.location.city}</p>
            <p>${perfil.email}</p>
            <p>Fecha de registro: ${fechaRegistro}</p>
        </div>
        `
    }
})
.catch((error)=>{
    console.log(error);
});
