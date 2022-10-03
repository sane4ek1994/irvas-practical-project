const modals = () => {
    
    function bindModal({ triggerSelector, modalSelector, closeSelector }) {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }
    
                modal.style.display = "block";
                // document.body.style.overflow = "hidden";
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                closeModal(modal);
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.classList.remove('modal-open');
        }, time);
    }

    const closeModal = (modal) => {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
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

};

export default modals;