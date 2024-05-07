document.addEventListener('DOMContentLoaded', function () {
    const fetchDataBtn = document.getElementById('fetchDataBtn');

    fetchDataBtn.addEventListener('click', async function () {
        try {
            const response = await fetch('http://localhost:3000/api/entries');
            const data = await response.json();

            data.forEach(entry => {
                const cardArea = document.querySelector('.card-area');

                const card = document.createElement('div');
                card.classList.add('card');

                const cardImg = document.createElement('div');
                cardImg.classList.add('card-img');

                const img = document.createElement('img');
                img.src = entry.address;
                img.alt = entry.day;

                cardImg.appendChild(img);

                const cardDiary = document.createElement('div');
                cardDiary.classList.add('card-diary');

                const h4 = document.createElement('h4');
                h4.textContent = entry.day;

                const p = document.createElement('p');
                p.textContent = entry.description;

                cardDiary.appendChild(h4);
                cardDiary.appendChild(p);

                card.appendChild(cardImg);
                card.appendChild(cardDiary);

                cardArea.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
