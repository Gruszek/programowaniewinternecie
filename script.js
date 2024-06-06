document.addEventListener('DOMContentLoaded', function() {
    const teamsData = [
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
    ];

    const playersData = [
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
    ];

    const newsData = [
        {
            title: "NBA Finals 2024",
            image: "images/nba-finals.png",
            content: "The NBA Finals 2024 are set to be an epic showdown between the top teams."
        },
        {
            title: "MVP Race",
            image: "images/mvp-race.png",
            content: "The race for the MVP title this season is tighter than ever with several top contenders."
        },
        {
            title: "Rookie Watch",
            image: "images/rookie-watch.png",
            content: "Keep an eye on these rookies who are making a big impact in their debut season."
        }
    ];

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = item.logo || item.photo || item.image;
        img.alt = item.name || item.title;
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const title = document.createElement('h3');
        title.textContent = item.name || item.title;
        
        const description = document.createElement('p');
        description.textContent = item.description || item.team || item.content;
        
        cardContent.appendChild(title);
        cardContent.appendChild(description);
        card.appendChild(img);
        card.appendChild(cardContent);
        
        return card;
    }

    const teamsContainer = document.getElementById('teams-container');
    teamsData.forEach(team => {
        teamsContainer.appendChild(createCard(team));
    });

    const playersContainer = document.getElementById('players-container');
    playersData.forEach(player => {
        playersContainer.appendChild(createCard(player));
    });

    const newsContainer = document.getElementById('news-container');
    newsData.forEach(news => {
        newsContainer.appendChild(createCard(news));
    });

    // Lazy loading and scroll reveal effect
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card');

    const options = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Cookie consent handling
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    acceptCookiesButton.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    } else {
        cookieConsent.style.display = 'none';
    }
});
