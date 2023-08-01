let aList = []
let dList = []
let dayLeftList = []
let m0 = 0
let m1 = 31
let m2 = 59
let m3 = 90
let m4 = 120
let m5 = 151
let m6 = 181
let m7 = 212
let m8 = 243
let m9 = 273
let m10 = 304
let m11 = 334
function addDate() {
    let a = document.getElementById("assignment").value
    console.log(a)
    let d = document.getElementById("date").value
    let year = parseInt(d.slice(0,4))
    let month = parseInt(d.slice(5,7))
    let day = parseInt(d.slice(8,10))
    month = month-1
    console.log(month)
    if(month == 0) {
        let firstNum = 0
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 1) {
        let firstNum = 31
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 2) {
        let firstNum = 59
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 3) {
        let firstNum = 90
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 4) {
        let firstNum = 120
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 5) {
        let firstNum = 151
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 6) {
        let firstNum = 181
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 7) {
        let firstNum = 212
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 8) {
        let firstNum = 243
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 9) {
        let firstNum = 273
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 10) {
        let firstNum = 304
        localStorage.setItem("firstNum",firstNum)
    }
    if(month == 11) {
        let firstNum = 334
        localStorage.setItem("firstNum",firstNum)
    }
    console.log(localStorage.getItem("firstNum"),day)
    let totalDay1 = (parseInt(localStorage.getItem("firstNum")) + day) 
    aList.push(a)
    dList.push(d)
    console.log(aList)
    console.log(dList)
    document.getElementById("listOfAssignments").innerHTML = aList.join('<br>')
    document.getElementById("listOfDates").innerHTML = dList.join('<br>')
    const date1 = new Date()
    let x = date1.getDate()
    let w = date1.getMonth()
    let y = date1.getFullYear() 
    
    if(w == 0) {
        let secondNum = 0
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 1) {
        let secondNum = 31
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 2) {
        let secondNum = 59
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 3) {
        let secondNum = 90
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 4) {
        let secondNum = 120
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 5) {
        let secondNum = 151
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 6) {
        let secondNum = 181
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 7) {
        let secondNum = 212
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 8) {
        let secondNum = 243
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 9) {
        let secondNum = 273
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 10) {
        let secondNum = 304
        localStorage.setItem("secondNum",secondNum)
    }
    if(w == 11) {
        let secondNum = 334
        localStorage.setItem("secondNum",secondNum)
    }
    totalDay2 = (parseInt(localStorage.getItem("secondNum")) + x)
    console.log(x)
    console.log(totalDay1,totalDay2)
    let yearCalc = year - y
    yearCalc = yearCalc * 365
    let daysLeft = totalDay1 - totalDay2 + yearCalc
    dayLeftList.push(daysLeft)
    console.log(daysLeft)
    document.getElementById("daysLeft").innerHTML = dayLeftList.join('<br>')

}
