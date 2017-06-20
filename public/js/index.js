/**
 * Created by LABORATORIA 0017le on 20/06/2017.
 */
'user strict';

const render=(root)=>{

    root.empty();

        const wrapper=$('<div class="wrapper"></div>');
    if(state.screenOne=="true") {
        wrapper.append(ScreenOne(_ => {
            render(root)
        }));
    }else if(state.screenTwo==="true"){
        wrapper.append(ScreenTwo(_ => {
            render(root)
        }));
    }

    root.append(wrapper);
}

const state={
    screenOne:null,
    screenTwo:null
}

$(_=>{
        state.screenOne="true";
        const root = $(".root");
        render(root);
    })
