const buttons = document.querySelectorAll('[data-tab-button]');
const tabs = document.querySelectorAll('[data-tab-id]');
const lists = document.querySelectorAll('[data-tab-list]');
const images = document.querySelectorAll('[data-tab-img]');

document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (btn) => {
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            removeActiveGallery();
            tab.classList.add('characters__gallery--is-active');
            removeActiveButtons();
            btn.target.classList.add('characters__tabs__button--is-active');
        });
    };

    for(let i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', (list) => {
            const targetList = list.target.dataset.tabList;
            const image = document.querySelector(`[data-tab-img=${targetList}]`);
            removeActiveImage();
            image.classList.add('characters__gallery__images__img--is-active');
            removeActiveGalleryList();
            list.target.classList.add('gallery__img--is-active');
        });
    };
});

// Seção galeria de personagens
const removeActiveButtons = () => {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('characters__tabs__button--is-active');
    };
};

const removeActiveGallery = () => {
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('characters__gallery--is-active');
    };
};

const removeActiveGalleryList = () => {
    for(let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('gallery__img--is-active');
    };
}

const removeActiveImage = () => {
    for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('characters__gallery__images__img--is-active');
    };
};