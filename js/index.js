const hasla = [
	'bez pracy, nie ma kołaczy',
	'baba o szydle, dziad o mydle',
	'dla chcącego, nic trudnego',
	'chytry dwa razy traci',
	'ciągnie swój do swego',
	'cicha woda brzegi rwie',
	'elektryka prąd nie tyka',
	'do trzech razy sztuka',
	'cudza praca nie wzbogaca',
	'ćwiczenie czyni mistrza',
	'czas leczy rany',
	'czas to pieniądz',
	'cel uświęca środki',
	'chcieć to móc',
	'chleb i woda, nie ma głoda',
	'Apetyt rośnie w miarę jedzenia',
	'Co dwie głowy, to nie jedna',
	'Co nas nie zabije, to nas wzmocni',
	'Czuć się jak ryba w wodzie',
	'Do wesela się zagoi',
	'Darowanemu koniowi nie patrzy się w zęby',
	'płachta na byka',
	'Dzielić skórę na niedźwiedziu',
	'Figa z makiem',
	'Francuski piesek',
	'Gdyby kózka nie skakała, toby nóżki nie złamała',
	'Grać komuś na nerwach',
	'I wilk syty, i owca cała',
	'Lepiej późno niż wcale',
	'Oko za oko, ząb za ząb',
]

// console.log(hasla.length)

const getRandomInt = () => {
	return Math.floor(Math.random() * hasla.length)
}

let haslo = hasla[getRandomInt()]
haslo = haslo.toUpperCase()

let dlugosc = haslo.length
let ile_skuch = 0

let yes = new Audio('./music/yes.wav')
let no = new Audio('./music/no.wav')

let haslo1 = ''

for (let i = 0; i < dlugosc; i++) {
	if (haslo.charAt(i) == ' ') {
		haslo1 = haslo1 + ' '
	} else if (haslo.charAt(i) == ',') {
		haslo1 = haslo1 + ','
	} else {
		haslo1 = haslo1 + '_'
	}
}

const wypisz_haslo = () => {
	plansza.innerHTML = haslo1
}

let litery = [
	'A',
	'Ą',
	'B',
	'C',
	'Ć',
	'D',
	'E',
	'Ę',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'Ł',
	'M',
	'N',
	'Ń',
	'O',
	'Ó',
	'P',
	'Q',
	'R',
	'S',
	'Ś',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'Ż',
	'Ź',
]

const start = () => {
	let tresc_diva = ''
	for (let i = 0; i <= 34; i++) {
		tresc_diva = tresc_diva + `<div class="litera" id="l${i}" onclick="sprawdz(${i})">${litery[i]}</div>`
		if (i == 6) {
			tresc_diva
		}
	}

	alfabet.innerHTML = tresc_diva

	wypisz_haslo()
}

String.prototype.ustawZnak = function (miejsce, znak) {
	if (miejsce > this.length - 1) {
		return this.toString()
	} else {
		return this.substr(0, miejsce) + znak + this.substr(miejsce + 1)
	}
}

const sprawdz = nr => {
	let trafiona = false

	for (let i = 0; i < dlugosc; i++) {
		if (haslo.charAt(i) == litery[nr]) {
			haslo1 = haslo1.ustawZnak(i, litery[nr])
			trafiona = true
		}
	}

	let element = `l${nr}`

	if (trafiona == true) {
		// yes.play()
		document.getElementById(element).classList.add('trafiona')
		wypisz_haslo()
	} else {
		// no.play()
		document.getElementById(element).classList.add('pudlo')
		ile_skuch++
		szubiennica.innerHTML = `<img src="./img/s${ile_skuch}.jpg" alt="">`
	}

	if (ile_skuch == 9) {
		alfabet.innerHTML = `<p class="haslo">PRZEGRANA. Prawidłowe hasło to: <br /> <span>${haslo}</span></p> <p class="reset lose" id="reset" onclick="location.reload()">JESZCZE RAZ</p>`
		alfabet.style.flexDirection = 'column'
	}

	if (haslo == haslo1) {
		alfabet.innerHTML = `<p class="haslo">WYGRANA! Podano prawidłowe hasło: <br /> <span>${haslo}</span></p> <p class="reset" id="reset" onclick="location.reload()">JESZCZE RAZ</p>`
		alfabet.style.flexDirection = 'column'
	}
}

window.onload = start
