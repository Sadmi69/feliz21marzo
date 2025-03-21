$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var mostrarImagen1 = $("#mostrarImagen1");
    var mostrarImagen2 = $("#mostrarImagen2");
    var mostrarImagen3 = $("#mostrarImagen3");
    var mostrarImagen4 = $("#mostrarImagen4");
    var mostrarImagen5 = $("#mostrarImagen5");
    var mostrarImagen6 = $("#mostrarImagen6");
    var mostrarImagen7 = $("#mostrarImagen7");
  
    envelope.click(function () {
      open();
    });
    btn_open.click(function () {
      open();
      mostrarImagen1.attr("src", "foto1.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen1.show();

      mostrarImagen2.attr("src", "foto2.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen2.show();

      mostrarImagen3.attr("src", "foto3.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen3.show();

      mostrarImagen4.attr("src", "foto4.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen4.show();

      mostrarImagen5.attr("src", "foto5.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen5.show();

      mostrarImagen6.attr("src", "foto6.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen6.show();

      mostrarImagen7.attr("src", "foto7.jpg"); // Reemplaza "ruta/tu_imagen.jpg" con la ruta de tu imagen
      mostrarImagen7.show();
    });
    btn_reset.click(function () {
      close();
      mostrarImagen1.hide();
      mostrarImagen2.hide();
      mostrarImagen3.hide();
      mostrarImagen4.hide();
      mostrarImagen5.hide();
      mostrarImagen6.hide();
      mostrarImagen7.hide();
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
  
