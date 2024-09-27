document.addEventListener("DOMContentLoaded", () => {
    // Бургер меню
    const burger = document.getElementById('burger'),
    nav = document.getElementById('nav'),
    menuItems = document.querySelectorAll('.menu__item'),
    $sectionHero = document.querySelector('.hero'),
      $sectionAll = document.querySelector('.all');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        nav.classList.toggle('open');
        document.body.classList.toggle('scroll-stop');
    })

    // Смена секций при выборе пункта меню и закрытие бургера
    menuItems.forEach(item => {
      item.addEventListener('click', (event) => {
          const target = event.target;

          if (target.dataset.section === 'home') {
            changeHero();
          } else {
            changeHero(false)
            
          }

          if (target.closest('.menu__item')) {
              closeBurger()
          }
      })
  })    

  // Смена видимости секций
  function changeHero(heroVisible = true) {
    if (heroVisible) {
      $sectionHero.classList.remove('hidden');
      $sectionAll.classList.add('hidden');
      setTimeout(() => {
      $sectionHero.style.display = 'block'
    }, 200)
    } else {
      $sectionHero.classList.add('hidden');
      $sectionAll.classList.remove('hidden');
      
      // setTimeout(() => {
        $sectionHero.style.display = 'none'
        
      // }, 300)
      // console.log('111');
    }
  }

  function closeBurger () {
    burger.classList.remove('open');
    nav.classList.remove('open');
    document.body.classList.toggle('scroll-stop');
  }

  // Закрытие по эск   
  window.addEventListener('keydown', function (event) {     
        if (event.key === 'Escape' || event.key === 'Esc') {
          if (burger.classList.contains('open')) {
            burger.classList.remove('open');
            nav.classList.remove('open');  
            document.body.classList.remove('scroll-stop')    
          }            
      }
  }) 
 
  // Видеоплеер
  const videoPlayer = document.getElementById('videoPlayer');

  // Массив с URL видеофайлов
  const videos = [
    './img/home_page/train.mp4',
    './img/home_page/IG-stories.mp4'
  ];

  let currentVideoIndex = 0;

  // Функция для загрузки и воспроизведения видео
  const playVideo = (index) => {    
    if (index < videos.length) {
      videoPlayer.src = videos[index];
      videoPlayer.load();
    }     
  };

  // Событие `canplay` срабатывает, когда видео готово к воспроизведению
  videoPlayer.addEventListener('canplay', () => {
    videoPlayer.play();

    // Установите таймер для переключения видео через 3 секунды
    setTimeout(() => {
      videoPlayer.pause();
      if (currentVideoIndex === (videos.length - 1)) {        
        currentVideoIndex = 0;    
    } else { 
        currentVideoIndex++;
    }
    //   if (currentVideoIndex === videos.length) {currentVideoIndex === 0}
      playVideo(currentVideoIndex);
    }, 3000); // 3000 миллисекунд = 3 секунды
  });

  // Запускаем воспроизведение первого видео
  playVideo(currentVideoIndex);

  // Создание и анимация всплывающих точек
  const bublContainer = document.getElementById('bubl');

  function createdot(initial = false) {
    
    const dot = document.createElement('div');
    dot.classList.add('dot');
    
    dot.style.left = `${Math.random() * 100}%`;

    if (initial) {    
      dot.style.bottom = `${Math.random() * 100}vh`
        
      dot.style.animationDelay = `${Math.random() * 10}s`;
      dot.style.animationDuration = `${15 + Math.random() * 5}s`;
    } else {    
        dot.style.bottom = `0vh`
        dot.style.animationDelay = `${Math.random() * 10}s`;
        dot.style.animationDuration = `${45 + Math.random() * 5}s`;
    }
    
    bublContainer.appendChild(dot);

    dot.addEventListener('animationend', () => {
        dot.remove();
    });
  }

  for (let i = 0; i < 250; i++) {
    createdot(true);
  }

  setInterval(() => createdot(), 500);

  // Аккордеон секции FAQ
  const $accItemAll = document.querySelectorAll('.questions__item');

  if($accItemAll)
  $accItemAll.forEach((item, index) => {
    const $accBtn = item.querySelector('.questions__item--btn');

    if($accBtn)
    $accBtn.addEventListener('click', () => {
      item.classList.toggle('open');

        const $body = item.querySelector('.questions__item--body');

        if (item.classList.contains('open')) {
          $body.style.height = `${$body.scrollHeight}px`
        } else {
          $body.style.height = '0px'
        }
        closeAcc(index)
      })
  })

  function closeAcc(count) {
    $accItemAll.forEach((item, index) => {
      if (count !== index) {
        item.classList.remove('open')

        const $body = item.querySelector('.questions__item--body');
        $body.style.height = '0px';      
      }
    })
  }
})
