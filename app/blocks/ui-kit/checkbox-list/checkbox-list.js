const checkboxList = (elem) => {
  const Item = document.getElementById(elem),
    ItemTitle = Item.querySelector(".checkbox-list__title"),
    ItemBody = Item.querySelector(".checkbox-list__body")

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

export default checkboxList