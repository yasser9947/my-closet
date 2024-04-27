let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");

let top1 = document.getElementById("top");
let tanora = document.getElementById("tanora");
let heals = document.getElementById("heals");
let dress = document.getElementById("dress");

let arrayDressiness = ["d1.svg"];
let arrayTops = ["top1.svg", "top2.svg", "top3.svg"];
let arrayTanoras = ["t1.svg", "t2.svg"];
let arrayHeals = ["h1.svg", "h2.svg"];
let group = [icon1, icon2, icon4, icon3];


// تعريف الايقونات
let icons = {
  icon1: arrayDressiness,
  icon2: arrayTops,
  icon3: arrayTanoras,
  icon4: arrayHeals
}

let iconsSelected = {
  icon1: ["selected"],
  icon2: ["", ""],
  icon3: ["", ""],
  icon4: ["selected", ""]
}

//اضافه حدث الضغط بالنسبة للايقونات
group.forEach(icon => {

  icon.addEventListener("click", (e) => {
    const id = e.target.id;

    const boxes = icons[id];

    addElementToBoxes(boxes, id)

  })
})
//     border: 6px solid #edff00;

// دالة اضافة الصور الى المربعات
const  addElementToBoxes =(array, id)=> {
  Array.from(document.getElementsByClassName("box")).forEach((e, i) => {
    e.innerHTML = array[i] ? `<img class="right__img" src="./img/${array[i]}"/> ` : "";
    e.className = "box " + id;
    iconsSelected[id][i] && e.classList.add(iconsSelected[id][i])
  })
}

addElementToBoxes(arrayDressiness, "icon1")

Array.from(document.getElementsByClassName("box")).forEach((e, i) => {
  e.addEventListener("click", (event) => {
    removesipleng()
    let src = e.childNodes[0].src;
    e.classList.add("selected");
    if (e.classList.contains("icon1")) {
      iconsSelected["icon2"] = ["" , ""];
      iconsSelected["icon3"] = ["" , ""];
      dress.style.display="block"
      dress.style.backgroundImage = `url(${src})`
      top1.style.display="none";
      tanora.style.display="none"
    } else if (e.classList.contains("icon2")) {
      iconsSelected["icon1"] = [""];
      iconsSelected["icon2"] = ["" ,""];
      iconsSelected["icon2"][i] = "selected";
      top1.style.display="block"
      tanora.style.display="block"
      top1.style.backgroundImage = `url(${src})`
      dress.style.display="none"
    } else if (e.classList.contains("icon3")) {
      iconsSelected["icon1"] = [""];
      iconsSelected["icon3"] = ["" ,""];
      iconsSelected["icon3"][i] = "selected";
      top1.style.display="block"
      tanora.style.display="block"
      tanora.style.backgroundImage = `url(${src})`
      dress.style.display="none"
    } else if (e.classList.contains("icon4")) {
      iconsSelected["icon4"] = ["" ,""];
      iconsSelected["icon4"][i] = "selected";
      heals.style.display="block"
      heals.style.backgroundImage = `url(${src})`
    }

  })
})

function removesipleng(){
  Array.from(document.getElementsByClassName("box")).forEach((e, i) => {
    e.classList.remove("selected")
  })
}







