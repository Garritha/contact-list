// Definir la lista de contactos
let listaDeContactos = [
  "Juan Perez",
  "Maria Lopez",
  "Pedro Gonzalez",
  "Laura Ramirez"
];
// console.log (listaDeContactos);

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
};

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
  let indice = listaDeContactos.indexOf(nombreApellido);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
  }
};

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  for (var i = 0; i < listaDeContactos.length; i++) {
    console.log(listaDeContactos[i]);
  }
};
// Función para actualizar un contacto existente en la lista
function actualizarContacto(nombreApellido, nuevoNombreApellido) {
  var indice = listaDeContactos.indexOf(nombreApellido);
  if (indice !== -1) {
    listaDeContactos[indice] = nuevoNombreApellido;
  }
};

console.log("Contactos actuales:");
// imprimirContactos();

console.log("\nAgregando nuevo contacto...");
agregarContacto("Ana Martinez");
console.log("Contactos después de agregar un nuevo contacto:");
imprimirContactos();

console.log("\nBorrando contacto existente...");
borrarContacto("Pedro Gonzalez");
console.log("Contactos después de borrar un contacto:");
imprimirContactos();
