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


/*$(document).ready(function() {
    // Function to create the lightbox div elements
        function createLightbox() {
        const lightbox = $('<div class="lightbox-overlay"></div>');
        const lightboxContent = $('<div class="lightbox-content"></div>');
        const closeBtn = $('<span class="close-btn">&times;</span>');

        // Append close button and content div to lightbox overlay
        lightbox.append(lightboxContent);
        lightbox.append(closeBtn);

        // Append lightbox to body
        $('body').append(lightbox);

        // Click event to hide the lightbox
        lightbox.on('click', function() {
        $(this).hide();
        });

        // Prevent click inside the lightbox content to propagate to the overlay
        lightboxContent.on('click', function(e) {
        e.stopPropagation();
        });

        // Click event for close button
        closeBtn.on('click', function() {
        lightbox.hide();
        });
    }

    // Call the function to create lightbox on page load
    createLightbox();

    // Click event for gallery images
    $('#pets-lab4').on('click', '.photo img', function() {
        const src = $(this).attr('src');
        const lightboxImage = $('<img>').attr('src', src);

        $('.lightbox-content').empty().append(lightboxImage);
        $('.lightbox-overlay').show();
    });
    });*/


$(document).ready(function() {
    const $backdrop = $('.backdrop'); // Select the backdrop element
    const $lightboxContent = $('.lightbox-content'); // Select the lightbox content element
    const $closeBtn = $('.close-btn'); // Select the close button
    
    // Click event for gallery images
    $('#pets-lab4').on('click', '.photo img', function() {
        const src = $(this).attr('src');
        const lightboxImage = $('<img>').attr('src', src);
    
        $lightboxContent.empty().append(lightboxImage);
        $backdrop.fadeIn();
    });
    
    // Click event to hide the lightbox
        $backdrop.on('click', function() {
        $backdrop.fadeOut();
    });
    
    // Prevent click inside the lightbox content from hiding the lightbox
    $lightboxContent.on('click', function(e) {
        e.stopPropagation();
    });
    
    // Click event for close button
    $closeBtn.on('click', function() {
        $backdrop.fadeOut();
    });
});