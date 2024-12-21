const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", event => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();

    // etiqueta de error
    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorEmail = document.getElementById("errorEmail");

    //Inicialiizar validacion
    let formularioValido = true;

    // validad nombre
    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    }
    else { errorNombre.classList.add("d-none"); }

    //validad apellido
    if (apellido === "") {
        errorApellido.classList.remove("d-none");
        formularioValido = false;
    }
    else { errorApellido.classList.add("d-none"); }

    // validad mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    }
    else {
        errorEmail.classList.add("d-none");
    }


});