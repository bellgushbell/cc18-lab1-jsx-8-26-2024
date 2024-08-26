function App() {
    let birthDate = new Date(2024, 3, 26).getTime() //วันเกิดเรา
    console.log(birthDate)


    // console.log(birthDate.getMonth())





    let now = new Date().getTime()
    console.log(now)
    let timeCount = birthDate - now  //convert milliseconds to seconds
    console.log(timeCount) //วันปัจจุบันลบกันกับวันเกิด
    let timeCountSec = timeCount / 1000
    console.log(timeCountSec)
    let days = Math.abs(Math.floor(timeCount / (1000 * 60 * 60 * 24))) //convert seconds to days / milli*second*minute*hours
    console.log(days)
    let hours = Math.abs(Math.floor(
        (timeCountSec % (60 * 60 * 24)) / (60 * 60)) //convert seconds to hours
    )
    let minutes = Math.abs(Math.floor((timeCountSec % (60 * 60)) / (60)))
    console.log(minutes)
    // let seconds
    let seconds = Math.abs(Math.floor((timeCountSec % (60 * 60)) % (60)))
    console.log(seconds)





    //ตัวอย่างอาจารย์เจียง
    // console.log(new Date().getTime())

    // console.log(new Date("1970-01-01").getTime())
    // console.log(new Date("1970-01-02").getTime())

    // let x = new Date("1971-01-01").getTime()
    // console.log(x / 1000) //  sec.
    // console.log(x / 1000 / 60)  //min.
    // console.log(x / 1000 / 60 / 60)  //hrs.
    // console.log(x / 1000 / 60 / 60 / 24)  //day.


    const st1 = { color: 'red' }
    return (

        <div>
            <h1 style={st1}>Name: Piriyapong Bunjusook</h1>

            {/* <p style={st1}> age : {new Date().getFullYear() - 1996}</p>
            <p style={st1}> year : {new Date().getFullYear() + 543 - 28}</p>
            <p style={st1}> Mount : {new Date().getMonth() - 4}</p>
            <p style={st1}> day : {new Date().getDay() + 25}</p> */}


            <p> Age : {new Date().getFullYear() - 1996}</p>
            <p> Mount: {new Date().getMonth() - 4}</p>

            <p> Day : {days}</p>
            <p>hours : {hours}</p>
            <p>minute : {minutes}</p>
            <p>seconds : {seconds}</p>







        </div>

    )



}

// ReactDOM.createRoot(document.querySelector('#root')).render(<App />)

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)