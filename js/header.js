// localizar el nodo eb ek DOM
// nodo: etiqueta en su archivo .html

let header_del_DOM = document.querySelector(".header");

// almacenar en una variable el contenido a agregar

// agregar el contenido a la referencia del DOM
let header = '<img src="./img/logo.png" alt=""><p>Parqueo SCL</p> <nav><ul><li>Automóvil| 🚗</li><li>Autobúses| 🚌</li><li>Motocicleta| 🏍</li><li>Camionetas| 🚛</li><li>Otros| 🚲</li></ul></nav><div></div>';

header_del_DOM.innerHTML = header;