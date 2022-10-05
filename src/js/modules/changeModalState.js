import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowFrom  = document.querySelectorAll('.balcon_icons_img '),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    
    checkNumInputs('#width');
    checkNumInputs('#height');
    

    const bindActionsToElems = ({ event, elements, prop }) => {
        console.log(elements);
        elements.forEach((element, index) => {
            element.addEventListener(event, () => {
                switch(element.nodeName) {
                    case 'SPAN':
                        state[prop] = index;
                        break;
                    case 'INPUT':
                        if (element.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elements.forEach((checkbox, j) => {
                                checkbox.checked = false;
                                if (index == j) {
                                    checkbox.checked = true;
                                }
                            })
                        } else {
                            state[prop] = element.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = element.value;
                        break;
                }

                console.log(state);
            });
        });
    };

    bindActionsToElems({
        event: 'click',
        elements: windowFrom,
        prop: 'form'
    });

    bindActionsToElems({
        event: 'input',
        elements: windowHeight,
        prop: 'height'
    });

    bindActionsToElems({
        event: 'input',
        elements: windowWidth,
        prop: 'width'
    });

    bindActionsToElems({
        event: 'change',
        elements: windowType,
        prop: 'type'
    });

    bindActionsToElems({
        event: 'change',
        elements: windowProfile,
        prop: 'profile'
    });
};

export default changeModalState;