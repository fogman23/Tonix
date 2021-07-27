const checkboxList = () => {
  const Item = document.querySelectorAll(".checkbox-list__title")
  const ItemBody = document.querySelector(".checkbox-list__body")

  Item.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle("active")
    ItemBody.classList.toggle("active")
  }))
}

export default checkboxList