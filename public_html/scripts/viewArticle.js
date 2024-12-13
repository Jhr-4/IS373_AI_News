const params = new URLSearchParams(location.search);
const nid = params.get('nid');
fetchArticles(nid);

async function fetchArticles(nid) {
    try {
        const response = await fetch(`https://api.currentai.me/node/${nid}?_format=json`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Error fetching articles: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response
        displayArticle(data);

    } catch (error) {
        console.error('Using test data. Error fetching and displaying article:', error);
        const testData = {
            "title": [{"value": "Test Title"}],
            "created": [{"value": "2024-12-05T23:25:53+00:00", "format": "Y-m-d\\TH:i:sP"}],
            "field_article_image": [{"alt": "Test Img Alt", "url": "https://placehold.co/600x400"}],
            "field_article_body": [{"processed":  "\u003Cp\u003ETest Title"}]
        };

        displayArticle(testData);
    }
}

function displayArticle(article) {
    const container = document.querySelector('.article-view');

    const title = article.title[0].value || 'No Title Found';
    const created = new Date(article.created[0].value).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) || 'No Date Found';
    const imgURL = article.field_article_image[0].url || 'https://picsum.photos/200';
    const imgAlt = article.field_article_image[0].alt || 'No Image Alt Found';
    const body = article.field_article_body[0].processed || 'No content available';


    const titleElement = container.querySelector('.article-title');
    titleElement.textContent = title;

    const thumbnailElement = container.querySelector('.article-thumbnail .card img');
    thumbnailElement.src = imgURL;
    thumbnailElement.alt = imgAlt;

    //const authorElement = container.querySelector('#article-author');
    //authorElement.textContent = article.author || 'N/A';

    const dateElement = container.querySelector('#article-date');
    dateElement.textContent = created;

    const bodyElement = container.querySelector('.article-body');
    bodyElement.innerHTML = body;
}
