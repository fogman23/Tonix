const rate = () => {
  const rates = document.querySelectorAll('.rate')

  if (rates.length > 0) {
    initRates()
  }

  function initRates() {
    let rateActive, rateValue

    for (let index = 0; index < rates.length; index++) {
      const rate = rates[index]
      initRate(rate)
    }

    function initRate(rate) {
      initRateVars(rate)
      setRateActiveWidth()
    }

    function initRateVars(rate) {
      rateActive = rate.querySelector('.rate__active')
      rateValue = rate.querySelector('.rate__value')
    }

    function setRateActiveWidth(index = rateValue.innerHTML) {
      const rateActiveWidth = index / 0.05
      rateActive.style.width = `${rateActiveWidth}%`
    }
  }
}

export default rate