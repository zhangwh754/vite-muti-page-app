import $ from 'jquery'

$(() => {
  console.log('banner')

  $('button').on('click', () => {
    window.location.href = `../home/index.html`
  })
})
