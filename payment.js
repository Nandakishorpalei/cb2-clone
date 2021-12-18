let expMonth = document.getElementById("expMonth");
let expYear = document.getElementById("expYear");
let option = (key,value)=>{
    return `<option value=${value}>${key}</option>`
}

let months = [
    {key:'Month',value:'month'},
    {key:'(01) January',value:'jan'},
    {key:'(02) February',value:'feb'},
    {key:'(03) March',value:'mar'},
    {key:'(04) April',value:'apr'},
    {key:'(05) May',value:'may'},
    {key:'(06) June',value:'june'},
    {key:'(07) July',value:'july'},
    {key:'(08) August',value:'aug'},
    {key:'(09) September',value:'sep'},
    {key:'(10) October',value:'oct'},
    {key:'(11) November',value:'nov'},
    {key:'(12) December',value:'dec'}
]
let year = Array(10).fill(2021).map((el,key)=>{
    return el+key
})
console.log(year)
expMonth.innerHTML= months.map(el=>{
    return option(el.key,el.value)
}).join('')
expYear.innerHTML = year.map(el=>{
    return option(el,el)
})