const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }
    
                modal.style.display = "block";
                // document.body.style.overflow = "hidden";
                document.body.classList.add('modal-open')
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            // document.body.style.overflow = "";
            document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                // document.body.style.overflow = "";
                document.body.classList.remove('modal-open');
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.classList.remove('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    showModalByTime('.popup', 60000);
};

console.log('test!');

export default modals;