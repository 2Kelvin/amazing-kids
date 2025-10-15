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

function transformMenu(menuElement) {
    menuElement.addEventListener('click', () => {
        menuElement.classList.toggle('change');
    });
}

transformMenu(menuBarsContainer);