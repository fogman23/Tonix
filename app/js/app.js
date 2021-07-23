// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
import dropdown from '../blocks/ui-kit/dropdown/dropdown'
import rangeSlider from '../blocks/ui-kit/range-slider/range-slider'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	rangeSlider()
	dropdown()

})
