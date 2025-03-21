$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var mostrarImagen1 = $("#mostrarImagen1");
    var mostrarImagen2 = $("#mostrarImagen2");
    var mostrarImagen3 = $("#mostrarImagen3");
    var mostrarImagen4 = $("#mostrarImagen4");
  
    envelope.click(function () {
      open();
    });
    btn_open.click(function () {
      open();
      mostrarImagen1.attr("src", "fotogato1.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen1.show();

      mostrarImagen2.attr("src", "fotogato2.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen2.show();

      mostrarImagen3.attr("src", "fotogato3.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen3.show();

      mostrarImagen4.attr("src", "fotogato4.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen4.show();
        
    });
  
  
    function open() {
      envelope.addClass("open")
        .removeClass("close");
    }
  
    function close() {
      envelope.addClass("close")
        .removeClass("open");
    }
  });
  
