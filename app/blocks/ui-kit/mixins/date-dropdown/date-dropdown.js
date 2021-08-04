const dateDropdown = () => {
  const dropdowns = document.querySelectorAll(".date-dropdown")

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
        start = Datepicker.find("[data-action=start]"),
        end = Datepicker.find("[data-action=end]"),
        myDatepicker = Datepicker.datepicker().data('datepicker')

      Datepicker.find(".datepicker").append("<div class='buttons'></div>")
      Datepicker.find(".buttons").append("<button class='btn btn_text' date-action='apply'>применить</button>").append("<button class='btn btn_text' date-action='clear'>очистить</button>")

      Datepicker.datepicker({
        inline: true,
        range: true,
        minDate: new Date(),
        navTitles: {
          days: 'MM yyyy',
          months: 'yyyy',
          years: 'yyyy1 - yyyy2'
        },
        onSelect: function (fd, d, picker) {
          start.text(fd.split(",")[0])
          end.text(fd.split(",")[1])
        }
      })
      start.click(function () {
        Datepicker.find(".datepicker-inline").slideDown(400)
      })
      end.click(function () {
        Datepicker.find(".datepicker-inline").slideDown(400)
      })
      $(document).mouseup(function (e) {
        if (!Datepicker.is(e.target) && Datepicker.has(e.target).length === 0) {
          Datepicker.find(".datepicker-inline").slideUp(400)
        }
      })

      let clear = Datepicker.find("[date-action=clear]"),
        apply = Datepicker.find("[date-action=apply]")

      clear.click(function () {
        myDatepicker.clear()
        start.text("ДД.ММ.ГГГГ")
        end.text("ДД.ММ.ГГГГ")
      })
      apply.click(function () {
        Datepicker.find(".datepicker-inline").slideUp(400)
      })
    }
  }
}

export default dateDropdown