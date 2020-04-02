import './app4.css'
import $ from 'jquery'
const $circle  = $('.circle')
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
})
$circle.on('mouseleave',()=>{
    $circle.removeClass('active')
})