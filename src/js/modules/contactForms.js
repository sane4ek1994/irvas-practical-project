import {checkNumInputs} from "./checkNumInputs";

export const contactForms = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы свами свяжемся',
        failure: 'Что-то пошло не так..'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const result = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.append(statusMessage);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000);
                });
            
        });
    });
};