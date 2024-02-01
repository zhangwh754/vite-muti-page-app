import $ from 'jquery'

$(() => {
  // const num = 0;

  console.log('init')

  $('button').on('click', aaa => {
    window.location.href = `/banner/index.html`
  })
})
