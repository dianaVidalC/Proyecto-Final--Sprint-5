/**
 * Created by LABORATORIA 0017le on 20/06/2017.
 */
'user strict';

const render=(root)=> {

    root.empty();

    const wrapper = $('<div class="wrapper"></div>');

    if (state.screenOne === "true") {
        wrapper.append(screenOne(_ => {
            render(root);
        }));
    }
    if (state.screenTwo === "true") {
        wrapper.append(screenTwo(_ => {
            render(root);
        }));
    }
    if (state.screenThree === "true") {
        wrapper.append(screenThree(_ => {
            render(root);
        }));
    }
    if (state.screenFour=== "true") {
        wrapper.append(screenFour(_ => {
            render(root);
        }));

    }
    if (state.screenFive=== "true") {
        wrapper.append(screenFive(_ => {
            render(root);
        }));

    }
    root.append(wrapper);

}

const state = {
    newPhone   : null,
    screenOne  : null,
    screenTwo  : null,
    screenThree: null,
    screenFour : null,
    screenFive : null
}

$(_ => {
        state.screenOne = "true";
        const root = $(".root");
        render(root);
})