const getTimeAndDate = () => {
    let interval = 1000;
    let time;
    let date;
    let a;
    setInterval(() => {
        a = new Date();
        time = `${a.getHours()} : ${a.getMinutes()} : ${a.getSeconds()}`
        date = a.toLocaleDateString();
        document.getElementById('currentTimeAndDate').innerText = time + " on " + date;
    }, interval);
}