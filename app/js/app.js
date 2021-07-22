// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
import { ionRangeSlider } from 'ion-rangeslider'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$("#rangePrice").ionRangeSlider({
		type: "double",
		min: 0,
		max: 15000,
		from: 5000,
		to: 10000,
		grid: false,
		postfix: '₽',
		decorate_both: true
	})

})
