import Swiper from 'swiper'
import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

const room = () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true
    },
  })
}

export default room