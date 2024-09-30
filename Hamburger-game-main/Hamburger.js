var hamburgerArr = [] ;
var hamburgerExample = [6, 5, 4, 2, 1, 3] ;
//Tomato
function addTomatoFunc() {
    var tomatoDiv = document.createElement("DIV");
    tomatoDiv.id="tomatoDiv" ;
    tomatoDiv.style.color='red';
    tomatoDiv.style.borderRadius = '10px';
    tomatoDiv.style.backgroundColor= 'red' ;
    tomatoDiv.style.width= '420px' ;
    tomatoDiv.innerHTML = "Tomato";
    tomatoDiv.style.marginTop ='1%'
    document.getElementById("main").appendChild(tomatoDiv);
    hamburgerArr.push(1);
  }
function removeTomato() {
var element = document.getElementById("tomatoDiv");
element.parentNode.removeChild(element);
var index = hamburgerArr.indexOf(1);
hamburgerArr.splice(index, 1);
}
//Meat
function addMeatFunc() {
    var MeatDiv = document.createElement("DIV");
    MeatDiv.id="MeatDiv" ;
    MeatDiv.style.color='#5c472b';
    MeatDiv.style.borderRadius = '30px';
    MeatDiv.style.backgroundColor= '#5c472b' ;
    MeatDiv.style.width= '420px' ;
    MeatDiv.style.height= '70px' ;
    MeatDiv.style.marginTop ='1%'
    document.getElementById("main").appendChild(MeatDiv);
    hamburgerArr.push(2);
  }
function removeMeat() {
var element = document.getElementById("MeatDiv");
element.parentNode.removeChild(element);
var index = hamburgerArr.indexOf(2);
hamburgerArr.splice(index, 1);
}
//Mustard
function addMustardFunc() {
    var MustardImg = document.createElement("IMG");
    MustardImg.id = "MustardImg" ;
    MustardImg.setAttribute("src", "images/Mustard2.png");
    MustardImg.setAttribute("width", "420");
    MustardImg.setAttribute("height", "30");
    MustardImg.style.display = "block" ;
    MustardImg.style.marginTop ='1%'
    document.getElementById("main").appendChild(MustardImg);
    hamburgerArr.push(3);
  }
  function removeMustard() {
    var element = document.getElementById("MustardImg");
    element.parentNode.removeChild(element);
    var index = hamburgerArr.indexOf(3);
    hamburgerArr.splice(index, 1);
    }
//ketchup
function addketchupFunc() {
  var ketchupImg = document.createElement("IMG");
  ketchupImg.id = "ketchupImg" ;
  ketchupImg.setAttribute("src", "images/ketchup.png");
  ketchupImg.setAttribute("width", "420");
  ketchupImg.setAttribute("height", "30");
  ketchupImg.style.display = "block" ;
  ketchupImg.style.marginTop ='1%'
  document.getElementById("main").appendChild(ketchupImg);
  hamburgerArr.push(4);
}
function removeketchup() {
  var element = document.getElementById("ketchupImg");
  element.parentNode.removeChild(element);
  var index = hamburgerArr.indexOf(4);
  hamburgerArr.splice(index, 1);
  }
//Mayonnaise
function addMayonnaiseFunc() {
  var MayonnaiseImg = document.createElement("IMG");
  MayonnaiseImg.id = "MayonnaiseImg" ;
  MayonnaiseImg.setAttribute("src", "images/Mayonnaise.png");
  MayonnaiseImg.setAttribute("width", "420");
  MayonnaiseImg.setAttribute("height", "30");
  MayonnaiseImg.style.display = "block" ;
  MayonnaiseImg.style.marginTop ='1%'
  document.getElementById("main").appendChild(MayonnaiseImg);
  hamburgerArr.push(5);
}
function removeMayonnaise() {
  var element = document.getElementById("MayonnaiseImg");
  element.parentNode.removeChild(element);
  var index = hamburgerArr.indexOf(5);
  hamburgerArr.splice(index, 1);
  }
//Lettuce
  function addLettuceFunc() {
    var lettuceDiv = document.createElement("DIV");
    lettuceDiv.id="lettuceDiv" ;
    lettuceDiv.style.color='#64f87d';
    lettuceDiv.style.borderRadius = '10px';
    lettuceDiv.style.backgroundColor= '#64f87d' ;
    lettuceDiv.style.width= '420px' ;
    lettuceDiv.innerHTML = "Lettuce";
    lettuceDiv.style.marginTop ='1%'
    document.getElementById("main").appendChild(lettuceDiv);
    hamburgerArr.push(6);
  }
function removeLettuce() {
var element = document.getElementById("lettuceDiv");
element.parentNode.removeChild(element);
var index = hamburgerArr.indexOf(6);
hamburgerArr.splice(index, 1);
}
//Check
function checkFunc() {
  console.log(hamburgerArr) ;
  if( JSON.stringify(hamburgerArr)==JSON.stringify(hamburgerExample)){
    console.log("OK")
    alert("Excellent");
  }
  else{
    hamburgerArr = [] ;
    console.log("NO")
    console.log(hamburgerArr)
    alert("Oops")
    location.reload();
  }
  }
