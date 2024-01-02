$(document).ready(function () {
    console.log("initJQuery")
    
    // MENU PROPIO QUE SE ESCONDE + RESPONSIVE MOVIL
    var lastScrollTop = 0;

    function checkWidth() {
        if ($(window).width() > 991) {
            $("#menu").css("left", "0");
            console.log("ancho");

            $("#menu").css("left", "0")
            $("#icon_menu").click(function () {
                $("#menu").css("left", "0");
            });;
            $(".menu-buttons").children().click(function () {
                $("#menu").css("left", "0");
            });
            $("#close").click(function () {
                $("#menu").css("left", "0");
            });
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                //COMPARAMOS SI EL USUARI HACE SCROLL HACIA ARRIBA O HACIA ABAJO
                //HACEMOS UNA DOBLE COMPROBACIÓN. SI EL ST ESTA EN EL HEADER
                //SE BLOQUEA EL EFECTO, SI NO OCURRE.
                if (st > lastScrollTop && st > window.innerHeight) {
                    // hacia abajo
                    $("#menu").slideUp();
                } else if (st < lastScrollTop && st > window.innerHeight) {
                    // hacia arriba
                    $("#menu").slideDown();
                }
                lastScrollTop = st;
            });
        } else {
            console.log("estrecho");
            $("#icon_menu").click(function () {
                $("#menu").css("left", "0");
                $('body').css('overflow', 'hidden');
            });
            $(".menu-buttons").children().click(function () {
                $('body').css('overflow', 'auto');
            });
            $("#close").click(function () {
                $('body').css('overflow', 'auto');
            });
            $("#menu").show();
            $("#menu").slideDown();
        }
    }
    checkWidth();
    $(window).on('resize', checkWidth);
    
    $('#close').click(function () {
        var icon = $(this).find('i'); // Encuentra el elemento <i> dentro del botón

        if (icon.hasClass('fa-xmark')) {
            icon.removeClass('fa-xmark').addClass('fa-bars'); // Cambia a ícono de hamburguesa
        } else {
            icon.removeClass('fa-bars').addClass('fa-xmark'); // Cambia a ícono "x"
        }
    });

})
