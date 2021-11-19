/**
 * 请实现一个mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
 * @param {*} ms 
 * @returns 
 */
const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    let data = [];

    //定义一个resolved状态的对象
    let sequence = Promise.resolve();

    ajaxArray.forEach(item => {
        // 第一个then执行数组中每个函数
        // 第二个then接收函数执行返回结果，并保存到data数组，然后返回
        sequence = sequence.then(item).then(res => {
            data.push(res);
            return data;
        });
    });

    // 遍历结束，返回一个Promise对象，它的[[PromiseValue]] 值就是 data
    return sequence;
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]