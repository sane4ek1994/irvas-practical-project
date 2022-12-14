export const modals = () => {
    
    function bindModal({ triggerSelector, modalSelector, closeSelector, closeClickOverlay = true }) {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-moda]'),
              scroll = killScroll();

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none';
                });
    
                modal.style.display = "block";
                // document.body.style.overflow = "hidden";
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(window => {
                window.style.display = 'none';
            });

            closeModal(modal);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(window => {
                    window.style.display = 'none';
                });

                closeModal(modal);
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                closeModal(modal);
            }
        });
    }

    const killScroll = () => {
        const div = document.createElement('div');
        div.style.cssText = `
            width: 50px;
            height: 50px;
            overflow-y: scroll;
            visibility: hidden;
        `;

        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.classList.remove('modal-open');
        }, time);
    }

    const closeModal = (modal) => {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = `0px`;
    };


    showModalByTime('.popup', 60000);
    bindModal({
        triggerSelector: '.popup_engineer_btn',
        modalSelector: '.popup_engineer',
        closeSelector: '.popup_engineer .popup_close'
    });
    bindModal({
        triggerSelector: '.phone_link',
        modalSelector: '.popup',
        closeSelector: '.popup_close'
    });
    bindModal({
        triggerSelector: '.popup_calc_btn',
        modalSelector: '.popup_calc',
        closeSelector: '.popup_calc_close'
    });

    bindModal({
        triggerSelector: '.popup_calc_button',
        modalSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close'
    });

    bindModal({
        triggerSelector: '.popup_calc_profile_button',
        modalSelector: '.popup_calc_end',
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false
    });

};