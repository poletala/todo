var time = performance.now();
id = Math.random().toString(16).slice(2)
time = performance.now() - time;
console.log('Время выполнения = ', time);

var time2 = performance.now();
id1 = Date.now()
time2 = performance.now() - time2;
console.log('Время выполнения2 = ', time2);