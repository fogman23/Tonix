const buttons = () => {
  const btns = document.querySelectorAll(".btn")

  if (btns.length > 0) {
    initBtns()
  }

  function initBtns() {
    
    for (let index = 0; index < btns.length; index++) {
      const btn = btns[index]
      initBtn(btn)
    }

    function initBtn(btn) {
      if (btn.classList.contains('btn_filter')) {
        const sidebar = document.querySelector(".search-room-page__sidebar")

        btn.addEventListener('click', () => {
          sidebar.classList.toggle("active")
          if (sidebar.classList.contains("active")) {
            document.body.style.overflow = "hidden"
          } else {
            document.body.style.overflow = "auto"
          }
        })
      }
    }
  }
}

export default buttons