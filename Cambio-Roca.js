function Usuario(nombre, pass) {
    this.nombre = nombre;
    this.pass = pass;
  }

  const usuariosRegistrados = JSON.parse(localStorage.getItem("registroUsu")) || [];

  function iniciarSesion() {
    const nombre = document.getElementById("nombre").value;
    const pass = document.getElementById("pass").value;

    const usuarioEncontrado = usuariosRegistrados.find(usu => usu.nombre === nombre && usu.pass === pass);

    if (usuarioEncontrado) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "¿Desea realizar una compra?",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          compra()
          realizarCompra();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Usuario Incorrecto!!!",
        text: "Ingresa un usuario válido.",
        footer: 'Te equivocaste salame'
      });
    }
  }

  function agregarUsuario() {
    const nuevoNombre = document.getElementById("nuevoNombre").value;
    const nuevoPass = document.getElementById("nuevoPass").value;

    if (nuevoNombre !== "" && nuevoPass !== "") {
      const nuevoUsuario = new Usuario(nuevoNombre, nuevoPass);
      usuariosRegistrados.push(nuevoUsuario);
      localStorage.setItem("registroUsu", JSON.stringify(usuariosRegistrados));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario creado!",
        showConfirmButton: false,
        timer: 1800
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Usuario Incorrecto!!!",
        text: "Ingresa un usuario válido.",
        footer: 'Te equivocaste salame'
      });
    }
  }

  // function compra() {
  //    const url="https://dolarapi.com/v1/dolares/blue"

  //   fetch(url)
  //   .then((respuesta)=> respuesta.json())
  //   .then((data)=>console.table(data))
    
  //   fetch(url)
  //     .then((respuesta) => respuesta.json())
  //     .then((data) => {
        
          
  //     })
  //    .catch((error) => console.error("Error al obtener los datos:", error));
  //   }




          
            
        function compra() {
          const url="https://dolarapi.com/v1/dolares/blue"
          const containerCompra = document.getElementById("container-compra");
          fetch(url)
         .then((respuesta)=> respuesta.json())
         .then((data)=>console.table(data))
    
          fetch(url)
         .then((respuesta) => respuesta.json())
         .then((data) => { 
          const h1 = document.createElement("h1");
         const labelDolar = document.createElement("label");
         const inputDolar = document.createElement("input");
         const labelPesos = document.createElement("label");
         const inputPesos = document.createElement("input");
         const botonCompra = document.createElement("button");
        
         h1.textContent = "Compra de dólares";
         labelDolar.textContent = "Cantidad de dólar a comprar:";
         labelPesos.textContent = "Cantidad en pesos argentinos:";
         inputDolar.type = "number";
         inputPesos.type = "number";
         botonCompra.textContent = "Realizar compra";
         botonCompra.addEventListener("click", realizarCompra);

         containerCompra.appendChild(h1);
         containerCompra.appendChild(labelDolar);
         containerCompra.appendChild(inputDolar);
         containerCompra.appendChild(labelPesos);
         containerCompra.appendChild(inputPesos);
         containerCompra.appendChild(botonCompra);




          })
          .catch((error) => console.error("Error al obtener los datos:", error));
        }
      function realizarCompra() {
      montoDolar= inputDolar.value
      montoArg= inputPesos.value
      total= montoArg / montoDolar
    
      console.log("Compra realizada");
    }
      
            
        