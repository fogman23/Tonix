import noUiSlider from 'nouislider'
import wNumb from 'wnumb'

const rangeSlider = () => {
  const Slider = document.querySelector('.range-slider__input')
	const SliderValueElement = document.querySelector('.range-slider__value')

	if (Slider) {
		noUiSlider.create(Slider, {
			start: [5000, 10000],
			step: 100,
			connect: true,
			range: {
				'min': 0,
				'max': 15000
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				suffix: '₽'
			})
		})
	
		Slider.noUiSlider.on('update', function (values) {
				SliderValueElement.innerHTML = values.join(' - ')
		})
	}
}

export default rangeSlider