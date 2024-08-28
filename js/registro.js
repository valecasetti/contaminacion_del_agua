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
