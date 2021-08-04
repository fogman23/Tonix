// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

require('./libs/air-datepicker/js/datepicker')
require('./libs/jquery.maskedinput/jquery.maskedinput.min')
import hamburger from '../blocks/ui-kit/hamburger/hamburger'
import dropdown from '../blocks/ui-kit/mixins/dropdown/dropdown'
import dateDropdown from '../blocks/ui-kit/mixins/date-dropdown/date-dropdown'
import filterDateDropdown from '../blocks/ui-kit/mixins/filter-date-dropdown/filter-date-dropdown'
import rangeSlider from '../blocks/ui-kit/mixins/range-slider/range-slider'
import checkboxListExpandable from '../blocks/ui-kit/mixins/checkbox-list-expandable/checkbox-list-expandable'
import rate from '../blocks/ui-kit/mixins/rate/rate'
import room from '../blocks/ui-kit/mixins/room/room'
import buttons from '../blocks/ui-kit/mixins/buttons/buttons'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	hamburger()
	rangeSlider()
	dropdown()
	dateDropdown()
	filterDateDropdown()
	rate()
	room()
	checkboxListExpandable()
	buttons()

})