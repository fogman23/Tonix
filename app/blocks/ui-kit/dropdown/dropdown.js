const dropdown = () => {
  const dropdownSelect = document.querySelector(".dropdown__select")
  const dropdownBody = document.querySelector(".dropdown__body")
  const dropdownItem = document.querySelectorAll(".dropdown__item")
  const dropdownItemCount = document.querySelectorAll(".dropdown__item-count")
  const dropdownItemBtnPlus = document.querySelectorAll(".btn-plus")
  const dropdownItemBtnMinus = document.querySelectorAll(".btn-minus")
  const dropdownClear = document.querySelector("#clear")
  const dropdownApply = document.querySelector("#apply")

  let sum = 0

  dropdownSelect.addEventListener("click", () => {
    dropdownBody.classList.toggle("active")
    dropdownSelect.classList.toggle("active")
    summa()
  })
  dropdownItemBtnPlus.forEach((item, i) => {
    item.addEventListener("click", () => {
      dropdownItemCount[i].innerHTML++
      summa()
    })
  })
  dropdownItemBtnMinus.forEach((item, i) => {
    item.addEventListener("click", () => {
      dropdownItemCount[i].innerHTML--
      summa()
    })
  })

  function summa() {
    sum = 0
    dropdownItemCount.forEach((item, i) => {
      if (Number(item.innerText) == 0) {
        dropdownItemBtnMinus[i].disabled = true
      } else {
        dropdownItemBtnMinus[i].removeAttribute('disabled')
      }
      sum += Number(item.innerText)
    })
    
    if (sum == 0) {
      dropdownClear.style.display = "none"
      dropdownSelect.innerHTML = "сколько гостей"
    } else {
      dropdownSelect.innerHTML = sum + " гостей"
      dropdownClear.style.display = "block"
    }
  }

  dropdownClear.addEventListener("click", () => {
    dropdownItemCount.forEach(item => item.innerText = 0)
    summa()
    dropdownClear.style.display = "none"
  })
}

export default dropdown