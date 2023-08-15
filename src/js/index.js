document.addEventListener('DOMContentLoaded', function () {
    const teslaDiv = document.getElementById('article');
    const techDiv = document.getElementById('techInfo');
    const wsjDiv = document.getElementById('wsjInfo');

    // Spacer
    teslaNews();
    techNews();
    wsjNews()

    // Spacer
    function techNews() {
        const apiKey = '0decf3897fea4aabb4d0777f1c2f9a91';
        const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles; // Corrected property name
                let resultHTML = '';
                for (let i = 0; i < Math.min(3, articles.length); i++) {
                    const article = articles[i];
                    // Truncate the description to 100 characters
                    const truncatedDescription = article.description.slice(0, 100) + (article.description.length > 100 ? '...' : '');
                    const truncatedTitle = article.title.slice(0, 75) + (article.description.length > 100 ? '...' : '');
                    resultHTML += `
                        <div class="content">
                            <span class="badge bg-author">${article.author}</span>
                            <div class="card-body">
                                <h5 class="content-title mb-1">${truncatedTitle}</h5>
                                <p class="content-text mb-2">${truncatedDescription}</p>
                                <a href="${article.url}" target="_blank" class="content-url">Read More</a>
                            </div>
                        </div>
                    `;
                }
                techDiv.innerHTML = resultHTML; // Use techDiv instead of articleDiv
            })
            .catch(error => {
                console.error('Error fetching tech news:', error);
                techDiv.innerHTML = 'Error fetching tech news.';
            });
    }
    // Spacer
    function teslaNews() {
        const apiKey = '0decf3897fea4aabb4d0777f1c2f9a91';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles;
                let resultHTML = '';
                for (let i = 0; i < Math.min(3, articles.length); i++) {
                    const article = articles[i];
                    // Truncate the description to 100 characters
                    const truncatedDescription = article.description.slice(0, 100) + (article.description.length > 100 ? '...' : '');
                    const truncatedTitle = article.title.slice(0, 70) + (article.description.length > 100 ? '...' : '');
                    resultHTML += `
                        <div class="content">
                            <span class="badge bg-author">${article.author}</span>
                            <div class="card-body">
                                <h5 class="content-title mb-1">${truncatedTitle}</h5>
                                <p class="content-text mb-2">${truncatedDescription}</p>
                                <a href="${article.url}" target="_blank" class="content-url">Read More</a>
                            </div>
                        </div>
                    `;
                }
                teslaDiv.innerHTML = resultHTML;
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                teslaDiv.innerHTML = 'Error fetching news.';
            });
    }
    // Spacer
    function wsjNews() {
        const apiKey = '0decf3897fea4aabb4d0777f1c2f9a91';
        const apiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles;
                let resultHTML = '';
                for (let i = 0; i < Math.min(6, articles.length); i++) {
                    const article = articles[i];
                    // Truncate the description to 100 characters
                    const truncatedDescription = article.description.slice(0, 40) + (article.description.length > 100 ? '...' : '');
                    const truncatedTitle = article.title.slice(0, 55) + (article.description.length > 100 ? '...' : '');
                    const truncatedpublishedAt = article.publishedAt.slice(0, 10) + (article.description.length > 100 ? '' : '');
                    resultHTML += `
                        <div class="content">
                            <img src="${article.urlToImage}" alt="Article Image" style="max-width: 100%;">
                            <div class="d-flex mt-1">
                                <span class="badge bg-author me-2">${article.author}</span>
                                <span class="content-date">${truncatedpublishedAt}</span>
                            </div>
                            <div class="card-body">
                                <h5 class="content-title mb-1">${truncatedTitle}</h5>
                                <p class="content-text mb-2">${truncatedDescription}</p>
                                <a href="${article.url}" target="_blank" class="content-url">Read More</a>
                            </div>
                        </div>
                    `;
                }
                wsjDiv.innerHTML = resultHTML;
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                wsjDiv.innerHTML = 'Error fetching news.';
            });
    }
});