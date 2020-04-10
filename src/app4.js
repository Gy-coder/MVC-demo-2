import './app4.css'
import $ from 'jquery'
const html = `
     <div class="app4">
        <div class="circle"></div>
     </div>
`
const $html = $(html)
$html.appendTo($('body>.container'))
const $circle  = $('.circle')
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
})
$circle.on('mouseleave',()=>{
    $circle.removeClass('active')
})