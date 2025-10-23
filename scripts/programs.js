// menu pop up
const menuBarsContainer = document.getElementById('menuBarsContainer');
const navigationPages = document.createElement('nav');

const pages = [
    { text: 'Programs', url: './programs.html' },
    { text: 'Clubs', url: './clubs.html' },
    { text: 'Blog', url: './blog.html' },
    { text: 'Gallery', url: './gallery.html' },
    { text: 'About Us', url: './aboutUs.html' },
];

function createNavLinks(navElement) {
    pages.forEach(page => {
        const link = document.createElement('a');
        link.textContent = page.text;
        link.href = page.url;
        link.classList.add('navPageLink');
        link.addEventListener('click', () => {
            // Close menu when link is clicked
            navigationPages.classList.remove('navIsOpen');
            menuBarsContainer.classList.remove('change');
            document.body.classList.remove('noScroll');
            document.documentElement.classList.remove('noScroll');
        });
        navElement.appendChild(link);
    });

    menuBarsContainer.appendChild(navElement);
}

createNavLinks(navigationPages);

function toggleTheNavBar(menuElement) {
    menuElement.addEventListener('click', () => {
        navigationPages.classList.toggle('navIsOpen');
        menuElement.classList.toggle('change');

        const body = document.body;
        const html = document.documentElement;
        if (navigationPages.classList.contains('navIsOpen')) {
            body.classList.add('noScroll');
            html.classList.add('noScroll');
        } else {
            body.classList.remove('noScroll');
            html.classList.remove('noScroll');
        }
    });
}

toggleTheNavBar(menuBarsContainer);

// remove whatsapp icon from page
const cancelWhatsappBtn = document.getElementById('cancelWhatsapp');
const floatingWhatsappDiv = document.getElementById('floatingWhatsappDiv');

cancelWhatsappBtn.addEventListener('click', () => {
    floatingWhatsappDiv.style.display = 'none';
});