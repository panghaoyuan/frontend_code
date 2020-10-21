/*
    请编写一个JavaScript函数parseQueryString,它的用途是把URL参数解析成对象
    const url = "http://fliggy.com/index.html?name=feizhu&formalibaba"
    const urlParams = parseQueryString(url)
    urlParams结果为 {name："飞猪“ ， form： "alibaba"}
*/

function parseQueryString(url){
    if(url.indexOf('?') === -1) return {}
    let obj = {};
    let paramsArr = url.split('?')[1].split('&');
    paramsArr.map((item) => {
        let keyAndValue = item.split('=');
        obj[keyAndValue[0]] = keyAndValue[1];
    })
    return obj;
}