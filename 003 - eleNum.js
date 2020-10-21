/*
DOM 的体积过大会影响页面性能，假如你想在用户关闭页面时统计（计算并反馈给服务器）当前页面中
元素节点的数量总和、元素节点的最大嵌套深度以及最大子元素个数，请用 JS 配合原生 DOM API 
实现该需求（不用考虑陈旧浏览器以及在现代浏览器中的兼容性，可以使用任意浏览器的最新特性；
不用考虑 shadow DOM）。比如在如下页面中运行后

<html>
  <head></head>
  <body>
    <div>
      <span>f</span>
      <span>o</span>
      <span>o</span>
    </div>
  </body>
</html>
会得出这样一个对象：

{
  totalElementsCount: 7,
  maxDOMTreeDepth: 4,
  maxChildrenCount: 3
}

*/

const obj = {}
class Ele {
    constructor(ele) {
        this.ele = ele;
        this.funum = 1;
    }
    //取当前节点的元素深度
    getEleDepth() {
        let fuele = this.ele.parentNode;
        if (fuele !== document) {
            this.funum++;
            this.ele = fuele;
            return this.getEleDepth();
        } else {
            return this.funum;
        }
    }
    //去当前节点的子元素个数
    getEleSubNum() {
        let zieles = this.ele.childNodes, zinum = 0;
        for (let i = 0; i < zieles.length; i++) {
            if (zieles[i].nodeName !== '#text') {
                zinum++;
            }
        }
        return zinum;
    }
}
const totalElements = document.getElementsByTagName("*")
obj.totalElementsCount = totalElements.length;//dom中的所有节点数量

let eleDepthArr = [];
let eleSubArr = [];
for (let i = 0; i < totalElements.length; i++) {
    eleDepthArr.push(new Ele(totalElements[i]).getEleDepth())
    eleSubArr.push(new Ele(totalElements[i]).getEleSubNum())
}
eleDepthArr = eleDepthArr.sort((a, b) => (b - a))
eleSubArr = eleSubArr.sort((a, b) => (b - a))
obj.maxDOMTreeDepth = eleDepthArr[0]//元素节点的最大嵌套深度
obj.maxChildrenCount = eleSubArr[0]//最大子元素个数

console.log(obj)