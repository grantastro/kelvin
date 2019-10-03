let today = new Date();

let currentMonth = [];
currentMonth[0] = 'January';
currentMonth[1] = 'Feburary';
currentMonth[2] = 'March';
currentMonth[3] = 'April';
currentMonth[4] = 'May';
currentMonth[5] = 'June';
currentMonth[6] = 'July';
currentMonth[7] = 'August';
currentMonth[8] = 'September';
currentMonth[9] = 'October';
currentMonth[10] = 'November';
currentMonth[11] = 'December';


let month = today.getMonth();


let date = today.getDate() + ' ' + currentMonth[month] + ', ' + today.getFullYear()

document.getElementsByClassName('date')[0].textContent = date;

document.getElementById('main-unit').addEventListener('keyup', () => {

	let main = document.querySelector('.main-unit-options');
	let second = document.querySelector('.second-unit-options');

	let mainUnit = main.options[main.selectedIndex].textContent.toLowerCase();

	let secondUnit = second.options[second.selectedIndex].textContent.toLowerCase();

	let numberTyped = document.getElementById('main-unit').value

	numberTyped = parseInt(numberTyped);

	if (mainUnit === 'celsius') {
		if (secondUnit === 'kelvin') {
			document.getElementById('second-unit').value = numberTyped + 273.15;
		} else if (secondUnit === 'farenheight') {
			document.getElementById('second-unit').value =
				(numberTyped * 9 / 5) + 32;
		} else(
			document.getElementById('second-unit').value = numberTyped
		)
	} else if (mainUnit === 'kelvin') {
		if (secondUnit === 'celsius') {
			document.getElementById('second-unit').value = numberTyped - 273.15
		} else if (secondUnit === 'farenheight') {
			document.getElementById('second-unit').value = (numberTyped - 32) * 5 / 9 + 273.15;
		} else {
			document.getElementById('second-unit').value = numberTyped;
		}
	}

	Array.from(document.querySelectorAll('.reset')).forEach(select => {
		select.addEventListener('change', () => {
			document.getElementById('main-unit').value = '';
			document.getElementById('second-unit').value = '';
		})
	})

});