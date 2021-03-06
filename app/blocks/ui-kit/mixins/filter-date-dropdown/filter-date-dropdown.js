const filterDateDropdown = () => {
  const dropdowns = document.querySelectorAll(".filter-date-dropdown")

  if (dropdowns.length > 0) {
    initDropdowns()
  }

  function initDropdowns() {

    for (let index = 0; index < dropdowns.length; index++) {
      const dropdown = dropdowns[index];
      initDropdown(dropdown)
    }

    function initDropdown(dropdown) {
      let Datepicker = $(dropdown),
        date = Datepicker.find("[data-action=date]"),
        myDatepicker = Datepicker.datepicker().data('datepicker')

      Datepicker.find(".datepicker-inline").addClass("datepicker-small")
      Datepicker.find(".datepicker").append("<div class='buttons'></div>")
      Datepicker.find(".buttons").append("<button class='btn btn_text' date-action='apply'>применить</button>").append("<button class='btn btn_text' date-action='clear'>очистить</button>")

      Datepicker.datepicker({
        inline: true,
        range: true,
        minDate: new Date(),
        dateFormat: "dd M",
        multipleDatesSeparator: " - ",
        navTitles: {
          days: 'MM yyyy',
          months: 'yyyy',
          years: 'yyyy1 - yyyy2'
        },
        onSelect: function (fd, d, picker) {
          date.text(fd.toLowerCase())
        }
      })
      date.click(function () {
        Datepicker.find(".datepicker-inline").slideToggle(500)
      })
      $(document).mouseup(function (e) {
        if (!Datepicker.is(e.target) && Datepicker.has(e.target).length === 0) {
          Datepicker.find(".datepicker-inline").slideUp(500)
        }
      })

      let clear = Datepicker.find("[date-action=clear]"),
        apply = Datepicker.find("[date-action=apply]")

      clear.click(function () {
        myDatepicker.clear()
        date.text("Прибытие - Выезд")
      })
      apply.click(function () {
        Datepicker.find(".datepicker-inline").slideUp(500)
      })
    }
  }
}

export default filterDateDropdown