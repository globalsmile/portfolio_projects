
let lists = document.querySelectorAll(".destination-content .box-2 .listPlanet li")
let headerPlanets = document.querySelectorAll(".destination-content .box-2 h1")
let imagePlanets = document.querySelectorAll(".destination-content .box-1 .wraper-box-1 img")
let aboutPlanets = document.querySelectorAll(".destination-content .box-2 p")
let descPlanets = document.querySelectorAll(".destination-content .box-2 .desc")

let allRole = document.querySelectorAll(".wrap-content-crew .box-1 .role-crew h5")
let allName = document.querySelectorAll(".wrap-content-crew .box-1 .name-crew h2")
let allDesc = document.querySelectorAll(".wrap-content-crew .box-1 .desc-crew p")
let allImage = document.querySelectorAll(".wrap-content-crew .box-2 .wraper-image img")
let allRemote = document.querySelectorAll(".wrap-checklist div")

let allHeaderTech = document.querySelectorAll(".wraper-tech .box-1 .row h1")
let allParagraphTech = document.querySelectorAll(".wraper-tech .box-1 .wrap-paragraph p")
let allImageTech = document.querySelectorAll(".wraper-tech .box-2 .wrap-image img")
let allRemoteTech = document.querySelectorAll(".handler")


function showPlanet(image, header, about, desc){
    lists.forEach(list => {
        list.classList.remove("active")
    })
    headerPlanets.forEach(headerPlanet => {
        headerPlanet.classList.remove("active")
    })
    imagePlanets.forEach(imagePlanet => {
        imagePlanet.classList.remove("active")
    })
    aboutPlanets.forEach(aboutPlanet => {
        aboutPlanet.classList.remove("active")
    })
    descPlanets.forEach(descPlanet => {
        descPlanet.classList.remove("active")
    })
    allRemoteTech.forEach(remoteTech => {
        remoteTech.classList.remove("active")
    })
    allRemote.forEach(remote => {
        remote.classList.remove("active")
    })

    allRole.forEach(roleCrew => {
        roleCrew.classList.remove("active")
    })
    allName.forEach(nameCrew => {
        nameCrew.classList.remove("active")
    })
    allDesc.forEach(descCrew => {
        descCrew.classList.remove("active")
    })
    allImage.forEach(imageCrew => {
        imageCrew.classList.remove("active")
    })

    allHeaderTech.forEach(headerTech => {
        headerTech.classList.remove("active")
    })
    allParagraphTech.forEach(paragraphTech => {
        paragraphTech.classList.remove("active")
    })
    allImageTech.forEach(imageTech => {
        imageTech.classList.remove("active")
    })

    document.getElementById(image).classList.add("active")
    document.getElementById(header).classList.add("active")
    document.getElementById(about).classList.add("active")
    document.getElementById(desc).classList.add("active")
    event.currentTarget.classList.add("active")
}