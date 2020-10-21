/*
*  实现以下代码中的 doSth（） 方法， 要求1秒钟内只打印出一次hello，alibaba
*
*/

function doSth(fn) {
	// you code here
	let time = 0;
	return function () {
		time++;
		if (time >= 100) {
			fn()
			time = 0;
		}
	}
}

const fn = doSth = (() => {
	console.log('heelo,alibaba')
})

setInterval(() => {
	fn()
}, 10)