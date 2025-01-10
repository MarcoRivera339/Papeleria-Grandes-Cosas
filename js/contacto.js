  document.querySelector("form").addEventListener("submit", function (event) {
    // Previene el envío del formulario si hay errores
    let isValid = true;

    // Validación para el campo "Nombre"
    const nombre = document.querySelector("input[placeholder='nombre']");
    if (nombre.value.length < 3 || nombre.value.length > 200) {
      alert("El campo 'Nombre' debe tener entre 3 y 200 caracteres.");
      isValid = false;
    }

    // Validación para el campo "Apellido"
    const apellido = document.querySelector("input[placeholder='Apellido']");
    if (apellido.value.length < 3 || apellido.value.length > 200) {
      alert("El campo 'Apellido' debe tener entre 3 y 200 caracteres.");
      isValid = false;
    }

    // Validación para el campo "Dirección"
    const direccion = document.getElementById("inputAddress");
    if (direccion.value.length < 3 || direccion.value.length > 200) {
      alert("El campo 'Dirección' debe tener entre 3 y 200 caracteres.");
      isValid = false;
    }

    // Validación para el campo "Email"
    const email = document.getElementById("inputEmail4");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      isValid = false;
    }

    // Validación para el campo "Provincia"
    const provincia = document.getElementById("inputState");
    if (provincia.value === "") {
      alert("Por favor, seleccione una provincia.");
      isValid = false;
    }

    // Validación para el campo "Ciudad"
    const ciudad = document.getElementById("inputCity");
    if (ciudad.value.trim() === "") {
      alert("El campo 'Ciudad' es obligatorio.");
      isValid = false;
    }

    // Validación para el campo "Contacto"
    const contacto = document.getElementById("inputContacto");
    const contactoRegex = /^\d{9,10}$/;
    if (!contactoRegex.test(contacto.value)) {
      alert("El campo 'Contacto' debe contener entre 9 y 10 dígitos.");
      isValid = false;
    }

    // Validación para el campo "Mensaje" (si quieres que sea obligatorio)
    const mensaje = document.querySelector("textarea");
    if (mensaje.value.trim() === "") {
      alert("El campo 'Mensaje' es obligatorio.");
      isValid = false;
    }

    // Previene el envío si alguna validación falla
    if (!isValid) {
      event.preventDefault();
    }
  });
