import iconMap from "./images/mapPoint.svg"
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.195878, 50.100202],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemarkMoskoy = new ymaps.Placemark([55.726401, 37.652032], {
            hintContent: '115114, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 (станция метро "Павелецкая")',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        }),
        myPlacemarkVolgograd = new ymaps.Placemark([48.500645, 44.579830], {
            hintContent: 'улица Командира Рудь, 14А, Волгоград, 400080',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        }),
        myPlacemarkSaratov = new ymaps.Placemark([51.586543, 45.966398], {
            hintContent: 'проспект Строителей, 1, Саратов, 410080',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        }),
        myPlacemarkVoronesh = new ymaps.Placemark([51.671439, 39.203270], {
            hintContent: 'улица Комиссаржевской, 10, Воронеж, 394036',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        }),
        myPlacemarkErevan = new ymaps.Placemark([40.219923, 44.570389], {
            hintContent: '1-й микрорайон Аван-Ариндж, 4/2, административный район Аван, Ереван',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        }),
        myPlacemarkNovosib = new ymaps.Placemark([55.023088, 82.975613], {
            hintContent: 'улица Никитина, 116к3, Новосибирск',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        }),
        myPlacemarkKrasnodar = new ymaps.Placemark([45.040884, 38.983003], {
            hintContent: 'улица Митрофана Седина, 176, микрорайон Центральный, Центральный внутригородской округ, Краснодар, 350015',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: iconMap,
            // Размеры метки.
            iconImageSize: [36, 40],
          
        });

    myMap.geoObjects
        .add(myPlacemarkMoskoy)
        .add(myPlacemarkVolgograd)
        .add(myPlacemarkSaratov)
        .add(myPlacemarkVoronesh)
        .add(myPlacemarkErevan)
        .add(myPlacemarkNovosib)
        .add(myPlacemarkKrasnodar);
});

