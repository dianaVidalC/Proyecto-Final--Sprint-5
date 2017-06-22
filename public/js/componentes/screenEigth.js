/**
 * Created by LABORATORIA 0017le on 22/06/2017.
 */
'use strict';
const screenEigth=_=>{

    const container   =$('<div class="white"></div>');
    const row         =$('<div class="row"></div>');
    const div1        =$('<div class="fondo-purple-ligth"></div>');
    const iconConf    =$('<img class="engenie col s12" src="img/icons/engine.png"/>');
    const iconHappy   =$('<img class="face col 12" src="img/icons/happy-face.png"/>');
    const saludo      =$('<h5 class="hola">Hola</h5>');
    const iconEye     =$('<img class="eyes saldo" src="img/icons/eye.png"/>');
    const span        =$('<span class="color-turq">Mostrar Saldo</span>');
    const div2        =$('<div class="fondo-purple-dark"></div>');
    const p1          =$('<p class="col s10">Últimos Movimientos <img class="responsive-img col s2" src="img/icons/right-arrow-circular-button.png"/></p>');
    const hr          =$('<hr>');
    const icon        =$('<img class="responsive-img col s4" src="img/icons/icon.png"/>');
    const p2          =$('<p>¿Aún no realizas tu primer pago?"</p><p>Es rápido y sencillo</p>');
    const enviarPago  =$('<img class="envio" src="img/icons/send.png"/>');
    const RecibirPago =$('<img class="pago" src="img/icons/code-qr.png"/>');


    div1.append(iconConf);
    div1.append(iconHappy);
    div1.append(saludo);
    div1.append(iconEye);
    div1.append(span);
    div2.append(p1);
    div2.append(hr);
    div2.append(icon);
    div2.append(p2);
    div2.append(enviarPago);
    div2.append(RecibirPago);
    row.append(div1);
    row.append(div2);
    container.append(row);

    return container;
}


