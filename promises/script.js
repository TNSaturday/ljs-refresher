// Успешно выполненный промис
let promiseSuccess = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
// promiseSuccess.then(
//     result => alert(result), // выведет "done!" через одну секунду
//     error => alert(error) // не будет запущена
// );


// Промис, завершившийся с ошибкой
let promiseError = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 2000);
});

// reject запустит вторую функцию, переданную в .then
promiseError.then(
    result => alert(result), // не будет запущена
).catch(
    error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
// выполнится, когда промис завершится, независимо от того, успешно или нет
).finally(
    () => {
        console.log('Finally');
    }
);
