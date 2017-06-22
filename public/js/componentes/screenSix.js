/*
 * Created by LABORATORIA 0017le on 22/06/2017.
 */
'use strict';
const screenSix=(update)=>{

    const container  = $('<section class="container"></section>');
    const row        = $('<div class="row"></div>');
    const div        = $('<div class="col s12"></div>');
    const img        = $('<img class="icon-lock" src="img/icons/bcp-logo.png"/>');
    const titulo     = $('<h6 class="center-align"><strong>Registra tu tarjeta de débito BCP</strong></h6>');
    const parrafo    = $('<p class="center-align color-gris">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p>');
    const rowForm    = $('<div class="row"></div>');
    const divForm    = $('<div class="col s12"></div>');
    const divInput   = $('<div class="input-field col s12"></div>');
    const icono      = $('<img class="material-icons prefix responsive-img tarjeta" src="img/icons/card.png"/>');
    const input      = $('<input id="icon_prefix" type="text" class="validate input-number numero-card" pattern="[0-9]{16}" required placeholder="Ingrese los 16 numeros de su tarjeta">');
    const label      = $('<label for="icon_prefix"></label>');
    const scanner    = $('<img class="material-icons prefix center-align scan" src="img/icons/scan.png"/>');
    const span       = $('<span class="pos-relative-span">Escannear tarjeta</span>');
    const col        = $('<div class="input-field col s12">');
    const vencimiento= $('<span class= "col s6 pos-relative">Fecha de vencimiento</span>');
    const inputMes   = $('<input class= "col s2 validate mes-card" placeholder="mm" type="number" min="01" max="12">');
    const slash      = $('<img class="col s1 img-slash" src="img/icons/diagonal.png">');
    const inputYear  = $('<input class= "col s2 validate year-card" placeholder="aa" type="number" min="17" max="24">');
    const button     = $('<a class="waves-effect waves-light btn color-boton margin-button" disabled="disabled">Crear cuenta</a>');

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
    col.append(vencimiento);
    col.append(inputMes);
    col.append(slash);
    col.append(inputYear);
    rowForm.append(divForm);
    rowForm.append(col);
    rowForm.append(button);
    container.append(row);
    container.append(rowForm);

    input.on("keypress keyup",_=>{

      if(input.val().length===16){
          button.removeAttr('disabled');
      }else{
          button.attr('disabled','disabled');
      }
      if(inputMes!=="" && inputYear!==""){
          button.removeAttr('disabled');
      }else{
          button.attr('disabled','disabled');
      }
  })

    button.on('click',(e)=>{
        e.preventDefault();

        state.numeroCard = $('.numero-card').val();
        state.yearCard   = $('.year-card').val();
        state.mesCard    = $('.mes-card').val();
        state.screenSix  = null;
        state.screenSeven="true";
        update();

    })
    return container;
}
