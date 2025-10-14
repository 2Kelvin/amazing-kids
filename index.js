// getting the slider ads container from html index.html page
// and attaching it to a variable
const sliderAdsContainer = document.getElementById('sliderAdsContainer');

// data array of images to display in the slider container above
const adsArray = [
    './images/clubs/akc.jpg',
    './images/clubs/spark.jpg',
    // poster
];

// loop through adsArray, create necessary img & button elements and displaying the img in img tag
adsArray.forEach(eachImgUrl => {
    const imgTag = document.createElement('img');
    imgTag.classList.add('imageAd');
    imgTag.src = eachImgUrl;
    imgTag.alt = 'Advertisement';

    // add timeout to image

    // adding the image to ads container
    sliderAdsContainer.appendChild(imgTag);
});