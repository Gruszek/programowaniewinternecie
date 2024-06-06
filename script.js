document.addEventListener("DOMContentLoaded", function() {
    const teamsData = [
        {
            "name": "Los Angeles Lakers",
            "logo": "https://example.com/lakers-logo.png",
            "description": "The Los Angeles Lakers are an American professional basketball team based in Los Angeles."
        },
        {
            "name": "Golden State Warriors",
            "logo": "https://example.com/warriors-logo.png",
            "description": "The Golden State Warriors are an American professional basketball team based in San Francisco."
        },
        {
            "name": "Brooklyn Nets",
            "logo": "https://example.com/nets-logo.png",
            "description": "The Brooklyn Nets are an American professional basketball team based in the New York City borough of Brooklyn."
        }
    ];

    const playersData = [
        {
            "name": "LeBron James",
            "photo": "https://example.com/lebron-photo.png",
            "team": "Los Angeles Lakers"
        },
        {
            "name": "Stephen Curry",
            "photo": "https://example.com/curry-photo.png",
            "team": "Golden State Warriors"
        },
        {
            "name": "Kevin Durant",
            "photo": "https://example.com/durant-photo.png",
            "team": "Brooklyn Nets"
        }
    ];

    const newsData = [
        {
            "title": "NBA Finals 2024",
            "image": "https://example.com/nba-finals.png",
            "content": "The NBA Finals 2024 will feature the best teams competing for the championship title."
        },
        {
            "title": "MVP Race 2024",
            "image": "https://example.com/mvp-race.png",
            "content": "The MVP race for 2024 is heating up with several top contenders."
        }
    ];

    function createSlide(data, isPlayer = false) {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
            <div class="card">
                <img src="${isPlayer ? data.photo : data.logo || data.image}" alt="${data.name || data.title}">
                <div class="card-content">
                    <h3>${data.name || data.title}</h3>
                    <p>${data.description || data.content || data.team}</p>
                </div>
            </div>
        `;
        return slide;
    }

    function populateSwiper(containerId, data, isPlayer = false) {
        const container = document.getElementById(containerId).querySelector(".swiper-wrapper");
        data.forEach(item => {
            container.appendChild(createSlide(item, isPlayer));
        });
    }

    populateSwiper("teams-container", teamsData);
    populateSwiper("players-container", playersData, true);
    populateSwiper("news-container", newsData);

    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});
