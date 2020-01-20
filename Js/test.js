

setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ':' + minutes + ':' + seconds;
    document.getElementById('date').innerHTML = time;
}, 1000)


