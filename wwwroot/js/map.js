// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init)

function init() {
	// Создание карты.
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчнию: «широта, долгота».
		center: [55.76, 37.64],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 10,
		// Элементы управления
		// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
		controls: [

			'zoomControl', // Ползунок масштаба
			'rulerControl', // Линейка
			'routeButtonControl', // Панель маршрутизации
			'trafficControl', // Пробки
			'typeSelector', // Переключатель слоев карты
			'fullscreenControl', // Полноэкранный режим

			// Поисковая строка
			new ymaps.control.SearchControl({
				options: {
					// вид - поисковая строка
					size: 'large',
					// Включим возможность искать не только топонимы, но и организации.
					provider: 'yandex#search'
				}
			})

		]
	})

	// Добавление метки
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
	var myPlacemark = new ymaps.Placemark([55.682651, 37.661922], {
		// Хинт показывается при наведении мышкой на иконку метки.
		hintContent: 'пр. Андропова, 22',
		// Балун откроется при клике по метке.
		balloonContent: 'Москва, пр. Андропова, 22 Бизнес-Центр “Нагатинский”'
	})

	var myPlacemark2 = new ymaps.Placemark([55.694363, 37.674588], {
		// Хинт показывается при наведении мышкой на иконку метки.
		hintContent: 'пр. Андропова, 1',
		// Балун откроется при клике по метке.
		balloonContent: 'Москва, пр. Андропова, 1 “Остров Мечты”'
	})

	var myPlacemark3 = new ymaps.Placemark([55.703312, 37.668938], {
		// Хинт показывается при наведении мышкой на иконку метки.
		hintContent: 'ул. Трофимова, 11',
		// Балун откроется при клике по метке.
		balloonContent: 'Москва, ул. Трофимова, 11'
	})
	// После того как метка была создана, добавляем её на карту.
	myMap.geoObjects.add(myPlacemark)
	myMap.geoObjects.add(myPlacemark2)
	myMap.geoObjects.add(myPlacemark3)
}