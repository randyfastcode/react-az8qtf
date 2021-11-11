import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const url = 'http://www.raydelto.org/agenda.php';

function saveContacto() {

  alert("funcion llamada");
  var formulario = document.getElementById('formulario');
  var datos = new FormData(formulario);

  const url1 = 'http://www.raydelto.org/agenda.php';
  
  fetch(url1, {
    method: 'POST',
    body: JSON.stringify({
      nombre: datos.get('nombre'),
      apellido: datos.get('apellido'),
      telefono: datos.get('telefono'),
    }),
  })
    .then((Response) => Response.json())
    .then((json) => console.log(json));
}

function getContactos() {
  var divContacto = document.getElementById('divContacto');
  fetch(url)
    .then(function (datos) {
      return datos.json();
    })
    .then(function (listado) {
      var cadenaListado = '';

      for (contacto of listado) {
        console.log(contacto);
        cadenaListado +=
          '<label>' +
          'Nombre: ' +
          '</label>' +
          contacto.nombre +
          '<br/>\n' +
          '<label>' +
          'Apellido: ' +
          '</label>' +
          contacto.apellido +
          '<br/>\n' +
          '<label>' +
          'Telefono: ' +
          '</label>' +
          contacto.telefono +
          '<br/>\n' +
          '<br/>\n';
      }
      divContacto.innerHTML = cadenaListado;
    });
    
}

var showContacts = document.getElementById('btnvercont');
var submitContact = document.getElementById('btnguardar');



ReactDOM.render(<App />, document.getElementById('root'));
