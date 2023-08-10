AOS.init();

const buttons = document.querySelectorAll('[data-tab-button]');
const tabs = document.querySelectorAll('[data-tab-id]');
const listImages = document.querySelectorAll('[data-tab-list]');
const images = document.querySelectorAll('[data-tab-img]');

document.addEventListener('DOMContentLoaded', () => {
    buttons.forEach(button => {
        button.addEventListener('click', handleCharactersButtonClick);
    });

    listImages.forEach(list => {
        list.addEventListener('click', handleListImagesClick);
    });
});


// Método para a lista de personagens
const handleCharactersButtonClick = (btn) => {
    const targetTab = btn.target.dataset.tabButton;
    const tab = document.querySelector(`[data-tab-id=${targetTab}]`);

    removeActiveClass(tabs, 'characters__gallery--is-active');
    addActiveClass(tab, 'characters__gallery--is-active');
    removeActiveClass(buttons,'characters__tabs__button--is-active');
    addActiveClass(btn.target,'characters__tabs__button--is-active');

    // Adiciona as classes ao primeiro item da galeria de imagens
    const firstList = tab.querySelector('[data-tab-list]');
    const firstImage = tab.querySelector('[data-tab-img]');
    addActiveClass(firstList, 'gallery__img--is-active');
    addActiveClass(firstImage, 'characters__gallery__images__img--is-active');
};


// Método para a galeria de imagens
const handleListImagesClick = (list) => {
    const targetListImage = list.target.dataset.tabList;
    const image = document.querySelector(`[data-tab-img=${targetListImage}]`);

    removeActiveClass(images, 'characters__gallery__images__img--is-active');
    addActiveClass(image, 'characters__gallery__images__img--is-active');
    removeActiveClass(listImages, 'gallery__img--is-active');
    addActiveClass(list.target, 'gallery__img--is-active');
};


// Método para remover e adicionar classes
const removeActiveClass = (elements, className) => {
    elements.forEach(element => {
        element.classList.remove(className);
    });
};

const addActiveClass = (elements, className) => {
    elements.classList.add(className);
};
