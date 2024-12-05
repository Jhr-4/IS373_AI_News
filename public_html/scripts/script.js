async function fetchAndDisplay() {
    try {
        const response = await fetch('https://api.currentai.me/rest-recent-articles', {
            method: 'GET',
            headers: {
                'Accept': 'application/json' // Ensure response is in JSON format
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching articles: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response
        displayArticles(data);
    } catch (error) {
        console.error('Using test data. Error fetching and displaying articles:', error);
        const testData = [
            {
                "nid": [
                    {
                        "value":2
                    }
                ],
                "created": "2024-12-04T19:38:34+00:00",
                "title": "AI in Healthcare: Revolutionizing Diagnostics and Treatment Add to Default shortcuts",
                "field_article_image": [
                    {
                        "url": "http://api.currentai.me/sites/default/files/2024-12/Healthcare_AI.webp",
                        "alt": "Health Care Professional Utilizing AI Technology"
                    }
                ]
            },
            {
                "nid": [
                    {
                        "value":1
                    }
                ],
                "created": "2024-12-04T19:31:24+00:00",
                "title": "Google to Buy Nuclear Power Plants to Supercharge AI: The Future of Energy and Technology Add to Default shortcuts",
                "field_article_image": [
                    {
                        "url": "http://api.currentai.me/sites/default/files/2024-12/AI_with_powerplant.webp.webp",
                        "alt": "AI-driven energy grid with nuclear power plants in the background"
                    }
                ]
            }
        ];
        
        // use testData instead
        displayArticles(testData);
    }
}

function displayArticles(data) {
    const container = document.getElementById('article-container');
    container.innerHTML = '';

    data.forEach(article => {
        const title = article.title || 'No title available';
        const created = article.created;
        const imgURL = article.field_article_image[0].url || 'https://picsum.photos/200';
        const imgAlt = article.field_article_image[0].alt || 'Article Image';
        const nid = article.nid[0].value;

        // Create the card
        const card = document.createElement('a');
        card.href = `http://localhost:8080/node/${nid}`;
        card.classList.add('card', 'card-link');
        card.style.backgroundImage = `url(${imgURL})`;

        // Add content overlay
        const cardContent = `
            <div class="card-content">
                <h3>${title}</h3>
                <p class="created">Created: ${created}</p>
            </div>
        `;
        card.innerHTML = cardContent;

        container.appendChild(card);
    });
}

fetchAndDisplay();
