import React, { Component } from 'react';
import  './style.css';
import'./index.js';

function app(){

const url = 'http://www.raydelto.org/agenda.php';
  
const guardarContacto = () =>{
  alert("funcion llamada");
  var formulario = document.getElementById('formulario');
  var datos = new FormData(formulario);
  
  fetch(url, {
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

const obtenerContactos = () =>{
  var divContacto = document.getElementById("divContacto");
  fetch(url).then(function(datos){
      return datos.json();
  }).then(function(listado){
      var cadenaListado = "";
      
      for(contacto of listado)
      {
          console.log(contacto);
          cadenaListado += 
          "<label>" + "Nombre: " +  "</label>" + contacto.nombre +  "<br/>\n" +
           "<label>" + "Apellido: " + "</label>" + contacto.apellido + "<br/>\n" +
           "<label>" + "Telefono: " + "</label>" +contacto.telefono + "<br/>\n" + "<br/>\n";
      }
      divContacto.innerHTML = cadenaListado;
  });
}
  return(
    <div>
    
       <h1>Agenda multicapas</h1>
       <form id="formulario">
        <label htmlFor="lnombre">Nombre</label>
        <input type="text" id="fname" name="nombre" placeholder="ingrese el nombre"/>
        <label htmlFor="lapellido">Apellido</label>
        <input type="text" id="lname" name="apellido" placeholder="ingrese el apellido"/>
        <label htmlFor="lapellido">Telefono</label>
        <input type="text" id="tel" name="telefono" placeholder="ingrese el telefono"/>
        <input type="button" value="Guardar" id="btnguardar" onClick={guardarContacto}/>
        <input type="button" value="Ver contactos" id="btnvercont" onClick={obtenerContactos}/>
      </form>
      
      <h2>Lista de contactos</h2>

        <div id="divContacto" className="cuerpo">

        </div>

    </div>
  );
};



export default app;

