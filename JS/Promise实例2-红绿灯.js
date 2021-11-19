/**
 * 红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何使用Promise让三个灯不断交替重复亮灯？
 */

function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

let myLight = (timer, callback) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback();
            resolve();
        }, timer);
    });
};


let myStep = () => {
    Promise.resolve().then(() => {
        return myLight(3000, red);
    }).then(() => {
        return myLight(2000, green);
    }).then(() => {
        return myLight(1000, yellow);
    }).then(() => {
        myStep();
    })
};
myStep();