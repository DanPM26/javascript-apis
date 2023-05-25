function validarNombre(valor) {
    return valor && valor.length > 3;
  }
  
  function validarApellido(valor) {
    return valor && valor.length > 3;
  }
  
  function validarEdad(valor) {
    return !isNaN(valor);
  }
  
  function validarCorreo(valor) {
    // Expresión regular para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }
  
  function validarFormulario(event) {
    event.preventDefault(); // Evitar envío del formulario por defecto
  
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correotxt").value;
  
    if (!validarNombre(nombre)) {
      alert("Favor de agregar un nombre válido.");
      return false;
    }
  
    if (!validarApellido(apellido)) {
      alert("El apellido no puede estar en blanco.");
      return false;
    }
  
    if (!validarEdad(edad)) {
      alert("Ingresa una edad válida.");
      return false;
    }
  
    if (!validarCorreo(correo)) {
      alert("Ingresa un correo válido.");
      return false;
    }
  
    alert("Formulario válido. Realizar acciones adicionales aquí.");
    return true;
  }
  
  // Asociar la función de validación al evento de envío del formulario
  document.getElementById("formulario").addEventListener("submit", validarFormulario);
  