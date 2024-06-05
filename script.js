body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: #1a1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #ff4500;
}

.logo img {
    width: 50px;
    height: auto;
}

.section {
    padding: 4rem 2rem;
    text-align: center;
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    background-image: url('https://example.com/nba-bg.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

.intro h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.intro p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta-button {
    background-color: #ff4500;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #e63900;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card img {
    width: 100%;
    height: auto;
}

.card-content {
    padding: 1rem;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.2);
}

footer {
    background-color: #1a1a1a;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-content p {
    margin: 0.5rem 0;
}

.social-media {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-media a img {
    width: 30px;
    height: auto;
    transition: transform 0.3s ease;
}

.social-media a:hover img {
    transform: scale(1.1);
}
