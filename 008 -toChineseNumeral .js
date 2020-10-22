/*
始终创建一个伊数字作为参数并返回中文字符串的函数,无需炎症输入参数,它将始终是[-99999.999,999999,999]范围内
的数字,四舍五入到小数点后3位
*/

function toChineseNumeral(num) {
    const numerals = {
        '-': '负',
        '.': '点',
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
        10: '十',
        100: '百',
        1000: '千',
        10000: '万',
    };
    // 在这里编写代码
}

// 单侧用例
const caseList = [toChineseNumeral(9) === '九',
toChineseNumeral(-5) === '负五',
toChineseNumeral(10) === '十',
toChineseNumeral(110) === '一百一十',
toChineseNumeral(111) === '一百一十一',
toChineseNumeral(1000) === '一千',
toChineseNumeral(10000) === '一万',
toChineseNumeral(10006) === '一万零六',
toChineseNumeral(10306.05) === '一万零三百零六点零零五',
]


document.getElementById('output').innerHTML = caseList.map((item, index) => {
    return `case${index + 1}: ${item}`
}).join('<br>')