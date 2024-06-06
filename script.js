document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Intersection Observer for section animations
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Cookie consent functionality
    acceptCookiesButton.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    }

    // Data for teams, players, and news
    const data = {
        teams: [
            {
                name: "Los Angeles Lakers",
                logo: "images/lakers-logo.png",
                description: "The Los Angeles Lakers are an American professional basketball team based in Los Angeles."
            },
            {
                name: "Golden State Warriors",
                logo: "images/warriors-logo.png",
                description: "The Golden State Warriors are an American professional basketball team based in San Francisco."
            },
            {
                name: "Brooklyn Nets",
                logo: "images/nets-logo.png",
                description: "The Brooklyn Nets are an American professional basketball team based in the New York City borough of Brooklyn."
            }
        ],
        players: [
            {
                name: "LeBron James",
                photo: "images/lebron-photo.png",
                team: "Los Angeles Lakers"
            },
            {
                name: "Stephen Curry",
                photo: "images/curry-photo.png",
                team: "Golden State Warriors"
            },
            {
                name: "Kyrie Irving",
                photo: "images/irving-photo.png",
                team: "Dallas Mavericks"
            }
        ],
        news: [
            {
                title: "NBA Finals 2024",
                image: "images/nba-finals.png",
                content: "The NBA Finals 2024 will feature the best teams competing for the championship title."
            },
            {
                title: "MVP Race 2024",
                image: "images/mvp-race.png",
                content: "The MVP race for 2024 is heating up with several top contenders."
            }
        ]
    };

    // Populate Teams Section
    const teamsContainer = document.getElementById('teams-container');
    data.teams.forEach(team => {
        const teamCard = `
            <div class="card">
                <img src="${team.logo}" alt="${team.name}">
                <div class="card-content">
                    <h3>${team.name}</h3>
                    <p>${team.description}</p>
                </div>
            </div>
        `;
        teamsContainer.innerHTML += teamCard;
    });

    // Populate Players Section
    const playersContainer = document.getElementById('players-container');
    data.players.forEach(player => {
        const playerCard = `
            <div class="card">
                <img src="${player.photo}" alt="${player.name}">
                <div class="card-content">
                    <h3>${player.name}</h3>
                    <p>Team: ${player.team}</p>
                </div>
            </div>
        `;
        playersContainer.innerHTML += playerCard;
    });

    // Populate News Section
    const newsContainer = document.getElementById('news-container');
    data.news.forEach(article => {
        const newsCard = `
            <div class="card">
                <img src="${article.image}" alt="${article.title}">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
});
