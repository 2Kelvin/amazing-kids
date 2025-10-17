// getting the slider ads container from html index.html page
// and attaching it to a variable
const sliderAdsContainer = document.getElementById('sliderAdsContainer');

// data array of images to display in the slider container above
const adsArray = [
    { picUrl: './images/clubs/akc.jpg', buttonUrl: './pages/clubs.html#amazingKidsClub' },
    { picUrl: './images/clubs/spark.jpg', buttonUrl: './pages/clubs.html#c5Spark' },
    // poster with link to programs page
];

// loop through adsArray, create necessary img & button elements and displaying the img in img tag
adsArray.forEach(eachAd => {
    // creating a container to hold image + button & adding a class to it
    const oneAdContainer = document.createElement('div');
    oneAdContainer.classList.add('adSlide');

    const imgTag = document.createElement('img');
    const pageButton = document.createElement('button');
    const webLink = document.createElement('a');

    // adding image attributes
    imgTag.src = eachAd.picUrl;
    imgTag.alt = 'Advertisement';

    // adding button text and a link webpage link 
    pageButton.textContent = 'See more';
    pageButton.classList.add('sliderBtn');
    webLink.href = eachAd.buttonUrl;

    // appending the button inside the a link for direction to new page
    webLink.appendChild(pageButton);
    // adding image + button with link to their container
    oneAdContainer.appendChild(imgTag);
    oneAdContainer.appendChild(webLink);

    // adding the img + button container to parent container
    sliderAdsContainer.appendChild(oneAdContainer);
});

let currentAdIndex = 0;
// return all oneAdContainers with class adSlide
const slides = document.querySelectorAll('.adSlide');

// displaying one ad slide at a time
function showSlide(index) {
    // hiding all slides by turning display to none
    slides.forEach(oneSlide => {
        oneSlide.classList.remove('active');
    });

    // displaying only current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
}

// showing first slide
showSlide(currentAdIndex);

// changing slide after every 3 seconds
setInterval(() => {
    // moving to next ad index
    currentAdIndex++;

    // if passed the last slide index, loop to first index
    if (currentAdIndex >= slides.length) {
        currentAdIndex = 0;
    }

    // displaying current index slide
    showSlide(currentAdIndex);
}, 6000);

// adding date to footer
const footerDate = document.getElementById('footerDate');
footerDate.textContent = new Date().getFullYear();

// transform menu icon
const menuBarsContainer = document.getElementById('menuBarsContainer');

// function transformMenu(menuElement) {
//     menuElement.addEventListener('click', () => {
//         menuElement.classList.toggle('change');
//     });
// }

// transformMenu(menuBarsContainer);

function showTheNavBar(menuElement) {
    // display mobile menu when menu is clicked
    menuElement.addEventListener('click', () => {
        // create pop up menu
        const navigationPages = document.createElement('nav');

        // also when menu button is clicked again or empty space outside menu is clicked close menu
        if (!menuElement.classList.contains('navIsOpen')) {
            // add classlist to display the nav in html
            navigationPages.classList.add('navIsOpen');
            menuElement.classList.add('change');
            // create other pages links & append them to navigationPages
            const programsClub = document.createElement('a');
            programsClub.textContent = 'Programs';
            programsClub.href = './pages/programs.html';
            programsClub.classList.add('navPageLink');
            programsClub.addEventListener('click', () => {
                // when any page link is clicked, scroll to page and close menu
                navigationPages.classList.remove('navIsOpen');
            });
            navigationPages.appendChild(programsClub);

            const clubsNav = document.createElement('a');
            clubsNav.textContent = 'Clubs';
            clubsNav.href = './pages/clubs.html';
            clubsNav.classList.add('navPageLink');
            clubsNav.addEventListener('click', () => {
                // when any page link is clicked, scroll to page and close menu
                navigationPages.classList.remove('navIsOpen');
            });
            navigationPages.appendChild(clubsNav);

            const blogNav = document.createElement('a');
            blogNav.textContent = 'Blog';
            blogNav.href = './pages/blog.html';
            blogNav.classList.add('navPageLink');
            blogNav.addEventListener('click', () => {
                // when any page link is clicked, scroll to page and close menu
                navigationPages.classList.remove('navIsOpen');
            });
            navigationPages.appendChild(blogNav);

            const galleryNav = document.createElement('a');
            galleryNav.textContent = 'Galery';
            galleryNav.href = './pages/gallery.html';
            galleryNav.classList.add('navPageLink');
            galleryNav.addEventListener('click', () => {
                // when any page link is clicked, scroll to page and close menu
                navigationPages.classList.remove('navIsOpen');
            });
            navigationPages.appendChild(galleryNav);

            const aboutUsNav = document.createElement('a');
            aboutUsNav.textContent = 'About Us';
            aboutUsNav.href = './pages/aboutUs.html';
            aboutUsNav.classList.add('navPageLink');
            aboutUsNav.addEventListener('click', () => {
                // when any page link is clicked, scroll to page and close menu
                navigationPages.classList.remove('navIsOpen');
            });
            navigationPages.appendChild(aboutUsNav);
        } else {
            menuElement.classList.remove('navIsOpen');
            menuElement.classList.remove('change');
        }
    });
}

showTheNavBar(menuBarsContainer);