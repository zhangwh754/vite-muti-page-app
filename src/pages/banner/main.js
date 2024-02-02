import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

$(() => {
  console.log('banner')

  $('button').on('click', () => {
    window.location.href = `../home/index.html`
  })

  new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
})
