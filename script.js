document.addEventListener('DOMContentLoaded', function() {
    const teamsContainer = document.getElementById('teams-container');
    const playersContainer = document.getElementById('players-container');
    const newsContainer = document.getElementById('news-container');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayTeams(data.teams);
            displayPlayers(data.players);
            displayNews(data.news);
        });

    function displayTeams(teams) {
        teams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.classList.add('card');
            teamCard.innerHTML = `
                <img src="images/${team.logo}" alt="${team.name}">
                <div class="card-content">
                    <h3>${team.name}</h3>
                    <p>${team.description}</p>
                </div>
            `;
            teamsContainer.appendChild(teamCard);
        });
    }

    function displayPlayers(players) {
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('card');
            playerCard.innerHTML = `
                <img src="images/${player.photo}" alt="${player.name}">
                <div class="card-content">
                    <h3>${player.name}</h3>
                    <p>${player.team}</p>
                </div>
            `;
            playersContainer.appendChild(playerCard);
        });
    }

    function displayNews(news) {
        news.forEach(article => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('card');
            newsCard.innerHTML = `
                <img src="images/${article.image}" alt="${article.title}">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                </div>
            `;
            newsContainer.appendChild(newsCard);
        });
    }
});
