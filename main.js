let DOB = prompt("Введите вашу дату рождения", "ДД.ММ.ГГГГ");
let city = prompt("В каком городе вы живёте?", "Киев");
let sport = prompt("Какой ваш любимый вид спорта?", "Бокс");
let age

if (DOB !== null) {
	age = 2023 - DOB.slice(6, 10);
}

let cityString = () => {
	if (city === 'Киев') {
		return 'Вы живёте в столице Украины';
	} else if (city === 'Вашингтон') {
		return 'Вы живёте в столице США';
	} else if (city === 'Лондон') {
		return 'Вы живёте в столице Англии';
	} else {
		return 'Вы живёте в городе ' + city;
	}
}

let sportString = () => {
	if (sport === 'Бокс') {
		return 'Круто! Хочешь стать Майком Тайсоном?';
	} else if (sport === 'Футбол') {
		return 'Круто! Хочешь стать Роналду?';
	} else if (sport === 'Баскетбол') {
		return 'Круто! Хочешь стать Леброном Джеймсом?';
	} else {
		return "Ваш любимый вид спорта: " + sport;
	}
}


if (DOB == null) {
	alert("Шкода, що Ви не захотіли ввести свій(ю) вік");
} else if (city === null) {
	alert("Шкода, що Ви не захотіли ввести своє місто");
} else if (sport === null) {
	alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
} else {
	alert(
		"Ваша возраст: " + age + "\n" +
		cityString() + "\n" +
		sportString()
	)
}

