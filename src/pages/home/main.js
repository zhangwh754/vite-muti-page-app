import $ from 'jquery'

$(() => {
  // const num = 0;

  console.log('init')

  $('button').on('click', _aaa => {
    window.location.href = `/banner/index.html`
  })
})
