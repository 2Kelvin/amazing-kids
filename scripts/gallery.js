// getting & attaching HTML elements to javascript variables
const popUpPage = document.getElementById('popUpPage');
const fullScreenImage = document.getElementById('fullScreenImage');
const closeButton = document.getElementById('closeButton');
const allPicturesContainer = document.getElementById('allPicturesContainer');
const artAndCraftButton = document.getElementById('artAndCraftButton');
const danceButton = document.getElementById('danceButton');
const devotionButton = document.getElementById('devotionButton');
const dinnerButton = document.getElementById('dinnerButton');
const holidayButton = document.getElementById('holidayButton');
const specialButton = document.getElementById('specialButton');
const allImagesButton = document.getElementById('allButton');
const testimonialsButton = document.getElementById('testimonialsButton');
const connectCornerButton = document.getElementById('connectCornerButton');

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

// all testimonials youtube links
const allTestimonialVids = [
    'https://www.youtube.com/embed/jyU7dTUnHeU?si=cRnekMbJ2SxdFDut'
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

    // activate the all images button
    allImagesButton.classList.add('activeGalleryBtn');

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

// displaying all images when all button is clicked
allImagesButton.addEventListener('click', () => {
    allImagesButton.classList.add('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    for (let i = 0; i < allImages.length; i++) {
        const eachArrayOfImages = allImages[i];

        eachArrayOfImages.forEach(pictureSrc => {
            const eachPictureDiv = document.createElement('div');
            const eachImgTag = document.createElement('img');

            eachImgTag.src = pictureSrc;
            eachImgTag.alt = 'Picture';

            eachPictureDiv.classList.add('eachPictureDiv');
            eachPictureDiv.appendChild(eachImgTag);

            eachImgTag.addEventListener('click', () => {
                fullScreenImage.src = pictureSrc;
                popUpPage.style.display = 'flex';
                document.body.classList.add('noScroll');
            });

            allPicturesContainer.appendChild(eachPictureDiv);
        });

        closeButton.addEventListener('click', () => {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        });

        popUpPage.addEventListener('click', (event) => {
            if (event.target === popUpPage) {
                popUpPage.style.display = 'none';
                document.body.classList.remove('noScroll');
            }
        });
    }
});

// displaying art and craft images only on Art and Craft button click
artAndCraftButton.addEventListener('click', () => {
    artAndCraftButton.classList.add('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allArtAndCraftImages.forEach(pictureSrc => {
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachImgTag);

        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex';
            document.body.classList.add('noScroll');
        });

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll');
    });

    popUpPage.addEventListener('click', (event) => {
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
});

// displaying devotion images only on devotionButton click
devotionButton.addEventListener('click', () => {
    devotionButton.classList.add('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allDevotionImages.forEach(pictureSrc => {
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachImgTag);

        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex';
            document.body.classList.add('noScroll');
        });

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll');
    });

    popUpPage.addEventListener('click', (event) => {
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
});

// displaying dance images only on devotionButton click
danceButton.addEventListener('click', () => {
    danceButton.classList.add('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allDanceImages.forEach(pictureSrc => {
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachImgTag);

        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex';
            document.body.classList.add('noScroll');
        });

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll');
    });

    popUpPage.addEventListener('click', (event) => {
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
});

// displaying dinner images only on Dinner button click
dinnerButton.addEventListener('click', () => {
    dinnerButton.classList.add('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allDinnerImages.forEach(pictureSrc => {
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachImgTag);

        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex';
            document.body.classList.add('noScroll');
        });

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll');
    });

    popUpPage.addEventListener('click', (event) => {
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
});

// displaying holiday program images only on holidayButton click
holidayButton.addEventListener('click', () => {
    holidayButton.classList.add('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allHolidayProgramsImages.forEach(pictureSrc => {
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachImgTag);

        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex';
            document.body.classList.add('noScroll');
        });

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll');
    });

    popUpPage.addEventListener('click', (event) => {
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
});

// displaying special program images only on specialButton click
specialButton.addEventListener('click', () => {
    specialButton.classList.add('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allSpecialProgramsImages.forEach(pictureSrc => {
        const eachPictureDiv = document.createElement('div');
        const eachImgTag = document.createElement('img');

        eachImgTag.src = pictureSrc;
        eachImgTag.alt = 'Picture';

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachImgTag);

        eachImgTag.addEventListener('click', () => {
            fullScreenImage.src = pictureSrc;
            popUpPage.style.display = 'flex';
            document.body.classList.add('noScroll');
        });

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    closeButton.addEventListener('click', () => {
        popUpPage.style.display = 'none';
        document.body.classList.remove('noScroll');
    });

    popUpPage.addEventListener('click', (event) => {
        if (event.target === popUpPage) {
            popUpPage.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
});

// displaying testimonials
testimonialsButton.addEventListener('click', () => {
    testimonialsButton.classList.add('activeGalleryBtn');
    connectCornerButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    allTestimonialVids.forEach(vidLink => {
        const eachPictureDiv = document.createElement('div');
        const eachIframe = document.createElement('iframe');

        eachIframe.src = vidLink;
        eachIframe.title = 'YouTube video player';
        eachIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        eachIframe.frameborder = '0';
        eachIframe.referrerPolicy = 'strict-origin-when-cross-origin'
        eachIframe.allowFullscreen = true

        eachPictureDiv.classList.add('eachPictureDiv');
        eachPictureDiv.appendChild(eachIframe);

        allPicturesContainer.appendChild(eachPictureDiv);
    });

    // <iframe width="560" height="315"  allowfullscreen></iframe>;
});

// displaying connect corner images / videos
connectCornerButton.addEventListener('click', () => {
    connectCornerButton.classList.add('activeGalleryBtn');
    testimonialsButton.classList.remove('activeGalleryBtn');
    specialButton.classList.remove('activeGalleryBtn');
    artAndCraftButton.classList.remove('activeGalleryBtn');
    danceButton.classList.remove('activeGalleryBtn');
    devotionButton.classList.remove('activeGalleryBtn');
    dinnerButton.classList.remove('activeGalleryBtn');
    holidayButton.classList.remove('activeGalleryBtn');
    allImagesButton.classList.remove('activeGalleryBtn');

    allPicturesContainer.replaceChildren();

    // allSpecialProgramsImages.forEach(pictureSrc => {
    //     const eachPictureDiv = document.createElement('div');
    //     const eachImgTag = document.createElement('img');

    //     eachImgTag.src = pictureSrc;
    //     eachImgTag.alt = 'Picture';

    //     eachPictureDiv.classList.add('eachPictureDiv');
    //     eachPictureDiv.appendChild(eachImgTag);

    //     eachImgTag.addEventListener('click', () => {
    //         fullScreenImage.src = pictureSrc;
    //         popUpPage.style.display = 'flex';
    //         document.body.classList.add('noScroll');
    //     });

    //     allPicturesContainer.appendChild(eachPictureDiv);
    // });

    // closeButton.addEventListener('click', () => {
    //     popUpPage.style.display = 'none';
    //     document.body.classList.remove('noScroll');
    // });

    // popUpPage.addEventListener('click', (event) => {
    //     if (event.target === popUpPage) {
    //         popUpPage.style.display = 'none';
    //         document.body.classList.remove('noScroll');
    //     }
    // });
});


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