/**
 * Created by LABORATORIA 0017le on 22/06/2017.
 */
'use strict';
const screenSix=(update)=>{
    const container = $('<section class="container"></section>');
    const row       = $('<div class="row"></div>');
    const div       = $('<div class="col s12"></div>');
    const img       = $('<img class="icon-lock" src="img/icons/bcp-logo.png"/>');
    const titulo    = $('<h6 class="center-align"><strong>Registra tu tarjeta de débito BCP</strong></h6>');
    const parrafo   = $('<p class="center-align color-gris">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p>');
    const rowForm   = $('<div class="row"></div>');
    const divForm   = $('<div class="col s12"></div>');
    const divInput  = $('<div class="input-field col s12"></div>');
    const icono     = $('<img class="material-icons prefix responsive-img tarjeta" src="img/icons/card.png"/>');
    const input     = $('<input id="icon_prefix" type="number" class="validate input-number" placeholder="- - - -">');
    const label     = $('<label for="icon_prefix"></label>');
    const scanner   = $('<img class="material-icons prefix center-align scan" src="img/icons/scan.png"/>');
    const span      = $('<span>Escannear tarjeta</span>');

    div.append(img);
    div.append(titulo);
    div.append(parrafo);
    row.append(div);
    divInput.append(icono);
    divInput.append(input);
    divInput.append(label);
    divForm.append(divInput);
    divForm.append(scanner);
    divForm.append(span);
    rowForm.append(divForm);
    container.append(row);
    container.append(rowForm);

    return container;
}