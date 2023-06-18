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
	'Chwytać za pióro',
	'Chwytać kogoś za słowa',
	'Ciągnąć kogoś za język',
	'Fortuna kołem się toczy',
	'Hulaj dusza, piekła nie ma',
	'I w Paryżu nie zrobią z owsa ryżu',
	'Im kot starszy, tym ogon twardszy',
	'Indyk myślał o niedzieli, a w sobotę łeb mu ścięli',
	'Jedna jaskółka wiosny nie czyni',
	'Kto nie ma w głowie, ten ma w nogach',
	'Kto pod kim dołki kopie, ten sam w nie wpada',
	'Kto pyta, nie błądzi',
	'Kaszka z mlekiem',
	'Krakowskim targiem',
	'Ktoś ma głowę na karku',
	'Ktoś nie daje sobie w kaszę dmuchać',
	'Lepszy wróbel w garści niż gołąb na dachu',
	'Lepszy rydz niż nic',
	'Lepiej późno niż wcale',
	'Na układy nie ma rady',
	'Raz na wozie raz pod wozem',
	'Słuchać uchem, a nie brzuchem',
	'Szukać igły w stogu siana',
	'Ten się śmieje, kto się śmieje ostatni',
	'Tak krawiec kraje, jak mu materii staje',
	'Tonący brzytwy się chwyta',
	'Trafiła kosa na kamień',
	'Trafiło się ślepej kurze ziarno',
	'Twardy orzech do zgryzienia',
	'Uderz w stół, a nożyce się odezwą',
	'Upiec dwie pieczenie na jednym ogniu',
	'W przyrodzie nic nie ginie',
	'Włos komuś z głowy nie spadnie',
	'Wyłożyć kawę na ławę',
	'Wypływać na szerokie wody',
	'Z tej mąki chleba nie będzie',
	'Żyć nie umierać',
	'Żyć jak pies z kotem',
]

console.log(hasla.length)

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
	handleStart()
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
		alfabet.innerHTML = `<p class="haslo">PRZEGRANA. Prawidłowe hasło to: <br /> <span>${haslo}</span></p> <p class="reset lose" id="reset" onclick="location.reload()">JESZCZE RAZ</p> <div class="time" id="time"></div>`
		alfabet.style.flexDirection = 'column'
		handleStop()
	}

	if (haslo == haslo1) {
		alfabet.innerHTML = `<p class="haslo">WYGRANA! Podano prawidłowe hasło: <br /> <span>${haslo}</span></p> <p class="reset" id="reset" onclick="location.reload()">JESZCZE RAZ</p> <div class="time" id="time"></div>`
		alfabet.style.flexDirection = 'column'
		handleStop()
	}
}

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handleStop = () => {
	time.innerHTML = `Twój czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		// timesArr.push(stopwatch.textContent);
	}

	// clearStuff();
};

window.onload = start
