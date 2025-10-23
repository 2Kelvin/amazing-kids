// getting HTML elements
const blogContainer = document.getElementById('blogContainer');

// data objects
const picnicArboretum = {
    imgSrc: '../images/blog/picnic-arboretum/picnicArboretum.jpg',
    date: 'June 16, 2023',
    heading: 'A Picnic At The Arboretum',
    intro: 'Hello everyone and I hope that you have all been keeping well. We at amazing kids are doing great . We have started a new series called Amazing Kids in the wild and its very exciting.',
    pageLink: './blog-pages/picnicArboretum.html',
};

const evergreenPark = {
    imgSrc: '../images/blog/evergreen-park/evergreenPark.jpeg',
    date: 'June 2, 2023',
    heading: 'Our Adventure At Evergreen Park',
    intro: 'Howdy!! Good people and happy new month to you. We are half way through the year and we thank God for this far. As one of our ice-breakers we went for a trip to evergreen Park. Evergreen park is on Kiambu rd, Nairobi Kenya.',
    pageLink: './blog-pages/evergreenPark.html',
};

const yourBrand = {
    imgSrc: '../images/blog/your-brand/yourBrand.jpg',
    date: 'March 24, 2023',
    heading: 'What Is Your Brand?',
    intro: 'Hello there. Nice seeing you here again. Put on your reading glasses, sit back and let us take you through the 2nd of April. We arrived in the morning, said hi to our friends and teachers and were ready for the day',
    pageLink: './blog-pages/yourBrand.html',
};

const mustardSeed = {
    imgSrc: '../images/blog/mustard-seed/mustardSeed.jpeg',
    date: 'March 16, 2023',
    heading: 'Small As A Mustard Seed',
    intro: 'Hello there our beloved readers. We hope that you have been keeping well. We are so excited to start our new season where we will be learning about entrepreneurship and',
    pageLink: './blog-pages/mustardSeed.html',
};

const stockTake = {
    imgSrc: '../images/blog/stock-take/stockTake.jpeg',
    date: 'March 9, 2023',
    heading: 'Stock Take #1',
    intro: 'Hello there our Amazing readers and happy new month to you. We have finished our first series of goal settings and it is important to take stock of what we',
    pageLink: './blog-pages/stockTake.html',
};

const amConfident = {
    imgSrc: '../images/blog/am-confident/amConfident.jpeg',
    date: 'March 2, 2023',
    heading: 'I Am Confident',
    intro: 'Hello there our amazing readers!! It is always a pleasure to share with you what we learn at Amazing Kids Club. We have been focusing on setting goals and gradually',
    pageLink: './blog-pages/amConfident.html',
};

const amazingHabits = {
    imgSrc: '../images/blog/amazing-habits/amazingHabits.jpg',
    date: 'February 24, 2023',
    heading: 'Amazing Habits',
    intro: 'Hello our dear readers!. We have missed you and hope that you are well. This week, after setting our goals and putting them down on paper, it was now time',
    pageLink: './blog-pages/amazingHabits.html',
};

const ourVision = {
    imgSrc: '../images/blog/our-vision/ourVision.jpeg',
    date: 'February 16, 2023',
    heading: 'Our Vision',
    intro: 'Hello, amazing readers. A wise man once said that if you aim for the moon, you might just hit the stars, and if you aim at nothing, you will hit nothing.',
    pageLink: './blog-pages/ourVision.html',
};

const goals2023 = {
    imgSrc: '../images/blog/goals-year-2023/goals2023.png',
    date: 'February 9, 2023',
    heading: '2023 Goals!',
    intro: 'Happy New Year Everyone!!! It feels good to be back at our favorite creating center where learning is fun. This week our lesson was on goal setting. A goal is',
    pageLink: './blog-pages/goals2023.html',
};

const letter2022 = {
    imgSrc: '../images/blog/letter-2022/letter2022.jpg',
    date: 'December 15, 2022',
    heading: 'A Letter To 2022',
    intro: 'Hello there amazing readers! We finally made it to the end of the year. And the 17th of December was the day to reminisce all we had accomplished during the',
    pageLink: './blog-pages/letter2022.html',
};

const decemberSpecialBasketball = {
    imgSrc: '../images/blog/december-special-basketball/decBasketball.jpg',
    date: 'December 15, 2022',
    heading: 'December Special: Let\'s Play basketball',
    intro: 'Thank you for tuning back in for this week\'s read. Let us take you through the day. We started the day off with God like we always do. We prayed',
    pageLink: './blog-pages/decemberSpecialBasketball.html',
};

const decemberSpecialJava = {
    imgSrc: '../images/blog/december-special-java/decJava.jpg',
    date: 'December 8, 2022',
    heading: 'December Special: A Trip To The Java Factory',
    intro: 'Hey there, come along as we take you through the academic trip we had at the Java factory last Saturday. On this beautiful day, we were all psyched up for',
    pageLink: './blog-pages/decemberSpecialJava.html',
};

const launchingTheBusiness = {
    imgSrc: '../images/blog/launching-the-business/launchingBusiness.jpg',
    date: 'December 1, 2022',
    heading: 'Launching The Business',
    intro: 'All our effort for the whole season was building up to this day, and the moment was finally here with us. The main reason for having a business idea, branding',
    pageLink: './blog-pages/launchingTheBusiness.html',
};

const moneyManagementCalculations = {
    imgSrc: '../images/blog/money-management-calculations-and-change/moneyCalculations.jpg',
    date: 'November 24, 2022',
    heading: 'Money Management: Calculations And Change',
    intro: 'For a kid who\’s ready to get out there, launch their business and finally make some money, the one essential skill you\’re going to need and use regularly is your',
    pageLink: './blog-pages/moneyManagementCalculations.html',
};
const creatingBusinessLogo = {
    imgSrc: '../images/blog/creating-business-logo/creatingBizLogo.png',
    date: 'November 17, 2022',
    heading: 'Creating A Business Logo',
    intro: 'A business logo is the face of your business. It identifies your business. When people think about your business, the first thing they see is your logo. Just the same',
    pageLink: './blog-pages/creatingBusinessLogo.html',
};
const pitchingTheBusiness = {
    imgSrc: '../images/blog/pitching-the-business/pitchingBiz.jpg',
    date: 'November 10, 2022',
    heading: 'Pitching The Business',
    intro: 'Have you ever been in a position where you were expected to give a presentation? If so, what did you do? Did you wait for the last day and just gave the speech or did you prepare for it in front of a mirror with yourself or in front of your friends and family?',
    pageLink: './blog-pages/pitchingTheBusiness.html',
};

const creatingBusinessName = {
    imgSrc: '../images/blog/creating-a-business-name/creatingBusinessName.jpg',
    date: 'November 3, 2022',
    heading: 'Creating A Business Name',
    intro: 'One of the things people pay little attention to but is actually very important, is a business name. A catchy or creative business name can bring you more customers, create a brand and improve your business in general.',
    pageLink: './blog-pages/creatingBusinessName.html',
};

const businessIdea = {
    imgSrc: '../images/blog/business-idea/bizIdea.jpg',
    date: 'October 20, 2022',
    heading: 'The Business Idea',
    intro: 'We can all agree that the main goal of a business is to make money. And the only way to make money is by solving a particular problem in the',
    pageLink: './blog-pages/businessIdea.html',
};

const selfDiscipline = {
    imgSrc: '../images/blog/self-discipline/selfDiscipline.jpg',
    date: 'October 13, 2022',
    heading: 'Self Discipline',
    intro: 'Have you ever been in a tricky situation because you waited until the last minute to do something; may it be, studying for your exams or doing your homework? If',
    pageLink: './blog-pages/selfDiscipline.html',
};

const hardWork = {
    imgSrc: '../images/blog/hard-work/hardWork.png',
    date: 'October 6, 2022',
    heading: 'Hard-work',
    intro: 'To some, it means giving it your all, to others, putting in a lot of effort into something and to others it plain out means determination. And to these people',
    pageLink: './blog-pages/hardWork.html',
};

const changeWorld = {
    imgSrc: '../images/blog/change-the-world/changeWorld.jpg',
    date: 'September 29, 2022',
    heading: 'How Will You Change The World?',
    intro: 'Nelson Mandela and Wangari Maathai are some of our heroes who are well known for changing the world. Wangari Maathai, one of our own, who had a deep love for',
    pageLink: './blog-pages/changeWorld.html',
};

const passionateAbout = {
    imgSrc: '../images/blog/passionate-about/passionateAbout.jpg',
    date: 'September 22, 2022',
    heading: 'What Are You Passionate About?',
    intro: 'What do you really love? Or as some might say, what do you enjoy doing? That thing that no one has to push you to do because you\’re so into it you find yourself doing it with ease.',
    pageLink: './blog-pages/passionateAbout.html',
};

const myAchievements = {
    imgSrc: '../images/blog/my-achievements/myAchievements.jpg',
    date: 'September 15, 2022',
    heading: 'My Achievements',
    intro: 'Achievement means accomplishing something through hard-work, courage or skill. It is important to note that in order to accomplish something, you really have to work for it. Just dreaming about',
    pageLink: './blog-pages/myAchievements.html',
};

const whoAmI = {
    imgSrc: '../images/blog/who-am-i/whoAmI.jpg',
    date: 'September 8, 2022',
    heading: 'Who Am I?',
    intro: 'Question, who is …………(insert your name)? Are you beautiful, kind, daring, confident, funny, strong, friendly? Pause for a moment and think about this for a minute. You might be surprised',
    pageLink: './blog-pages/whoAmI.html',
};

const careerTalkDay = {
    imgSrc: '../images/blog/career-talk-day/careerTalkDay.jpg',
    date: 'August 4, 2022',
    heading: 'Career Talk Day',
    intro: 'Hello again there. Thank you for coming back to hang out with us. Let us take you through the 30th of June AKA "Career Talk Day". On arrival we had a mini-treasure hunt.',
    pageLink: './blog-pages/careerTalkDay.html',
};

const museumTrip = {
    imgSrc: '../images/blog/museum-trip/museumTrip.jpg',
    date: 'June 28, 2022',
    heading: 'A Trip To The Museum',
    intro: 'When it comes to arriving in style, you know no kids in Nairobi do it better than the Amazing Kids😎 We gathered around for a quick catch up and head count.',
    pageLink: './blog-pages/museum.html',
};

const july16th = {
    imgSrc: '../images/blog/july16th/july16th.jpg',
    date: 'June 21, 2022',
    heading: 'July 16th',
    intro: 'Hello and welcome back! Before we do a quick catch up, let’s do a warm up first. Hahaha, what a weird set of warm up moves. It was definitely fun though',
    pageLink: './blog-pages/julySixteenth.html',
};

const budgetting = {
    imgSrc: '../images/blog/budgetting/budgetting.jpg',
    date: 'June 14, 2022',
    heading: 'Budgetting',
    intro: 'Hello there, nice to see you. We really appreciate you here at Amazing Kids for sparing your precious time to come join us. Before we even do anything else, let\’s',
    pageLink: './blog-pages/budgetting.html',
};

const july2nd = {
    imgSrc: '../images/blog/july2nd/july2nd.jpg',
    date: 'June 7, 2022',
    heading: 'July 2nd',
    intro: 'Treasure hunts are fun, challenging and rewarding. The 2nd of July started with one in the morning. There had to be some entry rules; to participate, you had to do',
    pageLink: './blog-pages/julySecond.html',
};

const resilience = {
    imgSrc: '../images/blog/resilience/resilience.jpg',
    date: 'June 30, 2022',
    heading: 'Resilience',
    intro: 'What is it about successful people that makes them stand out. Could it be that unlike others, they were just born lucky? No, it can\’t be. I think it\’s the resilience in them to see things through. ',
    pageLink: './blog-pages/resilience.html',
};

const positivity = {
    imgSrc: '../images/blog/positivity/positivity.jpg',
    date: 'June 23, 2022',
    heading: 'Positivity',
    intro: 'When you have a positive attitude, you have a clearer and better look on life. Positivity helps bring joy and good things to your life. Ask this guy.',
    pageLink: './blog-pages/positivity.html',
};

const letterFromAnOldFriend = {
    imgSrc: '../images/blog/letter-from-an-old-friend/letterFromAnOldFriend.jpg',
    date: 'June 16, 2022',
    heading: 'A Letter From An Old Friend',
    intro: 'Ah, letters! There\’s just something about them that brings a feel good energy and gives a trip to memory lane of some good old times. On arrival on June 11th',
    pageLink: './blog-pages/letterFromOldFriend.html',
};

const spellingBee = {
    imgSrc: '../images/blog/spelling-bee/spellingBee.jpg',
    date: 'June 9, 2022',
    heading: 'Let\'s Do A Spelling Bee',
    intro: 'What is it about Amazing Kids\’ Saturdays that screams out fun? Don’t believe me, let me explain. We started our day with some good old spelling bee game. Guys teamed',
    pageLink: './blog-pages/spellingBee.html',
};

const biggerPerson = {
    imgSrc: '../images/blog/bigger-person/biggerPerson.jpg',
    date: 'June 2, 2022',
    heading: 'Being The Bigger Person',
    intro: 'Hi Welcome and please take a seat over there. Don\’t be shy engage with the others in completing the crossword game. After you’re done, come play this game with',
    pageLink: './blog-pages/biggerPerson.html',
};

const triviaAnyone = {
    imgSrc: '../images/blog/trivia-anyone/triviaAnyone.jpg',
    date: 'May 26, 2022',
    heading: 'Trivia Anyone?',
    intro: 'As we all know by now, Amazing Kids sessions are always fun and creative. The Saturday of 21st May was no different. First warm up with us for a minute',
    pageLink: './blog-pages/triviaAnyone.html',
};

const may14th = {
    imgSrc: '../images/blog/may14th/may14th.jpg',
    date: 'May 14, 2022',
    heading: '14th Of May',
    intro: 'Painting, games, learning, fun and games were all the highlights of this day. Follow along to experience it too, through us of course🙂. Did you know that King Saul was',
    pageLink: './blog-pages/may14th.html',
};

const may7th = {
    imgSrc: '../images/blog/may7th/may7th.jpg',
    date: 'May 7, 2022',
    heading: '7th Of May',
    intro: 'After a 3 weeks April holiday break, the Amazing Kids Club finally resumed on the 7th of May. Grab on your seat belts and let us take you through the day.',
    pageLink: './blog-pages/may7th.html',
};

const royalExperience = {
    imgSrc: '../images/blog/royal-experience/royalExperience.jpg',
    date: 'April 9, 2022',
    heading: 'The Royal Experience',
    intro: 'On the 9th of April, The Amazing Kids Club decided to pay a visit to the Royal Golf Club. Little did we know that this would be a fun packed day full of exciting activities that we would not forget.',
    pageLink: './blog-pages/royalExperience.html',
};

const tabithaStory = {
    imgSrc: '../images/blog/story-of-tabitha/storyOfTabitha.jpg',
    date: 'April 14, 2022',
    heading: 'The Story Of Tabitha',
    intro: 'Let us take you through the day and also learn all about love and compassion. We start the day with a few interesting games. The two in particular that stand out are the “Broken Telephone” and “Concentration Game.”',
    pageLink: './blog-pages/storyOfTabitha.html',
};

const april2nd = {
    imgSrc: '../images/blog/april2nd/april2nd.jpg',
    date: 'April 22, 2022',
    heading: '2nd April 2022',
    intro: 'Hello there our good readers, we hope that you have been well and keeping safe. Last week we learnt about entrepreneurship and how to value the money that we have through identifying our different wants and needs.',
    pageLink: './blog-pages/april2nd.html',
};

// all data
const blogData = [
    picnicArboretum,
    evergreenPark,
    yourBrand,
    mustardSeed,
    stockTake,
    amConfident,
    amazingHabits,
    ourVision,
    goals2023,
    letter2022,
    decemberSpecialBasketball,
    decemberSpecialJava,
    launchingTheBusiness,
    moneyManagementCalculations,
    creatingBusinessLogo,
    pitchingTheBusiness,
    creatingBusinessName,
    businessIdea,
    selfDiscipline,
    hardWork,
    changeWorld,
    passionateAbout,
    myAchievements,
    whoAmI,
    careerTalkDay,
    museumTrip,
    july16th,
    budgetting,
    july2nd,
    resilience,
    positivity,
    letterFromAnOldFriend,
    spellingBee,
    biggerPerson,
    triviaAnyone,
    may14th,
    may7th,
    royalExperience,
    tabithaStory,
    april2nd,
];

// building a reusable blog card
blogData.forEach(eachCardData => {
    // creating reusable blogCard elements
    const blogCard = document.createElement('div');
    const blogCardDateClubDiv = document.createElement('div');
    const blogCardParaDate = document.createElement('p');
    const blogCardParaClub = document.createElement('p');
    const blogCardH2 = document.createElement('h2');
    const blogCardIntro = document.createElement('p');
    const blogCardButton = document.createElement('button');
    const blogCardButtonSpan = document.createElement('span');
    const blogCardButtonLink = document.createElement('a');
    const allTextContainer = document.createElement('div');

    // adding a class to blogCard
    blogCard.classList.add('blogCard');
    allTextContainer.classList.add('liquidGlass');
    allTextContainer.classList.add('allTextContainer');

    blogCard.style.backgroundImage = `url(${eachCardData.imgSrc})`;

    // adding date and club content and appending to div (with an added class) + appending to parent card div
    blogCardDateClubDiv.classList.add('blogCardDateClubDiv');
    blogCardParaClub.textContent = 'Amazing Kids Kenya';
    blogCardParaDate.textContent = eachCardData.date;
    blogCardDateClubDiv.appendChild(blogCardParaClub);
    blogCardDateClubDiv.appendChild(blogCardParaDate);
    blogCardDateClubDiv.classList.add('blogCardDateClubDiv');
    allTextContainer.appendChild(blogCardDateClubDiv);

    // adding heading content + appending to parent card div
    blogCardH2.textContent = eachCardData.heading;
    allTextContainer.appendChild(blogCardH2);

    // adding intro content + appending to parent card div
    // remove extra whitespaces at ends, slice to 147 letters and add ... at the end
    blogCardIntro.textContent = eachCardData.intro.trim().slice(0, 146).concat('...');
    allTextContainer.appendChild(blogCardIntro);

    // adding button content + appending to parent card div
    // also wrapping the button in a link to the blog page details post
    blogCardButton.textContent = 'Read more';
    blogCardButtonSpan.innerHTML = '&rarr;';
    blogCardButtonLink.href = eachCardData.pageLink;
    blogCardButtonLink.classList.add('blogCardButtonLink');
    blogCardButton.appendChild(blogCardButtonSpan);
    blogCardButtonLink.appendChild(blogCardButton);
    allTextContainer.appendChild(blogCardButtonLink);

    blogCard.appendChild(allTextContainer);

    // finally adding this card to parent container
    blogContainer.appendChild(blogCard);
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