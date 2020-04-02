import $ from 'jquery'
import './app1.css'
const $num = $('.num')
const $button1 = $('.add')
const $button2 = $('.subtract')
const $button3 = $('.multiply')
const $button4 = $('.divide')
const n = localStorage.getItem('n')
$num.text(n || 1)
$button1.on('click',()=>{
    let n = parseInt($num.text())
    n+=1
    localStorage.setItem('n',n)
    $num.text(n)
})
$button2.on('click',()=>{
    let n = parseInt($num.text())
    n-=1
    localStorage.setItem('n',n)
    $num.text(n)
})

$button3.on('click',()=>{
    let n = parseInt($num.text())
    n*=2
    localStorage.setItem('n',n)
    $num.text(n)
})

$button4.on('click',()=>{
    let n = parseInt($num.text())
    n/=2
    localStorage.setItem('n',n)
    $num.text(n)
})
