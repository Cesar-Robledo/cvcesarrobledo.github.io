 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const comentarios = document.getElementsByName("message")[0].value;

    // Construir los datos a enviar por correo
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", comentarios);
    
    // Enviar los datos utilizando FormSubmit
    fetch("https://formsubmit.co/robledoca@gmail.com", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta del envío por correo:", data);
        // Aquí puedes realizar cualquier acción adicional después del envío, como mostrar un mensaje de confirmación al usuario
      })
      .catch(error => {
        console.error("Error al enviar el formulario:", error);
        // Aquí puedes manejar cualquier error que ocurra durante el envío del formulario
      });
  });