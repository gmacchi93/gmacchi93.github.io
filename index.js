const showContent = contentElement => (contentElement.style.display = 'flex');
const hideContent = contentElement => (contentElement.style.display = 'none');
const toggleExpand = (toggleButton, contentElement) => {
    if (toggleButton.getAttribute('aria-expanded') === 'true'){
        toggleButton.setAttribute('aria-expanded', 'false');
        hideContent(contentElement);
    }else{
        toggleButton.setAttribute('aria-expanded', 'true');
        showContent(contentElement);
    }
};

const menuButton = document.getElementById('menu-button');
const menuId = menuButton.getAttribute('aria-controls');
const menuContent = document.getElementById(menuId);


const handleClick = event => {
    toggleExpand(menuButton, menuContent);
    event.stopPropagation();
    event.preventDefault();
}

const handleKeyDown = event => {
    switch (event.code) {
        case 'Space':
        case 'Enter':
            handleClick(event);
            break;
        default:
            break;
    }
}

menuButton.addEventListener('click', handleClick);
menuButton.addEventListener('keydown', handleKeyDown);