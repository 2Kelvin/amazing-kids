// getting HTML elements
const blogContainer = document.getElementById('blogContainer');

const evergreenBlog = {
    imgSrc: '../images/facilitators/kev_main.jpeg',
    date: 'September 11, 2024',
    heading: 'Our Adventure at Evergreen Park',
    intro: 'Lorem ipsum, dolor sniam quas distinctio velit, laudantium in doloribus tenetur recusandae. Small intro. First lines of blog',
};

// blog cards data
const blogData = [
    evergreenBlog,
    {
        imgSrc: '../images/facilitators/moses_main.jpeg', // same image for simplicity
        date: 'September 15, 2024', // different date
        heading: 'Another Park Visit', // different heading
        intro: 'A second blog post entry with different content.', // different intro
    }
 ];

// building a reusable blog card
blogData.forEach(eacCardData => {
    // creating reusable blogCard elements
    const blogCard = document.createElement('div');
    const blogCardImg = document.createElement('img');
    const blogCardDateClubDiv = document.createElement('div');
    const blogCardParaDate = document.createElement('p');
    const blogCardParaClub = document.createElement('p');
    const blogCardH2 = document.createElement('h2');
    const blogCardIntro = document.createElement('p');
    const blogCardButton = document.createElement('button');
    const blogCardButtonSpan = document.createElement('span');

    // adding a class to blogCard
    blogCard.classList.add('blogCard');

    // assigning img attributes data + appending to parent card div
    blogCardImg.alt = 'Blog Picture';
    blogCardImg.src = eacCardData.imgSrc;
    blogCard.appendChild(blogCardImg);

    // adding date and club content and appending to div (with an added class) + appending to parent card div
    blogCardDateClubDiv.classList.add('blogCardDateClubDiv');
    blogCardParaDate.textContent = eacCardData.date;
    blogCardParaClub.textContent = 'Amazing Kids';
    blogCardDateClubDiv.appendChild(blogCardParaDate);
    blogCardDateClubDiv.appendChild(blogCardParaClub);
    blogCard.appendChild(blogCardDateClubDiv);

    // adding heading content + appending to parent card div
    blogCardH2.textContent = eacCardData.heading;
    blogCard.appendChild(blogCardH2);

    // adding intro content + appending to parent card div
    blogCardIntro.textContent = eacCardData.intro;
    blogCard.appendChild(blogCardIntro);

    // adding button content + appending to parent card div
    blogCardButton.textContent = 'Read more';
    blogCardButtonSpan.innerHTML = '&rarr;';
    blogCardButton.appendChild(blogCardButtonSpan);
    blogCard.appendChild(blogCardButton);

    // finally adding this card to parent container
    blogContainer.appendChild(blogCard);
});