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
            photo: "images/durant-photo.png",
            team: "Dallas Mavericks"
        }
    ];

    const newsData = [
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
    ];

    function createCard(item, type) {
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
        const teamCard = createCard(team, 'team');
        teamsContainer.appendChild(teamCard);
    });

   
