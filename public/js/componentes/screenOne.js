/**
 * Created by LABORATORIA 0017le on 20/06/2017.
 */
'use strict';

const screenOne =(update)=>{
    const container = $('<section class="container"></section>');
    const row       = $('<div class="row col s12"></div>');
    const div       = $('<div class="carousel carousel-slider" data-indicators=true"></div>');
    const item1     = $('<a class="carousel-item" href="#"></a>');
    const img1      = $('<img class="tamaño" src="img/icons/icon-people.png"/>');
    const div1      = $('<div></div>');
    const titulo1   = $('<h4 class="center-align"><strong>Paga a tus amigos</strong></h4>');
    const parrafo1  = $('<p class="center-align">Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
    const item2     = $('<a class="carousel-item" href="#"></a>');
    const img2      = $('<img class="tamaño" src="img/icons/happy-person.png"/>');
    const div2      = $('<div></div>');
    const titulo2   = $('<h4 class="center-align"><strong>Sin número de cuenta</strong></h4>');
    const parrafo2  = $('<p class="center-align">Elige a quién pagar desde tu lista de contacto</p>');
    const item3     = $('<a class="carousel-item" href="#">');
    const img3      = $('<img class="tamaño" src="img/icons/group-people.png"/></a>');
    const divButton = $('<div class="row col s12"></div>');
    const button    = $('<a class="waves-effect waves-light btn color-boton boton-reg">Registrarme</a>');
    const div3      = $('<div></div>');
    const titulo3   = $('<h4 class="center-align"><strong>Gratis y Seguro</strong></h4>');
    const parrafo3  = $('<p class="center-align">La transferencia es inmediata y gratuita de una cuenta a otra</p>');

    div1.append(titulo1);
    div1.append(parrafo1);
    div2.append(titulo2);
    div2.append(parrafo2);
    div3.append(titulo3);
    div3.append(parrafo3);
    item1.append(img1);
    item1.append(div1);
    item2.append(img2);
    item2.append(div2);
    item3.append(img3);
    item3.append(div3);
    div.append(item1);
    div.append(item2);
    div.append(item3);
    row.append(div);
    divButton.append(button);
    container.append(row);
    container.append(divButton);

    $(_=>{
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    })

    button.on('click',(e)=>{
        e.preventDefault();
        state.screenOne=null;
        state.screenTwo="true";
        update();

    })

    return container;
}

