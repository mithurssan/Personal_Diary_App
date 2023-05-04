async function fetchDiaryEntries(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    await fetch(`https://mk-diary-api.onrender.com/entries/`, options)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.sort((a,b) => (a.date < b.date ? 1 : -1))

        const date1Element = document.getElementById("date1")
        const time1Element = document.getElementById("time1")
        const type1Element = document.getElementById("type1")
        const text1Element = document.getElementById("text1")
        date1Element.innerHTML = data[0]["date"]
        time1Element.innerHTML = data[0]["time"]
        type1Element.innerHTML = data[0]["category"]
        text1Element.innerHTML = data[0]["content"]

        const date2Element = document.getElementById("date2")
        const time2Element = document.getElementById("time2")
        const type2Element = document.getElementById("type2")
        const text2Element = document.getElementById("text2")
        date2Element.innerHTML = data[1]["date"]
        time2Element.innerHTML = data[1]["time"]
        type2Element.innerHTML = data[1]["category"]
        text2Element.innerHTML = data[1]["content"]

        const date3Element = document.getElementById("date3")
        const time3Element = document.getElementById("time3")
        const type3Element = document.getElementById("type3")
        const text3Element = document.getElementById("text3")
        date3Element.innerHTML = data[2]["date"]
        time3Element.innerHTML = data[2]["time"]
        type3Element.innerHTML = data[2]["category"]
        text3Element.innerHTML = data[2]["content"]

        const date4Element = document.getElementById("date4")
        const time4Element = document.getElementById("time4")
        const type4Element = document.getElementById("type4")
        const text4Element = document.getElementById("text4")
        date4Element.innerHTML = data[3]["date"]
        time4Element.innerHTML = data[3]["time"]
        type4Element.innerHTML = data[3]["category"]
        text4Element.innerHTML = data[3]["content"]

        const date5Element = document.getElementById("date5")
        const time5Element = document.getElementById("time5")
        const type5Element = document.getElementById("type5")
        const text5Element = document.getElementById("text5")
        date5Element.innerHTML = data[4]["date"]
        time5Element.innerHTML = data[4]["time"]
        type5Element.innerHTML = data[4]["category"]
        text5Element.innerHTML = data[4]["content"]



    })
    .catch(err => console.log(err))
}

fetchDiaryEntries()