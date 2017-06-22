/**
 * Created by LABORATORIA 0017le on 21/06/2017.
 */
'use strict';
const screenFive=(update)=>{

    const div= $('<div class="registrado"></div>');
    const row= $('<div class="row"></div>');
    const img= $('<img class="icon-check col s12" src="img/icons/check.png">');
    const h4 = $('<h4 class="center-align col s12"><strong>¡Bien!</strong></h4>');
    const p  = $('<p class="center-align col s12"><strong>Ahora puedes usar Yape</strong></p>');

    row.append(img);
    row.append(h4);
    row.append(p);
    div.append(row);

    $(_=>{
        setTimeout(_=>{

            state.screenFive=null;
            state.screenSix="true";
            update();

        },3000);
    })

    return div;
}