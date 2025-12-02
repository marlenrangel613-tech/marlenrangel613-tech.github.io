document.addEventListener('DOMContentLoaded', () => {

    const columnaLuz = document.querySelector('.columna-social.luz');
    const columnaSombra = document.querySelector('.columna-social.sombra');
    if (columnaLuz && columnaSombra)
    {
        columnaSombra.addEventListener('mouseenter', () => {
            columnaLuz.classList.add('ateunada');
        });

        columnaSombra.addEventListener('mouseleave', () => {
            columnaLuz.classList.remove('ateunada');
        });

        columnaLuz.addEventListener('mouseenter', () => {
            columnaSombra.classList.add('atenuada');
        });

        columnaLuz.addEventListener('mouseleave', () => {
            columnaSombra.classList.remove('atenuada');
        });
    }
    const panelModal = document.getElementById('panelDetalles');
    const btnCerrar = document.getElementById('btnCerrarPanel');
    const btnDetalleLuz = document.querySelector('.btn-detalle.luz');
    const btnDetalleSombra = document.querySelector('.btn-detalle.sombra');
    const panelLuz = document.getElementById('panelLuzDetalles');
    const panelSombra = document.getElementById('panelSombraDetalles');

    function mostrarPanel(tipo) {
        panelLuz.classList.remove('activo');
        panelSombra.classList.remove('activo');

        if (tipo === 'luz') {
            panelLuz.classList.add('activo');
        } else if (tipo === 'sombra'){
            panelSombra.classList.add('activo');
        }
        
        panelModal.classList.add('activo');
    }

    function ocultarPanel() {
        panelModal.classList.remove('activo');
    }

    if (btnDetalleLuz){
        btnDetalleLuz.addEventListener('click', () => mostrarPanel('luz'));  
    }
    if (btnDetalleSombra){
        btnDetalleSombra.addEventListener('click', () => mostrarPanel('sombra'));  
    }
    if (btnCerrar) {
        btnCerrar.addEventListener('click', ocultarPanel);
    }
    
    const acordeonTitulos = document.querySelectorAll('.acordeon-titulo');

    if (acordeonTitulos.length > 0){
        acordeonTitulos.forEach(titulo => {
            titulo.addEventListener('click', () => {

                titulo.classList.toggle('activo');

                const contenido = titulo.nextElementSibling;

                if(contenido) {
                    contenido.classList.toggle('activo');
                }

                acordeonTitulos.forEach(otroTitulo => {
                    if(otroTitulo !== titulo && otrotitulo.classList.contains('activo')) {
                       otroTitulo.classList.remove('activo');
                       const otroContenido = otroTitulo.nextElementSibling;
                       if (otroContenido) {
                        otroContenido.classList.remove('activo');
                       }
                    }
                });
            });
        });
    }

    const botonesLegado = document.querySelectorAll('.btn-ver-legado');
    if (botonesLegado.length > 0) {
        botonesLegado.forEach(boton => {
            boton.addEventListener('click', () => {
                
                const contenido = boton.nextElementSibling; 
                
                if (contenido && contenido.classList.contains('texto-legado')) {
                    contenido.classList.toggle('activo');
                    if (contenido.classList.contains('activo')) {
                        boton.textContent = 'Ocultar Impacto';
                    } else {
                        boton.textContent = 'Ver Impacto Clave';
                    }
                }
            });
        });
    }

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1 
    };

    const revealObserver = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.revelado');

    revealElements.forEach(item => {
        revealObserver.observe(item);
    });

});