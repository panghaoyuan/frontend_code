/* 第一题算法题
实现一个方法,可以根据key获取到object 对应的值
const data = { a: [ { b: 1 }, { c: 2 } ], b: { bb: { cc: 11} },
getObjectDataByKey(data, 'a[0].b') ==> 1
getObjectDataByKey(data, 'a[1].c') ==> 2
getObjectDataByKey(data, 'b.bb.cc') ==> 11
*/

function getObjectDataByKey(obj, key) {
	key = key.replace(/\[(\w+)\]/g, '.$1'); //将[0]转化为.0      
	const arr1 = key.split('.');
	console.log(arr1)
	for (let i = 0; i < arr1.length; i++) {
		obj = obj[arr1[i]]
	}
	return obj
}

console.log(getObjectDataByKey(data, 'aa[0].b'))
console.log(getObjectDataByKey(data, 'b.bb.cc'))