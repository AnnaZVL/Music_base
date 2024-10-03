document.addEventListener('DOMContentLoaded', function () {
    // Скрытие бокового меню
    const $buttonClose = document.getElementById('close'),
        $aside = document.getElementById('aside');

    $buttonClose.addEventListener('click', () => {
        $aside.classList.toggle('hidden');
        $buttonClose.classList.toggle('show')
    })

    // Скрытие подменю в боковой панели
    const $buttonBoxClose = document.querySelectorAll('.box__close'),
    $boxAll = document.querySelectorAll('.aside-personal__box'),
        $menuAll = document.querySelectorAll('.aside-personal__menu');

        $buttonBoxClose.forEach(btn => {
            btn.addEventListener('click', (event) => {
            
            btn.classList.toggle('visible')

            $menuAll.forEach(elem => {    
                if (elem.dataset.menu === event.target.dataset.menu)
                elem.classList.toggle('visible');
            })

            $boxAll.forEach(elem => { 
                if (elem.dataset.menu === event.target.dataset.menu)
                    elem.classList.toggle('small');
            })
        })
        
    })

    //Смена активного пункта в боковой панели 
    const $asideMenuAll = document.querySelectorAll('.aside-menu__item');
    const currentPage = window.location.pathname.split("/").pop().replace('.html', ''); 

    $asideMenuAll.forEach(item => {          
        const page = item.getAttribute('data-content');
        if (currentPage === page) {           
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        };       
    })

    // Смена лайка
    const $btnLikeAll = document.querySelectorAll('.track__like')

    $btnLikeAll.forEach(like => {
        like.addEventListener('click', (event) => {            
            like.classList.toggle('like')
        })
    })

    // Модальное окно
    // Открытие модального окна
    const $btnOpenModal = document.getElementById('sign'),
        modal = document.getElementById('modal'),        
        $btnCloseModal = document.querySelectorAll('.modal__close'),
        $btnAgreementAll = document.querySelectorAll('.agreement'),
        modalAgreement = document.getElementById('modalAgreement');

    $btnOpenModal.addEventListener('click', () => {
        modal.classList.add('visible');
        document.body.classList.add('scroll-stop');
    });

    // Закрытие модального окна по кнопке
    $btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {  
            
            if (modal) {
                modal.classList.remove('visible');
            } 
            if (modalAgreement) {                
                modalAgreement.classList.remove('visible');
            }
            
            document.body.classList.remove('scroll-stop');
        });
    });

    // Закрытие модального окна по эскейп    
    window.addEventListener('keydown', (event) => {
        
        if (event.key === 'Escape' || event.key === 'Esc') {   
            if (typeof modal !== 'undefined' && modal.classList.contains('visible')) {                
            if (modal) {
                modal.classList.remove('visible');
            }
           if (modalAgreement) {
            modalAgreement.classList.remove('visible');
           }
            document.body.classList.remove('scroll-stop');
        }
    }
    });
    
    // Открытие модалки с реквизитами договора
    if($btnAgreementAll) {
    $btnAgreementAll.forEach(btn => {
        btn.addEventListener('click', () => {
            modalAgreement.classList.add('visible');
            document.body.classList.add('scroll-stop');
        })
    })
}
    
    // Открытие модалки с реквизитами договора
    $btnAgreementAll.forEach(btn => {
        btn.addEventListener('click', () => {
            modalAgreement.dataset.name = btn.id
            modalAgreement.classList.add('visible');
            document.body.classList.add('scroll-stop');
        })
    })
     

    // Переключение форм входа
    // Смена кнопки
    const loginBtn = document.getElementById('loginBtn'),
        formAll = document.querySelector('.form'),
        registerBtn = document.getElementById('registerBtn'),
        checkbox = document.getElementById('reg-log');

    formAll.addEventListener('submit', (event) => {
        event.preventDefault()

        /*Тут валидация полей форм входа/регистрации*/
        if (modal) {
            modal.classList.remove('visible');
        }
       if (modalAgreement) {
        modalAgreement.classList.remove('visible');
       }
        document.body.classList.remove('scroll-stop');
    });

    loginBtn.addEventListener('click', function () {
        checkbox.checked = false;
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    });

    registerBtn.addEventListener('click', function () {
        checkbox.checked = true;
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');        
    });
    
    // Слайдер секции топ исполнителей
    const swiperTop = new Swiper('.top__list', {        
        direction: 'horizontal',
        loop: true,  
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: false,    
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },    
        breakpoints: {
            1200: {
                slidesPerGroup: 1,
                slidesPerView: 3,
            },
            1024: {
                slidesPerGroup: 1,
                slidesPerView: 3,
            },
           768: {
                slidesPerGroup: 1,
                slidesPerView: 2,
            },
            562: {
                slidesPerGroup: 1,
                slidesPerView: 1,
            },
          
        }    
      });

      
    // Кнопка загрузки
    const $btnDownload = document.getElementById('download'),
    $list = document.querySelector('.header__box');
    
    // Открытие дропдауна
    $btnDownload.addEventListener('click', (event) => {
        $list.classList.add('show');
        event.stopPropagation()
    })

    // Закрытие списка по клику вне его
    document.addEventListener('click', (event) => {
        if (!$list.contains(event.target)) {
            console.log('object');
            $list.classList.remove('show');
        }
    })
    
    
    // Закрытие списка по эскейп
    window.addEventListener('keydown', function (event) {
        
        if (event.key === 'Escape' && $list.classList.contains('show')) {            
            $list.classList.remove('show');
        }
    });    
})