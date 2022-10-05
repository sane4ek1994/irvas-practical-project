import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import contactForms from './modules/contactForms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const modalState = {};
    const deadline = '2022-12-31';

    changeModalState(modalState);
    modals();
    tabs({
        headerSelector: '.glazing_slider ',
        tabsSelector: '.glazing_block ',
        contentsSelector: '.glazing_content',
        activeClass: 'active'
    });
    tabs({
        headerSelector: '.decoration_slider',
        tabsSelector: '.no_click',
        contentsSelector: '.decoration_content > div > div',
        activeClass: 'after_click'
    });
    tabs({
        headerSelector: '.balcon_icons',
        tabsSelector: '.balcon_icons_img ',
        contentsSelector: '.big_img > img',
        activeClass: 'do_image_more',
        display: 'inline-block'
    });
    contactForms(modalState);
    timer({
        id: '.container1',
        deadline: deadline
    });
});