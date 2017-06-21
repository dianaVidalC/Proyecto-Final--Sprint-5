/**
 * Created by LABORATORIA 0017le on 21/06/2017.
 */
'use strict';
const screenThree=(update)=> {

    const container  = $('<section class="container"></section>');
    const rowTexto   = $('<div class="row"></div>');
    const div        = $('<div class="col s12"></div>');
    const img        = $('<img class="icon-lock" src="img/icons/message.png"/>');
    const titulo     = $('<h5 class="center-align"><strong>Ahora ingresa tu código</strong></h5>');
    const parrafo    = $('<p class="center-align color-gris">Enviamos un código de validación al número</p>');
    const rowForm    = $('<div class="row"></div>');
    const divForm    = $('<div class="col s12"></div>');
    const divInput   = $('<div class="input-field col s12"></div>');
    const icono      = $('<i class="material-icons prefix">lock_outline</i>');
    const input      = $('<input id="icon_prefix" type="number" class="validate input-number" pattern="{4}" placeholder="- - - -">');
    const label      = $('<label for="icon_prefix"></label>');
    const time       = $('<p class="center-align position">Reintentar en <img class="icon-clock" src="img/icons/clock.png"/></p>');
    const span       = $('<span class="contador"> 21</span>');

    div.append(img);
    div.append(titulo);
    div.append(parrafo);
    rowTexto.append(div);
    divInput.append(icono);
    divInput.append(input);
    divInput.append(label);
    divForm.append(divInput);
    time.append(span);
    divForm.append(time);
    rowForm.append(divForm);
    container.append(rowTexto);
    container.append(rowForm);

$(_=>{
    if(input.val().length===0){
    let numero =21;
        let tiempo=setInterval(_=>{{
            span.html(numero);
            numero--;
            if(numero===-1) {
                clearInterval(tiempo);

                $.post("http://localhost:1080/api/resendCode", {

                    "phone": state.newPhone,
                    "terms": true,
                })
            }
        }}, 1000);
    }

    if(input.val().length===4){
   /*     input.on('keypress',_=>{
            if(state.newPhone===input.val()) {
                state.screenThree = null;
                state.screenFour = "true";
                update();
            }
        })*/
        update();
        state.screenThree = null;
        state.screenFour = "true";

    }




    })
    return container;
}
