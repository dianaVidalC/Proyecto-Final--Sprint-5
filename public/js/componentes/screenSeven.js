/*
 * Created by LABORATORIA 0017le on 22/06/2017.
 */
'use strict';
const screenSeven=(update)=>{

    const container  = $('<section class="container"></section>');
    const row        = $('<div class="row"></div>');
    const div        = $('<div class="col s12"></div>');
    const img        = $('<img class="icon-lock" src="img/icons/bcp-logo.png"/>');
    const titulo     = $('<h6 class="center-align"><strong>Ingresa la clave de tu tarjeta</strong></h6>');
    const parrafo    = $('<p class="center-align color-gris"><strong>ITarjeta ****1234</strong></p>');
    const rowForm    = $('<div class="row"></div>');
    const divForm    = $('<div class="col s12"></div>');
    const divInput   = $('<div class="input-field col s12"></div>');
    const icono      = $('<img class="material-icons prefix responsive-img tarjeta" src="img/icons/lock.png"/>');
    const input      = $('<input id="icon_prefix" type="password" class="validate input-number" pattern="[0-9]{4}" required placeholder="------">');
    const label      = $('<label for="icon_prefix"></label>');
    const button     = $('<a class="waves-effect waves-light btn color-boton margin-button" disabled="disabled">Registrar</a>');

    div.append(img);
    div.append(titulo);
    div.append(parrafo);
    row.append(div);
    divInput.append(icono);
    divInput.append(input);
    divInput.append(label);
    divForm.append(divInput);
    rowForm.append(divForm);
    rowForm.append(button);
    container.append(row);
    container.append(rowForm);

    input.on("keypress keyup",_=>{

        if(input.val().length===4){
            button.removeAttr('disabled');
        }else{
            button.attr('disabled','disabled');
        }
    })

    button.on('click',(e)=>{
        e.preventDefault();
        $.post( "http://localhost:1080/api/registerCard", {

         "phone": state.newPhone,
         "cardNumber": state.numeroCard,
         "cardYear":state.yearCard,
         "cardPassword":input.val()
         })

        state.screenSeven  = null;
        state.screenEigth  ="true";
        update();

    })
    return container;
}