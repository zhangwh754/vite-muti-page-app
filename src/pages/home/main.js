import $ from 'jquery'

$(() => {
  // const num = 0;

  console.log('init')

  $('button').on('click', _aaa => {
    window.location.href = `../banner/index.html`
  })

  $.ajax('https://v2.api-m.com/api/weibohot').then(res => {
    const list = $('.list')

    JSON.parse(res)
      .data.map(item => ({
        title: item.title,
        hot: item.hot,
        url: item.url,
      }))
      .forEach(item => {
        const listItem = $('<li></li>')
        const link = $('<a></a>').attr('href', item.url).attr('target', '_blank').text(item.title)
        const num = $('<span></span>').text(item.hot)
        listItem.append(link).append(num)
        list.append(listItem)
      })
  })
})
