// getting & attaching HTML elements to javascript variables
const popUpPage = document.getElementById('popUpPage');
const fullScreenImage = document.getElementById('fullScreenImage');
const closeButton = document.getElementById('closeButton');
const allPicturesContainer = document.getElementById('allPicturesContainer');

// all art images
const allArtAndCraftImages = [
    '../images/gallery/art-and-craft/art1.jpg',
    '../images/gallery/art-and-craft/art2.jpg',
    '../images/gallery/art-and-craft/art3.jpg',
    '../images/gallery/art-and-craft/art4.jpg',
    '../images/gallery/art-and-craft/art5.jpg',
    '../images/gallery/art-and-craft/art6.jpg',
];

// all board of directors images
const allDanceImages = [
    '../images/gallery/dance/dance1.jpg',
    '../images/gallery/dance/dance2.jpg',
    '../images/gallery/dance/dance3.jpg',
    '../images/gallery/dance/dance4.jpg',
    '../images/gallery/dance/dance5.jpg',
];

// all devotion life skills images
const allDevotionImages = [
    '../images/gallery/devotion-and-life-skills/ls1.jpg',
    '../images/gallery/devotion-and-life-skills/ls2.jpg',
    '../images/gallery/devotion-and-life-skills/ls3.jpg',
    '../images/gallery/devotion-and-life-skills/ls4.jpg',
    '../images/gallery/devotion-and-life-skills/ls5.jpg',
    '../images/gallery/devotion-and-life-skills/ls6.jpg',
    '../images/gallery/devotion-and-life-skills/ls7.jpg',
    '../images/gallery/devotion-and-life-skills/ls8.jpg',
    '../images/gallery/devotion-and-life-skills/ls9.jpg',
    '../images/gallery/devotion-and-life-skills/ls10.jpg',
];

// all dinner images
const allDinnerImages = [
    '../images/gallery/dinner/d1.jpg',
    '../images/gallery/dinner/d2.jpg',
    '../images/gallery/dinner/d3.jpg',
    '../images/gallery/dinner/d4.jpg',
    '../images/gallery/dinner/d5.jpg',
];

// all holiday programs images
const allHolidayProgramsImages = [
    '../images/gallery/holiday-programs/h1.jpg',
    '../images/gallery/holiday-programs/h2.jpg',
    '../images/gallery/holiday-programs/h3.jpg',
    '../images/gallery/holiday-programs/h4.jpg',
    '../images/gallery/holiday-programs/h5.jpg',
    '../images/gallery/holiday-programs/h6.jpg',
    '../images/gallery/holiday-programs/h7.jpg',
    '../images/gallery/holiday-programs/h8.jpg',
    '../images/gallery/holiday-programs/h9.jpg',
    '../images/gallery/holiday-programs/h10.jpg',
    '../images/gallery/holiday-programs/h1.jpg',
    '../images/gallery/holiday-programs/h2.jpg',
    '../images/gallery/holiday-programs/h3.jpg',
];

// all special programs images
const allSpecialProgramsImages = [
    '../images/gallery/special-programs/sp1.jpg',
    '../images/gallery/special-programs/sp2.jpg',
    '../images/gallery/special-programs/sp3.jpg',
    '../images/gallery/special-programs/sp4.jpg',
    '../images/gallery/special-programs/sp5.jpg',
];

// all trip and adventure images
const allTripAndAdventureImages = [
    '../images/gallery/trip-and-adventure/trip1.jpg',
    '../images/gallery/trip-and-adventure/trip2.jpg',
    '../images/gallery/trip-and-adventure/trip3.jpg',
    '../images/gallery/trip-and-adventure/trip4.jpg',
    '../images/gallery/trip-and-adventure/trip5.jpg',
    '../images/gallery/trip-and-adventure/trip6.jpg',
    '../images/gallery/trip-and-adventure/trip7.jpg',
    '../images/gallery/trip-and-adventure/trip8.jpg',
    '../images/gallery/trip-and-adventure/trip9.jpg',
    '../images/gallery/trip-and-adventure/trip10.jpg',
];

// array of all images
const allImages = [
    allArtAndCraftImages,
    allDanceImages,
    allDevotionImages,
    allDinnerImages,
    allHolidayProgramsImages,
    allSpecialProgramsImages,
    allTripAndAdventureImages,
];

// looping through all arrays of images
for (let i = 0; i < allImages.length; i++) {
    const eachArrayOfImages = allImages[i];
    
    // looping through each image array
    eachArrayOfImages.forEach(pictureSrc => { // pictureSrc is the src of each image (as added in the array)
        // creating div & img elements to host the incoming images
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        // adding each image tag attribute's data
        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv'); // adding a class to be styled in css for eachPictureDiv container
        eachPictureDiv.appendChild(eachImgTag); // adding the image to eachPictureDiv container

        // if image is clicked, displaying it alone in fullscreen
        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex'; // making the popUpPage visible to show the fullscreen image
            document.body.classList.add('noScroll'); // removing scrollbar in fullscreen mode (in popUp page)
        });

        allPicturesContainer.appendChild(eachPictureDiv); //appending the imageDiv to allPicturesDiv container div
    });

    // closing the popUp page from fullscreen mode by updating its display property to none
    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll'); // enabling scrollbar after exiting fullscreen mode (popUp page)
    });

    // if any other part of the page is clicked, close the popUp page just like you've clicked the close button
    popUpPage.addEventListener('click', (event) => {
        // Checking if the click occurred directly on the popUp page, not on the image
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll'); // enabling scrollbar after exiting fullscreen mode (popUp page)
        }
    });
}