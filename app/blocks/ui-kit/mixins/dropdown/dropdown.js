const dropdown = () => {
  const dropdowns = document.querySelectorAll(".dropdown")

  if (dropdowns.length > 0) {
    initDropdowns()
  }

  function initDropdowns() {

    for (let index = 0; index < dropdowns.length; index++) {
      const dropdown = dropdowns[index]
      initDropdown(dropdown)
    }

    function initDropdown(dropdown) {
      const dropdownSelect = dropdown.querySelector(".dropdown__select")
      const dropdownBody = dropdown.querySelector(".dropdown__body")
      const dropdownItem = dropdown.querySelectorAll(".dropdown__item")
      const dropdownItemCount = dropdown.querySelectorAll(".dropdown__item-count")
      const dropdownItemBtnPlus = dropdown.querySelectorAll(".btn-plus")
      const dropdownItemBtnMinus = dropdown.querySelectorAll(".btn-minus")
      const dropdownClear = dropdown.querySelector(".dropdown__buttons > button:last-child")
      const dropdownApply = dropdown.querySelector(".dropdown__buttons > button:first-child")

      dropdownSelect.addEventListener("click", () => {
        toggle()
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

      if (dropdownClear) {
        dropdownClear.addEventListener("click", () => {
          dropdownItemCount.forEach(item => item.innerText = 0)
          summa()
          dropdownClear.style.display = "none"
        })
      }

      if (dropdownApply) {
        dropdownApply.addEventListener('click', () => {
          toggle()
        })
      }

      document.addEventListener('click', function (e) {
        const target = e.target
        const its_body = target == dropdownBody || dropdownBody.contains(target)
        const its_select = target == dropdownSelect
        const is_active = dropdownSelect.classList.contains('active')
    
        if (!its_body && !its_select && is_active) {
          toggle()
        }
      })

      function summa() {

        let sum = 0
        let people = 0
        let baby = 0

        dropdownItemCount.forEach((item, i) => {
          if (Number(item.innerText) == 0) {
            dropdownItemBtnMinus[i].disabled = true
          } else {
            dropdownItemBtnMinus[i].removeAttribute('disabled')
          }
          sum += Number(item.innerText)
          if (dropdownSelect.parentNode.classList.contains("dropdown-people") && i == 2) {
            people = sum - item.innerText
            baby = sum - people
          }
        })

        if (dropdownSelect.parentNode.classList.contains("dropdown-people")) {
          if (sum == 0) {
            dropdownClear.style.display = "none"
            dropdownSelect.innerHTML = "сколько гостей"
          } else {
            dropdownSelect.innerHTML = people + " " + num_word(people, ['гость', 'гостя', 'гостей'])
            dropdownSelect.innerHTML += baby == 0 ? "" : ", " + baby + " " + num_word(baby, ['младенец', 'младенца', 'младенцев'])
            dropdownClear.style.display = "block"
          }
        } else {
          if (sum == 0) {
            dropdownSelect.innerHTML = "выберите кол-во комнат"
          } else {
            dropdownSelect.innerHTML = dropdownItemCount[0].innerHTML + " " + num_word(dropdownItemCount[0].innerHTML, ['спальня', 'спальни', 'спальней']) + ", " + dropdownItemCount[1].innerHTML + " " + num_word(dropdownItemCount[1].innerHTML, ['кровать', 'кровати', 'кроватей']) + ", " + dropdownItemCount[2].innerHTML + " " + num_word(dropdownItemCount[2].innerHTML, ['ванная комната', 'ванные комнаты', 'ванных комнат'])
          }
        }
      }
  
      function num_word(value, words) {
        value = Math.abs(value) % 100
        let num = value % 10;
        if (value > 10 && value < 20) return words[2]
        if (num > 1 && num < 5) return words[1]
        if (num == 1) return words[0]
        return words[2]
      }
  
      function toggle() {
        dropdownBody.classList.toggle("active")
        dropdownSelect.classList.toggle("active")
      }
    }
  }
}

export default dropdown