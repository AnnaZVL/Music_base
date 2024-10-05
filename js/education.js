    // Поставить звезду
    const $btnStarAll = document.querySelectorAll('.education-card__btn')

    $btnStarAll.forEach(star => {
        star.addEventListener('click', () => {            
            star.classList.toggle('active')
        })
    })