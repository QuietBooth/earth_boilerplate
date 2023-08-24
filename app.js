var bodyvar = document.body

var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar:" , consumptionvar)
var resourcesvar = document.getElementById("resources")
console.log("resourcesvar:" , resourcesvar)
var climatevar = document.getElementById("climate")
console.log("climatevar:" , climatevar)
var peoplevar = document.getElementById("people")
console.log("peoplevar:" , peoplevar)


var savetext = document.getElementById("save")
var frame = document.getElementById("frame")
consumptionvar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize=" 100% 100% "

    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers "

    consumptionvar.style.backgroundColor="green"
    peoplevar.style.backgroundColor=""
    climatevar.style.backgroundColor=""
    resorucesvar.style.backgroundColor=""
}

    peoplevar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize=" 100% 100% "

    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need "

    peoplevar.style.backgroundColor="red"
    resourcesvar.style.backgroundColor=""
    climatevar.style.backgroundColor=""
    consumptionvar.style.backgroundColor=""
}



    resourcesvar.onclick=()=>{

    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize=" 100% 100% "

    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    savetext.innerHTML=" Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle "

    resourcesvar.style.backgroundColor="orange"
    climatevar.style.backgroundColor=""
    consumptionvar.style.backgroundColor=""
    peoplevar.style.backgroundColor=""
}



    climatevar.onclick=()=>{

        bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
        bodyvar.style.backgroundSize="100% 100%"

        frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

        savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
        climatevar.style.backgroundColor="skyblue"
        peoplevar.style.backgroundColor=""
        consumptionvar.style.backgroundColor=""
        resourcesvar.style.backgroundColor=""
        
    }
