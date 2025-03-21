$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var container = $("#container");
    var corazones = $("#corazones");
    var imagenesContainer = $("#imagenes-container");
    var imagenes = $("#imagenes-container img");
    
    // Ocultamos el contenedor de imágenes al inicio
    imagenesContainer.hide();
    
    btn_open.click(function () {
        abrirSobre();
    });
    
    function abrirSobre() {
        envelope.addClass("open").removeClass("close");
        
        // Mostrar y animar corazones después de que el sobre se abra
        setTimeout(function() {
            // Mostrar el contenedor de corazones
            corazones.css({
                'display': 'block'
            });
            
            // Reiniciar posición de los corazones por si se ha abierto antes
            $(".heart").css({
                'bottom': '-30px',
                'opacity': '0'
            });
            
            // Activar animación de corazones subiendo
            $(".heart.a1").css("animation", "subir 3s ease-out forwards");
            $(".heart.a2").css("animation", "subir 3.5s ease-out forwards 0.3s");
            $(".heart.a3").css("animation", "subir 4s ease-out forwards 0.6s");
            
            // Esperar a que terminen las animaciones y continuar
            setTimeout(function() {
                corazones.fadeOut(300, function() {
                    limpiarPantalla();
                    setTimeout(mostrarImagenesSecuencialmente, 800);
                });
            }, 4500); // Esperar lo suficiente para que terminen todas las animaciones
            
        }, 800); // Dar tiempo a que el sobre se abra completamente
    }
    
    function limpiarPantalla() {
        container.fadeOut(500, function () {
            $("body").css({
                "background": "#FFD1DC"
            });
            imagenesContainer.fadeIn(500);
        });
    }
    
    function mostrarImagenesSecuencialmente() {
        let index = 0;
        
        function mostrarSiguienteImagen() {
            if (index > 0) {
                imagenes.eq(index - 1).fadeOut(500);
            }
            imagenes.eq(index).fadeIn(500);
            index++;
            if (index < imagenes.length) {
                setTimeout(mostrarSiguienteImagen, 3000);
            }
        }
        
        mostrarSiguienteImagen();
    }
});
