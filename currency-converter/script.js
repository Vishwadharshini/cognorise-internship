function convert() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from').value;
  const toCurrency = document.getElementById('to').value;

  const result = (amount * toCurrency / fromCurrency).toFixed(2);
  
  document.getElementById('result').innerText = `${amount} ${document.getElementById('from').options[document.getElementById('from').selectedIndex].text} = ${result} ${document.getElementById('to').options[document.getElementById('to').selectedIndex].text}`;
}























/*function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Error fetching exchange rate:', error);
        document.getElementById('result').innerText = 'Error fetching data';
      });
  }/*
  
  

















/*function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    let rate;

    switch (currency) {
        case 'EUR':
            rate = 0.85;
            break;
        case 'GBP':
            rate = 0.75;
            break;
        case 'JPY':
            rate = 110.21;
            break;
        default:
            rate = 1;
            break;
    }

    const result = amount * rate;
    document.getElementById('result').innerText = `${amount} USD is equal to ${result.toFixed(2)} ${currency}`;
}*/
