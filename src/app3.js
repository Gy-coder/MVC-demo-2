import './app3.css'
import $ from 'jquery'
const $square = $('.app3 .square')
const $button = $('.app3 .clearClass')
$square.on('click',()=>{
    console.log(1)
    $square.addClass('active')
})

$button.on('click',()=>{
    $square.removeClass('active')
})