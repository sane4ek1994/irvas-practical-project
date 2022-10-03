const tabs = ({ headerSelector, tabsSelector, contentsSelector, activeClass }) => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabsSelector),
          contents = document.querySelectorAll(contentsSelector);

    const hideTabContent = () => {
        contents.forEach(content => {
            content.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    const showTabContent = (index = 0) => {
        contents[index].style.display = 'block';
        tabs[index].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    window.addEventListener('keydown', (event) => {
        const target = event.target;
        if (event.code === 'Enter') {
            if (target &&
                (target.classList.contains(tabsSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
                tabs.forEach((tab, index) => {
                    if (target == tab || target.parentNode == tab)
                    {
                        hideTabContent();
                        showTabContent(index);
                    }
                });
            }
        }
    });

    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
            tabs.forEach((tab, index) => {
                if (target == tab || target.parentNode == tab)
                {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
};


export default tabs;