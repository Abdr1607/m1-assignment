document.addEventListener('DOMContentLoaded', (event) => {
    // Array of objects, each object contains the image source and alt text
    const photos = [
    { src: "images/pet1.webp", alt: "Pet 1", caption: "Whisker Haven", description: "A pet you can adopt"},
    { src: "images/pet2.webp", alt: "Pet 2", caption: "Paws and Reflect", description: "A pet you can adopt"},
    { src: "images/pet3.webp", alt: "Pet 3", caption: "Furry Fiesta", description: "A pet you can adopt"},
    { src: "images/pet4.webp", alt: "Pet 4", caption: "Clawed Monet", description: "A pet you can adopt"},
    { src: "images/pet5.jpeg", alt: "Pet 5", caption: "Bark Boulevard", description: "A pet you can adopt"},
    { src: "images/pet6.webp", alt: "Pet 6", caption: "Tail Wag Terrace", description: "A pet you can adopt"},
    { src: "images/pet7.webp", alt: "Pet 7", caption: "Purrs and Paws", description: "A pet you can adopt"},
    { src: "images/pet8.jpeg", alt: "Pet 8", caption: "Feline Serenity", description: "A pet you can adopt"},
    { src: "images/pet9.webp", alt: "Pet 9", caption: "Canine Creek", description: "A pet you can adopt"},
    { src: "images/pet10.jpeg", alt: "Pet 10", caption: "Snuggle Street", description: "A pet you can adopt"}
    ];

    // Select the <ul> element where the photos will be displayed
    const ul = document.getElementById('pets-lab4');


    const openCaptionTag = '<div class="caption">';
    const closeCaptionTag = '</div>';
    const openDescTag = '<div class="description">';
    const closeDescTag = '</div>';

    const captionTexts = ["caption"];
    const descTexts = ["description"];

    // Iterate over the photos array
    photos.forEach(photo => {
        const li = document.createElement('li');
        li.className = 'photo';

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;

        const captionDiv = document.createElement('div');
        captionDiv.className = 'caption';
        captionDiv.textContent = photo.caption;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        descriptionDiv.textContent = photo.description;

        const infoBox = document.createElement('div');
        infoBox.className = 'info-box';

        const heading = document.createElement('h3');
        heading.className = 'info-heading';
        heading.textContent = photo.caption;

        const textInfo = document.createElement('p');
        textInfo.className = 'info-text';
        textInfo.textContent = photo.description;

        const closeLink = document.createElement('a');
        closeLink.href = '#';
        closeLink.className = 'info-close';
        closeLink.textContent = 'Click This To Close';
        closeLink.setAttribute('tabindex', '0');

        infoBox.appendChild(heading);
        infoBox.appendChild(textInfo);
        infoBox.appendChild(closeLink);
        li.appendChild(img);
        li.appendChild(captionDiv);
        li.appendChild(descriptionDiv);
        li.appendChild(infoBox);
        ul.appendChild(li);

        descriptionDiv.addEventListener('click', function() {
            console.log('Description clicked for:', photo.caption); // Debug line
            infoBox.classList.add('show');
        });

        closeLink.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Close clicked for:', photo.caption); // Debug line
            infoBox.classList.remove('show');
        });

        closeLink.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                infoBox.classList.remove('show');
            }
        });
    });

    // Event listener to close info box when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.description')) {
            const infoBoxes = document.querySelectorAll('.info-box.show');
            infoBoxes.forEach(function(box) {
                if (box.contains(event.target)) {
                    // Clicked inside box, do nothing
                } else {
                    // Clicked outside the box
                    box.classList.remove('show');
                }
            });
        }
    });
});