const yearUser = prompt("Ваш рік народження:", "");
const cityUser = prompt("Ваше місто проживання:", "");
const sportUser = prompt("Ваш улюблений вид спорту:", "Введіть: Футбол, Теніс чи Бокс");

const getAgeUser = (age) => {
	if(age === null) {
		return "Шкода, що Ви не захотіли ввести свій рік"
	} else if(age <= 0) {
		return 'Ви ввели некоректний рік'
	} else if (age > 0){
		return `Ваш вік: ${2023 - age}`
	}
};

const getCityUser = (city) => {
	switch(city) {
		case 'Київ':{
			return "Ти живеш у столиці України";
	}
		case 'Лондон': {
			return "Ти живеш у столиці Англії";
	}
		case 'Вашингтон': {
			return "Ти живеш у столиці Америки";
	}
		case null: {
			return "Шкода, що Ви не захотіли ввести своє рідне місто";
	}
		case '': {
			return "Ви не вказали місто";
	}
	default: {
		return `Ти живеш у місті ${city}`;
	}
	};
};

const getSportUser = (sport) => {
	switch (sport) {
		case 'Бокс': {
			return "Круто! Хочеш стати Олександром Усиком?";
		}
		case 'Теніс': {
			return "Круто! Хочеш стати Новаком Джоковичем?";
		}
		case 'Футбол': {
			return "Круто! Хочеш стати Лео Мессі?";
		}
		case null: {
			return "Шкода, що Ви не захотіли ввести свій улюблений вид спорту";
		}
		case '': {
			return '';
		}
		default:
			return 'Ви не вказали спорт';
	};
};

alert(`${getAgeUser(yearUser)}` + '\r\n' + `${getCityUser(cityUser)}` + '\r\n' + `${getSportUser(sportUser)}`);