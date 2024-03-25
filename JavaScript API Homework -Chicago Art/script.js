document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://api.artic.edu/api/v1/artworks'
    
    
    
        let reply = fetch(apiUrl)


        reply.then(response => response.json())
        .then(data => {
            const paintingsContainer = document.getElementById('paintings-container');

            console.log(data)

            data.data.forEach(painting => {
                const paintingElement = document.createElement('div');
                paintingElement.classList.add('painting');

                const imageElement = document.createElement('img');




                let identifier = painting.image_id

                let imageUrl = `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`

                
                imageElement.src = imageUrl
                

                imageElement.alt = painting.title;
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = painting.title;

                const artistElement = document.createElement('p');
                artistElement.textContent = `Artist: ${painting.artist_title}`;

                const yearElement = document.createElement('p');
                yearElement.textContent = `Display Date: ${painting.date_display}`;

                const descriptionElement = document.createElement('p');
                descriptionElement.innerHTML = painting.description;

                paintingElement.appendChild(imageElement);
                paintingElement.appendChild(titleElement);
                paintingElement.appendChild(artistElement);
                paintingElement.appendChild(yearElement);
                paintingElement.appendChild(descriptionElement);

                paintingsContainer.appendChild(paintingElement);
            });
        })
        .catch(error => console.error('Error fetching paintings:', error));
});

