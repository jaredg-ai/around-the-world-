// const { default: axios } = require("axios")
let planList = document.querySelector('#two')
let beenList = document.querySelector('#one')


function displayList() {
    axios.get('http://localhost:5500/api/plan')
    .then((res) => {
        console.log(res.data)
        for (i = 0; i < res.data.length; i++) {
            let li = document.createElement('li')
            li.textContent = res.data[i]
            planList.appendChild(li)
        }
    })
}
displayList()

function displayBeenList() {
    axios.get('http://localhost:5500/api/been')
    .then((res) => {
        console.log(res.data)
        for (i = 0; i < res.data.length; i++) {
            let li = document.createElement('li')
            li.textContent = res.data[i]
            beenList.appendChild(li)
        }
    })
}
displayBeenList()
// console.log(planTo)