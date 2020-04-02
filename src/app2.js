import $ from 'jquery'
import './app2.css'
const $tabBar = $('.app2 .tabBar')
const $inner = $('.app2 .tabContent')
$tabBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)
    $li
        .addClass('select')
        .siblings().removeClass('select')
    const index = $li.index()
    $inner.children().eq(index).addClass('active').siblings().removeClass('active')

})