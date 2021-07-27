const dateDropdown = () => {
  $("#start").datepicker({
    inline: false,
    range: true,
    clearButton: true,
    navTitles: {
      days: 'MM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    onSelect: function (fd, d, picker) { 
      $("#start").val(fd.split(",")[0]);
      $("#end").val(fd.split(",")[1]);
    }
  })
  let myDatepicker = $("#start").datepicker().data('datepicker')
  $("#end").click(function() {
    myDatepicker.show()
  })
}

export default dateDropdown