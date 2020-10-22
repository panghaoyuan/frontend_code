/*
假如有这样的HML内联文本
<div id="content">
    My name is {name}, I love {language}.
<div/>
通过一个方法绑定对象后,可以通过数据改变更新HTML的内联文本
const obj = {
    name: 'Lilei',
    language: 'JaveScript',
}

const newObj = binHTMLContentWithObject(document.querySelector('#content',obj))
// content 内容 My name is Lilei, I love JaveScript.
newObj.name = 'HanMeiMei // #content内容为 My name is HanMeiMei, I love JaveScript.

newObj.language = 'Java' // #content内容为 My name is HanMeiMei, I love Java.

*/


function binHTMLContentWithObject(ele, obj){
    
}