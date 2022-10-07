export const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    const closeImg = (img) => {
        img.style.display = 'none';
        document.body.style.overflow = '';
    }

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.style.cssText = `
        display: none;
        align-items: center; 
        justify-content: center;
    `;


    imgPopup.append(bigImage);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            closeImg(imgPopup);
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeImg(imgPopup);
        }
    });
};