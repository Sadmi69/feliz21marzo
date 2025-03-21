$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var container = $("#container");
    var corazones = $("#corazones");
    var imagenes = [
        $("#mostrarImagen1"),
        $("#mostrarImagen2"),
        $("#mostrarImagen3"),
        $("#mostrarImagen4")
    ];

    // Evento al hacer clic en el botón
    btn_open.click(function () {
        abrirSobre();
    });

    function abrirSobre() {
        envelope.addClass("open").removeClass("close");

        // Animación de corazones y luego limpiamos la pantalla
        corazones.fadeIn(500).delay(2000).fadeOut(500, function () {
            limpiarPantalla();
            setTimeout(mostrarImagenesSecuencialmente, 1000); // Espera antes de mostrar imágenes
        });
    }

    function limpiarPantalla() {
        container.fadeOut(500, function () {
            $("body").css({
                "background": "#FFD1DC", // Fondo rosa pastel
                "display": "flex",
                "justify-content": "center",
                "align-items": "center",
                "height": "100vh"
            });
        });
    }

    function mostrarImagenesSecuencialmente() {
        let index = 0;

        function mostrarSiguienteImagen() {
            if (index > 0) {
                imagenes[index - 1].fadeOut(500); // Oculta la imagen anterior
            }

            imagenes[index].fadeIn(500); // Muestra la imagen actual con fade

            index++;

            if (index < imagenes.length) {
                setTimeout(mostrarSiguienteImagen, 3000); // Espera antes de la siguiente imagen
            }
        }

        setTimeout(mostrarSiguienteImagen, 2000); // Primera espera antes de iniciar la secuencia
    }
});
