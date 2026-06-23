document.addEventListener("DOMContentLoaded", function() {
    const botonesLeer = document.querySelectorAll('.btn-leer');
    botonesLeer.forEach(function(boton) {
        boton.addEventListener('click', function() {
            alert("Todavia no funciona esto, traanqui, proximamente(supongo)");
        });
    });

    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const tarjetas = document.querySelectorAll('.tarjeta-col');

    botonesFiltro.forEach(function(boton) {
        boton.addEventListener('click', function() {
            botonesFiltro.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filtro = this.getAttribute('data-filtro');

            tarjetas.forEach(function(tarjeta) {
                const generoTarjeta = tarjeta.getAttribute('data-genero');
                
                if (filtro === 'todos' || filtro === generoTarjeta) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });
});