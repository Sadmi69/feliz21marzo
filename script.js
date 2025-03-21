
#envelope {
  margin: 150px;
  position: relative;
  width: 280px;
  height: 180px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  top: 150px;
  background-color: #f8f9c5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.front {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 3;
}

.flap {
  border-left: 140px solid transparent;
  border-right: 140px solid transparent;
  border-bottom: 82px solid transparent;
  /* a little smaller */
  border-top: 98px solid #fff033;
  /* a little larger */
  transform-origin: top;
  pointer-events: none;
}

.pocket {
  border-left: 140px solid #fffa99;
  border-right: 140px solid #fffa99;
  border-bottom: 90px solid #f9f140;
  border-top: 90px solid transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.letter {
  position: relative;
  background-color: #f9f9c5;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0, 0, 0, 0.12);
}

.letter:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 25%, rgba(239, 215, 239, 0.7) 55%, #eed7ef 100%);
}

.words {
  position: absolute;
  left: 10%;
  width: 80%;
  height: 14%;
  background-color: #fdb7ba;
}

.words.line1 {
  top: 15%;
  width: 20%;
  height: 7%;
}

.words.line2 {
  top: 30%;
}

.words.line3 {
  top: 50%;
}

.words.line4 {
  top: 70%;
}

.open .flap {
  transform: rotateX(180deg);
  transition: transform 0.4s ease, z-index 0.6s;
  z-index: 1;
}

.close .flap {
  transform: rotateX(0deg);
  transition: transform 0.4s 0.6s ease, z-index 1s;
  z-index: 5;
}

.close .letter {
  transform: translateY(0px);
  transition: transform 0.4s ease, z-index 1s;
  z-index: 1;
}

.open .letter {
  transform: translateY(-60px);
  transition: transform 0.4s 0.6s ease, z-index 0.6s;
  z-index: 2;
}

.hearts {
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  z-index: 2;
}

.heart {
  position: absolute;
  bottom: 0;
  right: 10%;
  pointer-events: none;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: #f8fb0f;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  pointer-events: none;
}

.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

.close .heart {
  opacity: 0;
  -webkit-animation: none;
          animation: none;
}

.a1 {
  left: 20%;
  transform: scale(0.6);
  opacity: 1;
  -webkit-animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
  -moz-animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}

.a2 {
  left: 55%;
  transform: scale(1);
  opacity: 1;
  -webkit-animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
  -moz-animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}

.a3 {
  left: 10%;
  transform: scale(0.8);
  opacity: 1;
  -webkit-animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
  -moz-animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}
@-webkit-keyframes slideUp {
  0% {
    top: 0;
  }
  100% {
    top: -600px;
  }
}
@keyframes slideUp {
  0% {
    top: 0;
  }
  100% {
    top: -600px;
  }
}
@-webkit-keyframes sideSway {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
@keyframes sideSway {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
body {
  background-color: #f7d9da;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.envlope-wrapper {
  height: 380px;
}

.reset {
  text-align: center;
  margin-bottom: 20px;
}

.reset button {
  font-weight: 800;
  font-style: normal;
  transition: all 0.1s linear;
  -webkit-appearance: none;
  background-color: transparent;
  border: solid 2px #ff5757;
  border-radius: 4px;
  color: #ff5757;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px;
  padding: 10px;
  line-height: 1em;
  text-decoration: none;
  min-width: 120px;
  cursor: pointer;
}

.reset button:hover {
  background-color: #fc9d9d;
  color: #a10000;
}
#mostrarImagen1 {
  position: relative;
  top: 80%; /* Alinea la parte superior de la imagen al centro verticalmente */
  left: 50%; /* Alinea la izquierda de la imagen al centro horizontalmente */
  transform: translate(-50%, -50%); /* Centra completamente la imagen */
  max-width: 30%; /* Establece un ancho máximo del 80% del contenedor */
  max-height: 30vh; /* Establece una altura máxima del 80% del viewport height */
  border: 2px solid #ff5757; /* Agrega un borde alrededor de la imagen */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Agrega una sombra para destacar la imagen */
}
#mostrarImagen2 {
  position: relative;
  top: 75%; /* Alinea la parte superior de la imagen al centro verticalmente */
  left: 27%; /* Alinea la izquierda de la imagen al centro horizontalmente */
  transform: translate(-50%, -50%); /* Centra completamente la imagen */
  max-width: 50%; /* Establece un ancho máximo del 80% del contenedor */
  max-height: 40vh; /* Establece una altura máxima del 80% del viewport height */
  border: 2px solid #ff5757; /* Agrega un borde alrededor de la imagen */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Agrega una sombra para destacar la imagen */
}

#mostrarImagen3 {
  position: relative;
  top: 30%; /* Alinea la parte superior de la imagen al centro verticalmente */
  left: 30%; /* Alinea la izquierda de la imagen al centro horizontalmente */
  transform: translate(-50%, -50%); /* Centra completamente la imagen */
  max-width: 40%; /* Establece un ancho máximo del 80% del contenedor */
  max-height: 30vh; /* Establece una altura máxima del 80% del viewport height */
  border: 2px solid #ff5757; /* Agrega un borde alrededor de la imagen */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Agrega una sombra para destacar la imagen */
}

#mostrarImagen4 {
  position: relative;
  top: 50%; /* Alinea la parte superior de la imagen al centro verticalmente */
  left: 90%; /* Alinea la izquierda de la imagen al centro horizontalmente */
  transform: translate(-50%, -50%); /* Centra completamente la imagen */
  max-width: 30%; /* Establece un ancho máximo del 80% del contenedor */
  max-height: 41vh; /* Establece una altura máxima del 80% del viewport height */
  border: 2px solid #ff5757; /* Agrega un borde alrededor de la imagen */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Agrega una sombra para destacar la imagen */
}
#container {
  position: relative;
  text-align: center;
}

#corazones {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  animation: flotar 2s ease-in-out infinite;
}

@keyframes flotar {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -60%) scale(1.2); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

img {
  display: none; /* Oculta todas las imágenes al inicio */
  max-width: 50%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
#image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fefefe;
    z-index: 10;
    display: none;
}

#image-container img {
    max-width: 60%;
    max-height: 70vh;
    margin-bottom: 20px;
    display: none;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}
