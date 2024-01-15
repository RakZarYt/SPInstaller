let container = document.querySelector('.container');

let contentInner = [
    {
        'title': 'KEEPTH',
        'id': 1,
        'description': `Прога поможет вам вести заметки и работать с ними :D`,
        'link': [
            ['1 выпуск', 'https://drive.google.com/file/d/1SRElhqWhxkFPBw9guxT06EYUbEaPK-Nn/view?usp=drive_link'],
            ['2 выпуск', 'https://drive.google.com/file/d/1Uc6Tn3rsXinBFVTmBLkUhczsInXcZ4SK/view?usp=drive_link'],
            ['3 выпуск', 'https://drive.google.com/file/d/1L956b2opLR69a4t1sj3Y4UKlcfogVoZI/view?usp=drive_link'],
            ['4 выпуск', 'https://drive.google.com/file/d/1I7rjpkmsjRFdp3yVIBqzxy_2pxD-ivIz/view?usp=drive_link'],
            ['5 выпуск', 'https://drive.google.com/file/d/1Ok88TyRMokWwYaIr4BS5ppGSh03dmn-E/view?usp=drive_link'],
            ['6 выпуск', 'https://drive.google.com/file/d/1rBfRl6fAz3txEoniMNwhWpgHQCBpvooC/view?usp=drive_link'],
            ['7 выпуск', 'https://drive.google.com/file/d/1A1_sVJkVa9B-mXwNnueuJL0haLTVbUis/view?usp=drive_link'],
            ['8 выпуск', 'https://drive.google.com/file/d/1DiJGuTicsoP4osc06yLoZc9IwCqr3PV_/view?usp=drive_link'],
            ['9 выпуск', 'https://drive.google.com/file/d/1DmeoQXysHchOFCnWl0stav7n_pdyBRpV/view?usp=drive_link'],
            ['10 выпуск', 'https://drive.google.com/file/d/1mggYyUJ7kcv6C-ky466jB4atwIbrwg02/view?usp=drive_link'],
            ['11 выпуск', 'https://drive.google.com/file/d/1YP9Tyu7b9-gyqZaPAm828id4SwGNwXsg/view?usp=drive_link'],
            ['12 DEV выпуск', 'https://drive.google.com/file/d/14NO1E2Xb953FKzSfJZRlqea_N-m8cfe4/view?usp=drive_link'],
        ],
    },

    {
        'title': 'Консольный таймер',
        'id': 2,
        'description': `Простая прога для NodeJS`,
        'link': [
            ['Начало разработки', 'https://drive.google.com/file/d/1m_9h09t9FU_Xv2MpxW7GLcFYA86uLLD_/view?usp=drive_link'],
        ],
    },

    {
        'title': 'Планировщик задач',
        'id': 3,
        'description': `Прога для планирования ваших задач`,
        'link': [
            ['1 TO-DO List', 'https://drive.google.com/file/d/1IckULkWQk6JV5SJv5R2oPgIJxE7pA7nB/view?usp=drive_link'],
            ['2 TO-DO List', 'https://drive.google.com/file/d/175xhE6OBC7c5tNxYdFgHQeHDtq-2qmFm/view?usp=drive_link'],
            ['2.1 TO-DO List', 'https://drive.google.com/file/d/1kX2YH_mrBsXC_SmQqJYKqkD73we8Hb9R/view?usp=drive_link'],
            ['3 TO-DO List', 'https://drive.google.com/file/d/1dcgg050l705tavIAnDinvS6ck-UMb3ts/view?usp=drive_link'],
            ['4 TO-DO List', 'https://drive.google.com/file/d/1pmN-fjh7sQci7VNEBixEOPnntRXnhLkh/view?usp=drive_link'],
            ['5 TO-DO List', 'https://drive.google.com/file/d/1lBYtQzAnis7RJ4PdwIXFxIngK6wGNzBE/view?usp=drive_link'],
            ['6 TO-DO List', 'https://drive.google.com/file/d/1BQbbRiarN-mWcrwix3aXJmx5oYLL37AR/view?usp=drive_link'],
            ['7 TO-DO List', 'https://drive.google.com/file/d/171Qu9fXi0yGp0hmNtudFXSBaIZkvWs5M/view?usp=drive_link'],
            ['8 TO-DO List', 'https://drive.google.com/file/d/1sYYKvLw1TyKEDe4RRZyXFnq4NIGEypC5/view?usp=drive_link'],
            ['9 TO-DO List', 'https://drive.google.com/file/d/1mSYRn6n7B8CQNqbUcBQtd7Cqut0pRQo1/view?usp=drive_link'],
        ],
    },

    {
        'title': 'ZPower',
        'id': 4,
        'description': `Простая игра, моя первая :D`,
        'link': [
            ['ZP V01', 'https://drive.google.com/file/d/1TdCnSGa9LFDJ7piWKl1S-ClpMxyXCONL/view?usp=drive_link'],
            ['ZP V02', 'https://drive.google.com/file/d/1XsjcrlKY7YcveBs6KRLbDjYK0kMd9B2W/view?usp=drive_link'],
        ],
    },
]

let menu = document.querySelector('.menu');

function togglePopup(popup) {
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    }
    else {
        popup.style.display = 'none';
    }
}

function content(contentID) {
    result = '';

    for (i in contentInner) {
        if (contentInner[i]['id'] == contentID) {
            link = ``

            for (d in contentInner[i]['link']) {
                link += `<p class="text"><a href="${contentInner[i]['link'][d][1]}" class="link">${contentInner[i]['link'][d][0]}</a></p>`;
            }

            result = `
            <div class="container__main">
                <h2 class="heading">${contentInner[i]['title']}</h2>
                <p class="text">${contentInner[i]['description']}</p>
                <p class="text"><a href="${contentInner[i]['link'][0][1]}" class="link">${contentInner[i]['link'][0][0]}</a></p>
            </div>

            <div class="container__footer">
                <h2 class="heading">Прошлые версии</h2>
                ${link}
            </div>

            <div class="container__menu">
                <button class="button" onclick="togglePopup(menu)">МЕНЮ</button>
            </div>
            `
        }
    }

    container.innerHTML = result;
}