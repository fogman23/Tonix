// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
require('./libs/air-datepicker/js/datepicker')
import dropdown from '../blocks/ui-kit/dropdown/dropdown'
import dateDropdown from '../blocks/ui-kit/date-dropdown/date-dropdown'
import rangeSlider from '../blocks/ui-kit/range-slider/range-slider'
import checkboxList from '../blocks/ui-kit/checkbox-list/checkbox-list'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	rangeSlider()

	dropdown("people-1", "people")
	dropdown("people-2", "people")
	dropdown("people-3", "people")
	dropdown("rooms-1")

	checkboxList()

	dateDropdown()

})
