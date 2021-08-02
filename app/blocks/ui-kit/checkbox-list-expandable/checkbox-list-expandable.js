const checkboxListExpandable = () => {
  const checkboxLists = document.querySelectorAll('.checkbox-list-expandable')

  if (checkboxLists.length > 0) {
    initCheckboxLists()
  }

  function initCheckboxLists() {

    for (let index = 0; index < checkboxLists.length; index++) {
      const checkboxList = checkboxLists[index];
      initCheckboxList(checkboxList)
    }

    function initCheckboxList(checkboxList) {
      const ItemTitle = checkboxList.querySelector(".checkbox-list-expandable__title"),
        ItemBody = checkboxList.querySelector(".checkbox-list-expandable__body")

      function toggle() {
        ItemTitle.classList.toggle("active")
        ItemBody.classList.toggle("active")
      }

      ItemTitle.addEventListener('click', () => {
        toggle()
      })

      document.addEventListener('click', function (e) {
        const target = e.target,
          its_body = target == ItemBody || ItemBody.contains(target),
          its_title = target == ItemTitle,
          is_active = ItemTitle.classList.contains('active')

        if (!its_body && !its_title && is_active) {
          toggle()
        }
      })
    }
  }
}

export default checkboxListExpandable