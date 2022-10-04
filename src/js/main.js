import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import contactForms from './modules/contactForms';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

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
    contactForms();
});