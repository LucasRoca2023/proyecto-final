
// function usuarios (nombre,pass){
     
//     this.nombre=nombre;
//     this.pass=pass


// }
// const usuariosRegistrados = [
//     {   nombre:"china",
//         pass: 2023

// }
// ]
// function iniciarSecion(nombre,pass){    
//     const usuarioSell= usuariosRegistrados.find((usu)=>usu.nombre===nombre&&usu.pass===pass)
//     if(usuarioSell){
//         alert("bienbenido"+ usuarioSell)
//     }else{
//         alert("usuario incorrecto")
//     }


// }
// function agregarUsuario(nombre,pass){
//      if(nombre!=" "||pass!=""){
//         alert("igresa datos validos")
//      }

//      const nuevoUsuario={
//         nombre,
//         pass
//      }
//      nuevoUsuario.push(nuevoUsuario)

//      localStorage.setItem("registroUsu",JSON.stringify(nuevoUsuario))
//      return true;

// }







// // const url="https://www.dolarsi.com/api/api.php?type=valoresprincipales"

// // fetch(url)
// // .then((respuesta)=> respuesta.json())
// // .then((data)=>console.table(data))

// const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

// const containerCambio= document.getElementById("container-cambio")

// fetch(url)
//   .then((respuesta) => respuesta.json())
//   .then((data) => {
//     // Obtener el contenedor en el que se agregarán las tarjetas
//     const containerCambio = document.getElementById("container-cambio");

//     // Iterar sobre cada valor del dólar
//     data.forEach((dolar) => {
//       // Crear elementos HTML
//       const card = document.createElement("div");
//       const head = document.createElement("h2");
//       const parra = document.createElement("p");

//       // Configurar contenido de los elementos
//       head.textContent = dolar.nombre;
//       parra.textContent = `Compra: ${dolar.compra} Venta: ${dolar.venta}`;

//       // Agregar elementos a la tarjeta
//       card.appendChild(head);
//       card.appendChild(parra);

//       // Agregar tarjeta al contenedor
//       containerCambio.appendChild(card);
//     });
//   })
//   .catch((error) => console.error("Error al obtener los datos:", error));




    
        function Usuario(nombre, pass) {
            this.nombre = nombre;
            this.pass = pass;
        }

        const usuariosRegistrados = [
            { nombre: "china", pass: "2023" }
        ];

        function iniciarSesion() {
            const nombre = document.getElementById("nombre").value;
            const pass = document.getElementById("pass").value;

            const usuarioEncontrado = usuariosRegistrados.find(usu => usu.nombre === nombre && usu.pass === pass);

            if (usuarioEncontrado) {
                alert("¡Bienvenido, " + usuarioEncontrado.nombre + "!");
            } else {
                alert("Usuario incorrecto");
            }
        }

        function agregarUsuario() {
            const nuevoNombre = document.getElementById("nuevoNombre").value;
            const nuevoPass = document.getElementById("nuevoPass").value;

            if (nuevoNombre !== "" && nuevoPass !== "") {
                const nuevoUsuario = new Usuario(nuevoNombre, nuevoPass);
                usuariosRegistrados.push(nuevoUsuario);
                localStorage.setItem("registroUsu", JSON.stringify(usuariosRegistrados));
                alert("Usuario agregado correctamente");
            } else {
                alert("Ingresa datos válidos");
            }
        }
