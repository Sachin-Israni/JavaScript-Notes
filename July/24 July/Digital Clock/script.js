function showTime() {
    var date = new Date()
    var hh = date.getHours()
    var mm = date.getMinutes()
    var ss = date.getSeconds()

    // console.log(hh,mm,ss);
    var session = 'AM'
    if (hh == 0) {
        hh = 12
    }
    if (hh > 12) {
        hh = hh - 12
        session = "PM"
    }

    // if (hh < 10) {
    //     hh = '0' + hh
    // }
    // if (mm < 10) {
    //     mm = '0' + mm
    // }
    // if (ss < 10) {
    //     ss = '0' + ss
    // }

    hh < 10 ? hh = '0' + hh : hh
    mm < 10 ? mm = '0' + mm : mm
    ss < 10 ? ss = '0' + ss : ss
    
    document.getElementById('digitalClock').innerHTML = hh + ":" + mm + ":" + ss + " " + session
    setTimeout(showTime, 1000)
}
showTime()