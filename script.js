let locationBlock = document.getElementsByClassName('location')[0]
let locations = [
  document.getElementById('war1'),
  document.getElementById('war2'),
  document.getElementById('war3'),
  document.getElementById('war4')
]
let locationtexts= [
  "Empty worn down streets in bright daylight",
  "Gray metalic atmosphere pressures upon you",
  "The sun is setting in the distance, another misery",
  "The darkness brings mysteries with it"
]
let locationMenu = locationBlock.getElementsByClassName('menu')[0].getElementsByTagName('li')

let clearLocation = () => locations.map(location => location.style.display = "none")
let setLocation = (index) => {
  let location = locations[index]
  location.style.display = "block"
  location.getElementsByClassName("text")[0].innerHTML = locationtexts[index]
}
let setMenuFunction = function (index) {
  locationMenu[index].onclick = () => {
    clearLocation()
    setLocation(index)
  }
}

for (var i = 0; i < locationMenu.length; i++) {
  setMenuFunction(i)
}

let initialize = () => locations[0].style.display = "block"


initialize();
