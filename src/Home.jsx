import React from 'react';
import './edicion.css'; 
import portada from './fotos/Captura de pantalla 2024-01-31 173525.png';
import diapo1 from './fotos/pagina1.png';
import diapo2 from './fotos/pagina2.png';
import diapo3 from './fotos/pagina3.png';
import diapo4 from './fotos/pagina4.png';
import diapo5 from './fotos/pagina5.png';


function EstiloPerfecto() {
  return (
    <div className="master">
      <div className="section">
        <div className="content">
          <div className="text-container">
            <h3>AGENDA MASTER</h3>
            <p className="textoinicial">
              "Agenda Master" es una aplicación<br />
              que tiene como objetivo lograr que<br />
              en tu calendario se encuentren además<br />
              de las fechas, todas las actividades <br />
              y tareas de tus día a día, de una forma <br />
              ordenada e intuitiva para que puedas <br />
              lograr una organización óptima de la <br />
              manera más rápida y sencilla.
            </p>
          </div>
          <div className="portada">
            <img src={portada} alt="Portada" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="primertexto">
          <br /><br /><br /><br />
          <h3>EL PROBLEMA</h3><br /><br />
          Todo el mundo tiene listas de tareas a realizar, al hacerlas sentimos una sensación de liviandad y orgullo.
          Los calendarios normales están en su mayoría llenos de fechas, reuniones y eventos que están demasiado estructurados y no exactamente al alcance, sin embargo nuestro día a día suele estar más lleno de tareas, notas y pequeñas cosas que tenemos que hacer en un determinado día/semana/mes. 
          El principal problema es que nuestras listas diarias no están conectadas a nuestro calendario.
          <br />
          Quería crear una app o herramienta en la que esas pequeñas notas diarias estén presentes y a la vista, y que poseamos la posibilidad de arrastrarlas y moverlas a nuestro gusto, haciendo una distinción entre nuestras tareas y notas personales, y de no cumplirlas podamos ir saltándolas en nuestro día a día hasta haberlas realizado.
        </p>
      </div>
      <div className="section1">
        <p className="segundotexto">
          <br />
          <h3>INVESTIGACIÓN DE USUARIOS / USER RESEARCH</h3><br /><br />
          Para comprender el problema y las necesidades de los usuarios, <br />
          realicé una encuesta utilizando Google Forms a 20 personas<br />
          con diversas tareas y actividades varias en su vida cotidiana.
        </p>
        <br />
        <br />
        <div className="tituloproducto">
          <h2>EL PRODUCTO</h2></div>
        <div className="product">
          <img className="tamano" src={diapo1} alt="Diapo 1" />
          <img className="tamano" src={diapo2} alt="Diapo 2" />
          <img className="tamano" src={diapo3} alt="Diapo 3" />
        
        </div>
        <div className="product2">
        <img className="imag3" src={diapo4} alt="Diapo 4" />
          <img className="imag3" src={diapo5} alt="Diapo 5" />
          
        </div>
      </div>
    </div>
  );
}

export default EstiloPerfecto;
