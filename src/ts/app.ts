const firstAmount = document.querySelector('.amount-one') as HTMLInputElement;
const secondAmount = document.querySelector('.amount-two') as HTMLInputElement;
const currencyOne = document.querySelector('.currency-one') as HTMLSelectElement;
const currencyTwo = document.querySelector('.currency-two') as HTMLSelectElement;
const swapBtn = document.querySelector('.swap') as HTMLButtonElement;
const rateInfo = document.querySelector('.rate-info') as HTMLParagraphElement;

const calc = () => {
	const requestURL: string = `https://api.exchangerate.host/latest?base=${currencyOne.value}`;
	fetch(requestURL)
		.then(res => res.json())
		.then(data => {
			const currency1: string = currencyOne.value;
			const currency2: string = currencyTwo.value;

			const exchangeRate: number = data.rates[currency2];

			const secondAmountValue: number = Number(firstAmount.value) * exchangeRate;

			secondAmount.value = secondAmountValue.toFixed(2).toString();
		});
};

const swapCurrencies = () => {
	// const firstAmountValue = firstAmount.value;
	// const secondAmountValue = secondAmount.value;

	// firstAmount.value = secondAmountValue;
	// secondAmount.value = firstAmountValue;

	const currencyOneValue: string = currencyOne.value;
	const currencyTwoValue: string = currencyTwo.value;

	currencyOne.value = currencyTwoValue;
	currencyTwo.value = currencyOneValue;
	calc();
};

firstAmount.addEventListener('keyup', calc);
currencyOne.addEventListener('change', calc);
currencyTwo.addEventListener('change', calc);
swapBtn.addEventListener('click', swapCurrencies);

window.addEventListener('DOMContentLoaded', calc);
