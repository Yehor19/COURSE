document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    const newsItems = [
      {
        title: 'Вибори голови Студентської ради факультету суспільних наук.',
        date: '27.05.2024',
        imgSrc: 'https://www.uzhnu.edu.ua/uploads/news/20230925_1907_pilipchuk_thumb_wide.jpg',
        link: '#',
        content: 'Контент для новини 1...'
      },
      {
        title: 'День самоврядування на факультеті суспільних наук',
        date: '23.05.2024',
        imgSrc: 'https://www.uzhnu.edu.ua/uploads/news/20231005_1086_fil03_thumb_wide.png',
        link: '#',
        content: 'Контент для новини 2...'
      },
      {
        title: 'Цікаві доповіді та жваві дискусії: на ФСН відбулася підсумкова студентська наукова конференція',
        date: '22.05.2024',
        imgSrc: 'https://www.uzhnu.edu.ua/uploads/news/20240522_1191_1_thumb_wide.jpg',
        link: '#',
        content: 'Контент для новини 3...'
      },
      {
        title: 'ЗАХИСТ ПЕДАГОГІЧНОЇ ПРАКТИКИ В ПОЄДНАННІ З ЕКСКУРСІЄЮ В ЦЕНТРІ РОЗВИТКУ ДIТЕЙ «Я СЯМ»',
        date: '20.05.2024',
        imgSrc: 'https://www.uzhnu.edu.ua/uploads/news/20240520_1242_yasam_thumb_wide.jpg',
        link: '#',
        content: 'Контент для новини 4...'
      },
      {
        title: 'Факультет суспільних наук УжНУ: вибір, що веде до успіху – зустріч із учнями м. Виноградова',
        date: '17.05.2024',
        imgSrc: 'https://www.uzhnu.edu.ua/uploads/news/20240519_1733_7_thumb_wide.jpg',
        link: '#',
        content: 'Контент для новини 5...'
      },
      {
        title: 'Міжнародній науковій конференції в Польщі презентовано підготовку в УжНУ майбутніх фахівців дошкільної та початкової освіти',
        date: '17.05.2024',
        imgSrc: 'https://www.uzhnu.edu.ua/uploads/news/20240517_1764_polshcha_page-0001_thumb_wide.jpg',
        link: '#',
        content: 'Контент для новини 6...'
      }
    ];
  
    if (newsContainer) {
      // Створюємо ряд для новин
      const row = document.createElement('div');
      row.classList.add('row', 'mb-4');
  
      newsItems.forEach(item => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');
  
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-item', 'card');
        newsCard.style.backgroundColor = '#fff'; // Фон картки
        newsCard.style.color = '#333'; // Колір тексту
  
        newsCard.innerHTML = `
          <img src="${item.imgSrc}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.content}</p>
            <a href="${item.link}" class="btn btn-primary">Читати більше</a>
            <p class="card-text"><small class="text-muted">${item.date}</small></p>
          </div>
        `;
        col.appendChild(newsCard);
        row.appendChild(col);
      });
  
      newsContainer.appendChild(row);
    }
  
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.6678438310723!2d22.287742976292115!3d48.63533787130271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47391836a6c329c3%3A0xfbe21c9853a085cd!2z0KPQttCz0L7RgNC-0LTRgdGM0LrQuNC5INC90LDRhtGW0L7QvdCw0LvRjNC90LjQuSDRg9C90ZbQstC10YDRgdC40YLQtdGC!5e0!3m2!1suk!2sua!4v1718826435837!5m2!1suk!2sua';
      iframe.width = '100%';
      iframe.height = '450';
      iframe.style.border = '0';
      iframe.allowFullscreen = '';
      iframe.loading = 'lazy';
      mapContainer.appendChild(iframe);
    }
  });
  