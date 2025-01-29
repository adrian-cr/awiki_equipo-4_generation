const loginuser = document.getElementById("formulario1");
loginuser.addEventListener("submit", (e) =>{
    e.preventDefault();

    const email = document.getElementById("correoSesion").value;
    const contraseña = document.getElementById("contraseñaSesion").value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const validUser = usuarios.find(Usuario => Usuario.campoCorreo === email && Usuario.campoContraseña === contraseña)
    if(!validUser){
        //return alert ("Usuario y/o contraseña incorrectos!")
    }else {
        alert(`Bienvenida/o ${validUser.campoCorreo}`)
    }
}
)