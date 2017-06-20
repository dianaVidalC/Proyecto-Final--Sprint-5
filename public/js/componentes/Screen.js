/**
 * Created by LABORATORIA 0017le on 20/06/2017.
 */
'use strict';

const ScreenOne =(update)=>{
    const container = $('<section class="container"></section>');
    const row       = $('<div class="row col s12"></div>');
    const div       = $('<div class="carousel carousel-slider" data-indicators=true"></div>');
    const item1     = $('<a class="carousel-item" href="#"><img class="responsive-img tamaño" src="img/icons/icon-people.png"/></a>');
    const item2     = $('<a class="carousel-item" href="#"><img class="responsive-img tamaño" src="img/icons/happy-person.png"/></a>');
    const item3     = $('<a class="carousel-item" href="#"><img class="responsive-img tamaño" src="img/icons/group-people.png"/></a>');
    const divButton = $('<div class="row col s12"></div>');
    const button    = $('<a class="waves-effect waves-light btn color-boton boton-reg">Registrarme</a>');

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

