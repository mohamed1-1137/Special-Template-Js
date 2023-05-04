/*  start nav bar */

this.addEventListener("load",function(){
    // animation nav bar
    this.document.querySelector(".main-list").style.right="3%";

   //animation scroll icons
    this.document.querySelector(".scrollBox").style.top="50%";
})



// media

let nav=document.querySelectorAll(".list a")
let listMedia=document.querySelector(".main-list .list")
let icon=document.querySelector(".main-list i")
let closed=document.querySelector(".main-list .fa-xmark")

icon.addEventListener("click",function(){
    listMedia.classList.toggle("show")
    icon.classList.toggle("icons")
    closed.classList.toggle("icons")
})
closed.addEventListener("click",function(){
    closed.classList.toggle("icons")
    listMedia.classList.toggle("show")
    icon.classList.toggle("icons")
})

nav.forEach((li)=>{
    li.addEventListener("click",function(){
        listMedia.classList.remove("show")
        closed.classList.toggle("icons")
        icon.classList.toggle("icons")
    })
})

/*  end nav bar */


/* start scroll icons */

let scrollIcon=document.querySelectorAll(".scroll")
let scrollBox=document.querySelector(".scrollBox")

let scrollArray=[]

scrollIcon.forEach((e)=>{

scrollArray.push(e)

// create the scroll icons
    let link =document.createElement("a");

    scrollBox.appendChild(link);
    link.href=`#${e.classList[0]}`;
    link.style.cssText=`text-decoration: none;
    position:relative;
    text-transform: capitalize;
    `;
    
    link.classList.add(`#${e.classList[0]}`)
    
    let para=document.createElement("p");

    para.innerHTML=e.classList[0];
    link.appendChild(para)
    para.style.cssText=`
    color:white;
    position: absolute;
    right:180%;
    background-color:var(--main-color);
    padding:4px;
    border-radius:6px;
    min-width:120px;
    text-align:center;
    top:-30%;
    display:none;`
})

// show and collapse the paragrath of the sectons onload
this.addEventListener("load",function(){
    this.document.querySelectorAll(".scrollBox a p").forEach((p)=>{
        p.style.display="block"
    })
})

setTimeout(function(){
this.document.querySelectorAll(".scrollBox a p").forEach((p)=>{
        p.style.display="none"
    })
},2500)

// add scrollicons class when click

let icons=document.querySelectorAll(".scrollBox  a")
let iconsArray=[]
icons.forEach((a)=>{
    iconsArray.push(a)
a.addEventListener("click",function(ee){
    icons.forEach((icon)=>{icon.classList.remove("scrollIcons")})
    ee.currentTarget.classList.add("scrollIcons")
    })
})



// add scrollicons class during scroll

for(let i=0;i<scrollArray.length; i++){

this.addEventListener("scroll",function(){
    if(this.scrollY >= scrollArray[i].offsetTop-400 && this.scrollY <= scrollArray[i+1].offsetTop){
    iconsArray.forEach((icon)=>{icon.classList.remove("scrollIcons")})
    if(iconsArray[i].classList[0]===`#${scrollArray[i].classList[0]}`){
        iconsArray[i].classList.add("scrollIcons")
        iconsArray[i].firstElementChild.classList.add("settingJs")
    }
    }else{
        iconsArray[i].firstElementChild.classList.remove("settingJs")
    }
})
}



/* end scroll icons */


/* start Up button */

let upBtn=document.querySelector(".up")

this.addEventListener("scroll",function(){
    if(this.scrollY>=900){
        upBtn.style.cssText=`right:3%`
    }else if(this.scrollY<=900){
        upBtn.style.cssText=`right:-100%`
    } 
    
})

upBtn.addEventListener("click",function(){
window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

/* end Up button */



/* start slider images */
let img=document.querySelector(".slider-image")
let stopBtn=document.querySelector(".stopBtn button")
let startBtn=document.querySelector(".startBtn button")

let list=["img1.jpg","img2.jpg","img3.jpg"]


function Randombackground(){
    let stop=setInterval(function(){
        img.src=`./images/${list[Math.floor(Math.random()*list.length)]}`
    },3000)

    stopBtn.addEventListener("click",function(){
        clearInterval(stop)
        stopBtn.style.display="none"
        startBtn.style.display="block"
        localStorage.setItem("randomBackground",false)
    })

    startBtn.addEventListener("click",function(){
        Randombackground()
        startBtn.style.display="none"
        stopBtn.style.display="block"
        localStorage.setItem("randomBackground",true)
    })
    window.onload=function(){
        if(localStorage.getItem("randomBackground")==="false"){
            clearInterval(stop)
            stopBtn.style.display="none"
            startBtn.style.display="block"
        }else if(localStorage.getItem("randomBackground")==="true"){
            startBtn.style.display="none"
            stopBtn.style.display="block"
        }
    }
    
}
Randombackground()




/* end slider images */

/* start setting */
let setting=document.querySelector(".setting")
let Cogear= document.querySelector(" .gear ")
let gear=document.querySelector(" .gear i ")

Cogear.addEventListener("click",function(){
    if(setting.classList.contains("settingJs")){
        setting.classList.remove("settingJs")
        Cogear.classList.remove("gearJs")
        gear.classList.remove("gearIJs")
    }else{
        setting.classList.add("settingJs")
        Cogear.classList.add("gearJs")
        gear.classList.add("gearIJs")
    }
})

/* start fonts and themes and colors */

//fonts

let fonts=document.querySelectorAll(".fonts li")
fonts.forEach(function(e){
    e.addEventListener("click",function(){
        fonts.forEach(function(el){el.classList.remove("active")})
        document.body.style.fontFamily=e.innerHTML
        e.classList.add("active")
        localStorage.setItem("fonts",e.innerHTML)
    })
})

if(localStorage.getItem("fonts")!==null ){
    document.body.style.fontFamily=window.localStorage.getItem("fonts")
    fonts.forEach((font)=>{
        if(font.dataset.color===window.localStorage.getItem("fonts")){
            fonts.forEach(function(e){e.classList.remove("active")})
            font.classList.add("active")
        }
})
}


//themes
let root=document.querySelector(":root");
let themes=document.querySelectorAll(".themes li")
let maintheme=getComputedStyle(root).getPropertyValue("--dark")

let darkMode=document.querySelector(".themes .dark")
let lightMode=document.querySelector(".themes .light ")
// window.localStorage.clear()





function themess(){
    darkMode.addEventListener("click",function(){
        localStorage.setItem("theme", "#343a40")
        root.style.setProperty("--light",`${localStorage.getItem("theme")}`)
            document.querySelector(".gear i").classList.add("lightJs")
            document.querySelectorAll(".dark-th").forEach(function(e){e.classList.remove("darkJs")})
            document.querySelectorAll(".dark-th").forEach(function(e){e.classList.add("lightJs")})
    })
    
    lightMode.addEventListener("click",function(){
        localStorage.setItem("theme", "#f8f9fa")
        root.style.setProperty("--light",`${localStorage.getItem("theme")}`)
        document.querySelector(".gear i").style.color="black";
        document.querySelectorAll(".dark-th").forEach(function(e){e.classList.remove("lightJs")})
        document.querySelectorAll(".dark-th").forEach(function(e){e.classList.add("darkJs")})
    console.log(document.querySelectorAll(".dark-th"))

    })
    
}

themess()


//colors


let colors=document.querySelectorAll(".colors li")
let mainColor=getComputedStyle(root).getPropertyValue("--main-color")

if(localStorage.getItem("--main-color")!==null){
    root.style.setProperty("--main-color",`${localStorage.getItem("--main-color")}`)
}
colors.forEach(function(e){
    e.addEventListener("click",function(){
        colors.forEach((color)=>{color.classList.remove("colorsClass")})
        e.classList.add("colorsClass")
        root.style.setProperty("--main-color",`${e.dataset.color}`)
        window.localStorage.setItem("--main-color",`${e.dataset.color}`)
        })
})

// take the colorsClass from localstorage

if(localStorage.getItem("--main-color")!==null){
colors.forEach(function(e){
    if(e.dataset.color===localStorage.getItem("--main-color")){
        e.classList.add("colorsClass")
    }
})}

/* end fonts and themes and colors */

/* end setting */

/* start my skills */

let mySkills=document.querySelector(".our-Skills")
window.onscroll=function(){
if(window.scrollY>=mySkills.offsetTop){
    document.querySelectorAll("span .width").forEach((e)=>{
    e.style.width=e.dataset.width;
    })
}
}

/* end my skills */


/* start my gallery */

let images=document.querySelectorAll(".images-card")

images.forEach((e)=>{
    e.addEventListener("click",function(){

        // create the overlay filter
        let overlay=document.createElement("div")
        overlay.className="overlay"
        document.body.appendChild(overlay)

       //create the box of img
        let box=document.createElement("div")
        box.className="img-Box"
        let imgBox=document.createElement("img")
        imgBox.src=e.firstElementChild.src;
        box.appendChild(imgBox)
        overlay.appendChild(box)

        //create the booton to close the popup
        let btnOverlay=document.createElement("button");
        btnOverlay.className="btnOverlay";
        btnOverlay.textContent="X"
        box.appendChild(btnOverlay)
        
        // show the paragrath of the img
        let para=document.querySelector(".images .images-card .card-text");
        para.style.display="block !important"
        box.appendChild(para)
        para.firstElementChild.className="theTitle";
        para.lastElementChild.className="theParagth";

        //close the overlay
        btnOverlay.addEventListener("click",function(){
            overlay.style.display="none"
        })
    })
})

/* end my gallery */
