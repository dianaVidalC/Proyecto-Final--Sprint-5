/**
 * Created by LABORATORIA 0017le on 21/06/2017.
 */
const screenFour=(update)=>{

        const container   = $('<section class="container"></section>');
        const rowTexto    = $('<div class="row"></div>');
        const div         = $('<div class="col s12"></div>');
        const img         = $('<img class="icon-lock" src="img/icons/lockone.png"/>');
        const titulo      = $('<h5 class="center-align"><strong>Crea tu usuario Yape</strong></h5>');
        const parrafo     = $('<p class="center-align color-gris">Ingresa un nombre, email y clave de usuario</p>');
        const rowForm     = $('<div class="row"></div>');
        const divForm     = $('<div class="col s12"></div>');
        const divInput1   = $('<div class="input-field col s12"></div>');
        const icono1      = $('<img class="material-icons prefix responsive-img" src="img/icons/user.png"/>');
        const input1      = $('<input id="icon_prefix" type="text" class="validate input-number" pattern="" placeholder="Nombre">');
        const label1      = $('<label for="icon_prefix"></label>');
        const divInput2   = $('<div class="input-field col s12"></div>');
        const icono2      = $('<img class="material-icons prefix responsive-img" src="img/icons/message-gray.png"/>');
        const input2      = $('<input id="icon_prefix" type="email" class="validate input-number" pattern="" placeholder="correo@ejemplo.com">');
        const label2      = $('<label for="icon_prefix"></label>');
        const divInput3  = $('<div class="input-field col s12"></div>');
        const icono3      = $('<img class="material-icons prefix responsive-img" src="img/icons/lock.png"/>');
        const input3      = $('<input id="icon_prefix" type="password" class="validate input-number" pattern="" placeholder="Ingresa clave de 6 dígitos">');
        const label3      = $('<label for="icon_prefix"></label>');
        const p           = $('<p class="center-align color-gris">Cuida esta clave como oro, es tu acceso a Yape.</p>');
        const buttom      = $('<a class="waves-effect waves-light btn color-boton margin-button">Crear cuenta</a>');


        div.append(img);
        div.append(titulo);
        div.append(parrafo);
        rowTexto.append(div);
        divInput1.append(icono1);
        divInput1.append(input1);
        divInput1.append(label1);
        divInput2.append(icono2);
        divInput2.append(input2);
        divInput2.append(label2);
        divInput3.append(icono3);
        divInput3.append(input3);
        divInput3.append(label3);
        divForm.append(divInput1);
        divForm.append(divInput2);
        divForm.append(divInput3);
        divForm.append(p);
        rowForm.append(divForm);
        rowForm.append(buttom);
        container.append(rowTexto);
        container.append(rowForm);

        buttom.on('click',(e)=>{
            e.preventDefault();
            state.screenFour=null;
            state.screenFive="true";
            update();

        })
        return container;
    }
