import './app3.css'
import $ from 'jquery'
const html = `
    <div class="app3">
        <div class="square"></div>
    </div>
`
const $html = $(html)
$html.appendTo($('body>.container'))
const $square = $('.app3 .square')
const active = localStorage.getItem('app3.active')=== 'yes' ? true : false

$square.toggleClass('active',active)
$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem('app3.active','no')
    }else{
        $square.addClass('active')
        localStorage.setItem('app3.active','yes')
    }
})
