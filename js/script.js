document.getElementById('scroll').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('landing').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('scroll1').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('About-us').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('scroll2').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Our-advantages').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('scroll3').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Galery-of-works').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('scroll4').addEventListener('click', function(event) {
    event.preventDefault()
    console.log('Clicked on scroll element "Why-are-we"');
    document.getElementById('Why-are-we').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('scroll5').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Да-да! такой же код но с "2-"! По другому не знаю как сделать! =(
document.getElementById('2-scroll').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('landing').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('2-scroll1').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('About-us').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('2-scroll2').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Our-advantages').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('2-scroll3').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Galery-of-works').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('2-scroll4').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Why-are-we').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('2-scroll5').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
});





const hamburger = document.getElementById('menu-animation')
const menuHamburger = document.getElementById('menu-click-site')

menuHamburger.addEventListener('click', function() {
    menuHamburger.classList.toggle("menu-hamburger_active")
})


// Мастерская T.I.S.C.H.L.E.R.   [55.1608186, 82.9880505]
// СКРИПТ КАРТЫ 
// api key ea9c6007-3c99-49af-b13f-0d185b14692d

ymaps.ready(init);
function init(){     
    var Map = new ymaps.Map ('Map', {
        center: [55.1608186, 82.9880505],
        zoom: 14,
        type: 'yandex#publicMapHybrid', //указываем тип карты гибрид
        onmousemove: 'click',
    });

    /*СОЗДАЕМ ЭКЗЕМПЛЯР КЛАССА Placemark*/
    var myPlacemark = new ymaps.Placemark([55.1608186, 82.9880505], { 
        iconContent: '', //текст на иконке
        balloonContent: 'ТСН Восход Пашинский, 174' /*текст появляющийся после нажатия*/
        
    }, {
        preset: 'islands#blueIcon'//тип иконки
    });
    
    /*ДОБАВЛЯЕМ СОЗДАННУЮ КНОПКУ НА НАШУ КАРТУ*/
    Map.controls.remove('searchControl')
    Map.controls.remove('geolocationControl')
    Map.behaviors.disable('scrollZoom')
    Map.geoObjects.add(myPlacemark);
}


// Scroll smooth
SmoothScroll({
    animationTime: 800, // Время скролла 800 = 0.8 секунды
    stepSize: 75, // Размер шага в пикселях

    // Дополнительные настройки

    accelerationDelta: 30, // Ускорение
    accelerationMax: 2, // Максимальное ускорение
    keyboardSupport: true, // Поддержка клавиатуры 
    arrowScroll: 50, // Шаг скролла на клавиатуре в пикселях

    touchpadSupport: true // Поддержка тачпада
})

