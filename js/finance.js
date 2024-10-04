document.addEventListener('DOMContentLoaded', function () {
    // Способы оплаты
    const $financePayment = document.getElementById('finance-payment');
    const choicesfinancePayment = new Choices($financePayment, {
        searchEnabled: false,
        allowHTML: true
    });

    // Смена секций Транзакции и Отчеты
    const $itemAll = document.querySelectorAll('.profile__item'),
    $sectionAll = document.querySelectorAll('.finance__inner');
    let activeSection = 'trans';

    document.querySelector(`.profile__item[data-content=${activeSection}]`).classList.add('active');
document.querySelector(`.finance__inner[data-content=${activeSection}]`).classList.remove('hidden');

    $itemAll.forEach(item => {   

        item.addEventListener('click', (event) => {
            const activeItem = event.target;
            activeSection = activeItem.dataset.content  

            $itemAll.forEach(el => el.classList.remove('active'));

            activeItem.classList.add('active');

            $sectionAll.forEach((sectiion => {
                if (sectiion.dataset.content === activeSection) {
                    sectiion.classList.remove('hidden')
                } else {
                    sectiion.classList.add('hidden')
                }
            }))
        })
    })
})