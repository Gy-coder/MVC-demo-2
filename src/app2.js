import $ from 'jquery'
import './app2.css'
const eventBus = $(window)
const localKey = 'app2.index'
const m = {
    data:{
        index : parseInt(localStorage.getItem(localKey)) || 0
},
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)
        eventBus.trigger('m:updated')
        localStorage.setItem('app2.index',m.data.index)
    },
    get(){}
};
const v = {
    el: null,
    html :(index)=>{
        return `
            <div>
                <ul class="tabBar">
                    <li class="${index===0?'selected':''}" data-index='0'>显示1</li>
                    <li class="${index===1?'selected':''}" data-index='1'>显示2</li>
                </ul>
                <div class="tabContent">
                    <div class="${index===0?'active':''}">内容1</div>
                    <div class="${index===1?'active':''}">内容2</div>
                </div>
            </div>
`},
    init(container){
        v.el = $(container);
    },
    render(index){
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html(index))
            .appendTo(v.el)
    },
};

const c = {
    init(container,n){
        v.init(container,n);
        v.render(m.data.index)      //view == render(data)
        c.autoBindEvent()
        eventBus.on('m:updated', () => {
            v.render(m.data.index)
        })
    },
    event:{
        'click .tabBar > li':'x',
    },
    x(e){
        const index = parseInt(e.currentTarget.dataset.index)
        m.update({index:index})
    },
    autoBindEvent(){
        for(let key in c.event){
            const value = c[c.event[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0,spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            v.el.on(part1, part2, value)
        }
    }

};
// const html = `
// `
// const $html = $(html)
// $html.appendTo($('body>.container'))
// const $tabBar = $('.app2 .tabBar');
// const $inner = $('.app2 .tabContent');
// $tabBar.on('click','li',(e)=>{
//     const $li = $(e.currentTarget);
//     $li
//         .addClass('select')
//         .siblings().removeClass('select');
//     const index = $li.index();
//     localStorage.setItem('app2.index',index);
//     $inner
//         .children()
//         .eq(index)
//         .addClass('active')
//         .siblings()
//         .removeClass('active')
// });
// $tabBar.children().eq(index).trigger('click');


export default c