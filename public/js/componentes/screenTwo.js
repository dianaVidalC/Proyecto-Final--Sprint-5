/**
 * Created by LABORATORIA 0017le on 20/06/2017.
 */
'use strict';

const ScreenTwo=(update)=>{
    const container = $('<section class="container"></section>');
    const rowTexto  = $('<div class="row"></div>');
    const div       = $('<div class="col s12"></div>');
    const img       = $('<img class="responsive-img" src="img/icons/phone.png"/>');
    const titulo    = $('<h5 class="center-align"><strong>Para comenzar validemos tu número</strong></h5>');
    const parrafo   = $('<p class="center-align color-gris">Recibirás un SMS con un código de validación</p>');
    const rowForm   = $('<div class="row"></div>');
    const divForm   = $('<div class="col s12"></div>');
    const divInput  = $('<div class="input-field col s12"></div>');
    const icono     = $('<i class="material-icons prefix">stay_current_portrait</i>');
    const input     = $('<input id="icon_prefix" type="number" class="validate input-number right-alert" pattern="{9}">');
    const label     = $('<label for="icon_prefix"></label>');
    const check     = $('<p class="center-align check"></p>');
    const inputCheck= $('<input type="checkbox" class="filled-in" id="filled-in-box"/>');
    const labelCheck= $('<label for="filled-in-box">Acepto los <span class="color-turq">Términos y condiciones.</span></label>')
    const buttom    = $('<a class="waves-effect waves-light btn color-boton margin-button" disabled="disabled">Continuar</a>')

    div.append(img);
    div.append(titulo);
    div.append(parrafo);
    rowTexto.append(div);
    divInput.append(icono);
    divInput.append(input);
    divInput.append(label);
    divForm.append(divInput);
    check.append(inputCheck);
    check.append(labelCheck);
    divForm.append(check);
    rowForm.append(divForm);
    rowForm.append(buttom);
    container.append(rowTexto);
    container.append(rowForm);

    input.focusout(_=>{
        if(input.val().length===9 && inputCheck.prop('checked')){

            buttom.removeAttr('disabled');
        }
    })


    return container;
}