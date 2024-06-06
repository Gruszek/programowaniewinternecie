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

    // Function to render cards
    const renderCards = (containerId, items, type) => {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            let content;
            if (type === 'teams') {
                content = `
                    <img src="${item.logo}" alt="${item.name} Logo">
                    <div class="card-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
            } else if (type === 'players') {
                content = `
                    <img src="${item.photo}" alt="${item.name}">
                    <div class="card-content">
                        <h3>${item.name}</h3>
                        <p>Team: ${item.team}</p>
                    </div>
                `;
            } else if (type === 'news') {
                content = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-content">
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </div>
                `;
            }
            card.innerHTML = content;
            container.appendChild(card);
        });
    };

    renderCards('teams-container', data.teams, 'teams');
    renderCards('players-container', data.players, 'players');
    renderCards('news-container', data.news, 'news');
});
