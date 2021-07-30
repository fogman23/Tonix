// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

require('./libs/air-datepicker/js/datepicker')
require('./libs/jquery.maskedinput/jquery.maskedinput.min')
import hamburger from '../blocks/ui-kit/hamburger/hamburger'
import dropdown from '../blocks/ui-kit/dropdown/dropdown'
import dateDropdown from '../blocks/ui-kit/date-dropdown/date-dropdown'
import filterDateDropdown from '../blocks/ui-kit/filter-date-dropdown/filter-date-dropdown'
import rangeSlider from '../blocks/ui-kit/range-slider/range-slider'
import checkboxList from '../blocks/ui-kit/checkbox-list/checkbox-list'
import rate from '../blocks/ui-kit/rate/rate'
import room from '../blocks/ui-kit/room/room'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	hamburger()
	
	rangeSlider()

	dropdown("people-1", "people")
	dropdown("people-2", "people")
	dropdown("people-3", "people")
	dropdown("rooms-1")

	checkboxList("checkbox-list-1")

	dateDropdown("#date-dropdown-1")
	dateDropdown("#date-dropdown-2")
	dateDropdown("#date-dropdown-3")

	filterDateDropdown("#filter-date-dropdown-1")

	rate()

	room()

})
