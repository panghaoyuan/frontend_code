/*
    代码调用类似这样
    const result = solution('weex, rax # and react\nflutter\nnative!hybrid app',["#","!"])
    result should = "weex, rax\nflutter\nnative"
*/

function solution(str,arr){
    if(arr.length === 0) return str;
    let newArr = str.split('\n').map((item) => {
        let flag = false;
        let tempStr = '';
        for(let i = 0;i<arr.length;i++){
            if(item.indexOf(arr[i])!== -1){
                tempStr = arr[i];
                flag = true;
                break;
            }
        }
        if(flag){
            let str2 = item.split(tempStr)
            return str2[0]
        } else {
            return item
        }
    })
    return newArr.join('\n');
}