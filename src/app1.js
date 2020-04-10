import $ from 'jquery'
import './app1.css'
//数据相关的都放到m
const eventBus = $(window)
console.log(eventBus);
const m = {
    data:{
        n : parseInt(localStorage.getItem('n')) || 100
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n',m.data.n)
    },
    get(){}
};
//视图相关的都放到v
const v = {
    el: null,
    html : `
    <div>
        <p>
            <span class="num">{{n}}</span>
        </p>
        <button class="add">+1</button>
        <button class="subtract">-1</button>
        <button class="multiply">*2</button>
        <button class="divide">/2</button>
    </div>
`,
    init(container){
        v.el = $(container);
    },
    render(n){
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html.replace('{{n}}',m.data.n))
            .appendTo(v.el)
    },
};
//其余的都放到c
const c = {
    init(container,n){
        v.init(container,n);
        v.render(m.data.n)      //view == render(data)
        c.autoBindEvent()
        eventBus.on('m:updated', () => {
            console.log('here')
            v.render(m.data.n)
        })
    },
    event:{
        'click .add':'add',
        'click .subtract':'subtract',
        'click .multiply':'multiply',
        'click .divide' : 'divide'
    },
    add(){
        m.update({n:m.data.n+1})
    },
    subtract(){
        m.update({n:m.data.n-1})
    },
    multiply(){
        m.update({n:m.data.n*2})
    },
    divide(){
        m.update({n:m.data.n/2})
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
// 初始化HTML

export default c
//初始化数据
//将数据渲染到页面
//绑定鼠标事件
