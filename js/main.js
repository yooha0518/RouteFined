const firstCity = document.getElementById("firstCity");
const firstCityContent = document.getElementById("city1");
const firstCityFoodContent = document.getElementById("city1Food");
const secondCity = document.getElementById("secondCity");
const secondCityContent = document.getElementById("city2");
const secondCityFoodContent = document.getElementById("city2Food");
const thirdCity = document.getElementById("thirdCity");
const thirdCityContent = document.getElementById("city3");
const thirdCityFoodContent = document.getElementById("city3Food");
const fourthCity = document.getElementById("fourthCity");
const fourthCityContent = document.getElementById("city4");
const fourthCityFoodContent = document.getElementById("city4Food");
const fifthCity = document.getElementById("fifthCity");
const fifthCityContent = document.getElementById("city5");
const fifthCityFoodContent = document.getElementById("city5Food");
const cityContentWrap = document.querySelectorAll(".city_content_wrap");
const clickedCityName = document.querySelector("#clicked_city_name");// 클릭한 도시 이름을 여기에다가 innerHtml 한다.



let clickedCity;

const routeBtn = document.getElementById("routeBtn");
const route = document.getElementById("mapBody");
const route2 = document.getElementById("mapBody2");

function clickCity1(){
    firstCityContent.classList.remove("hidden");
    secondCityContent.classList.add("hidden");
    thirdCityContent.classList.add("hidden");
    fourthCityContent.classList.add("hidden");
    fifthCityContent.classList.add("hidden");
    firstCityFoodContent.classList.remove("hidden");
    secondCityFoodContent.classList.add("hidden");
    thirdCityFoodContent.classList.add("hidden");
    fourthCityFoodContent.classList.add("hidden");
    fifthCityFoodContent.classList.add("hidden");
    
}

function clicked1(){
    firstCity.classList.add("clicked"); 
    secondCity.classList.remove("clicked");
    thirdCity.classList.remove("clicked");
    fourthCity.classList.remove("clicked");
    fifthCity.classList.remove("clicked");
}


function clickCity2(){
    firstCityContent.classList.add("hidden");
    secondCityContent.classList.remove("hidden");
    thirdCityContent.classList.add("hidden");
    fourthCityContent.classList.add("hidden");
    fifthCityContent.classList.add("hidden");
    firstCityFoodContent.classList.add("hidden");
    secondCityFoodContent.classList.remove("hidden");
    thirdCityFoodContent.classList.add("hidden");
    fourthCityFoodContent.classList.add("hidden");
    fifthCityFoodContent.classList.add("hidden");
}

function clicked2(){
    firstCity.classList.remove("clicked"); 
    secondCity.classList.add("clicked");
    thirdCity.classList.remove("clicked");
    fourthCity.classList.remove("clicked");
    fifthCity.classList.remove("clicked");
}

function clickCity3(){
    firstCityContent.classList.add("hidden");
    secondCityContent.classList.add("hidden");
    thirdCityContent.classList.remove("hidden");
    fourthCityContent.classList.add("hidden");
    fifthCityContent.classList.add("hidden");
    firstCityFoodContent.classList.add("hidden");
    secondCityFoodContent.classList.add("hidden");
    thirdCityFoodContent.classList.remove("hidden");
    fourthCityFoodContent.classList.add("hidden");
    fifthCityFoodContent.classList.add("hidden");
    
}

function clicked3(){
    firstCity.classList.remove("clicked"); 
    secondCity.classList.remove("clicked");
    thirdCity.classList.add("clicked");
    fourthCity.classList.remove("clicked");
    fifthCity.classList.remove("clicked");
}

function clickCity4(){
    firstCityContent.classList.add("hidden");
    secondCityContent.classList.add("hidden");
    thirdCityContent.classList.add("hidden");
    fourthCityContent.classList.remove("hidden");
    fifthCityContent.classList.add("hidden");
    firstCityFoodContent.classList.add("hidden");
    secondCityFoodContent.classList.add("hidden");
    thirdCityFoodContent.classList.add("hidden");
    fourthCityFoodContent.classList.remove("hidden");
    fifthCityFoodContent.classList.add("hidden");
    
}

function clicked4(){
    firstCity.classList.remove("clicked"); 
    secondCity.classList.remove("clicked");
    thirdCity.classList.remove("clicked");
    fourthCity.classList.add("clicked");
    fifthCity.classList.remove("clicked");
}

function clickCity5(){
    firstCityContent.classList.add("hidden");
    secondCityContent.classList.add("hidden");
    thirdCityContent.classList.add("hidden");
    fourthCityContent.classList.add("hidden");
    fifthCityContent.classList.remove("hidden");
    firstCityFoodContent.classList.add("hidden");
    secondCityFoodContent.classList.add("hidden");
    thirdCityFoodContent.classList.add("hidden");
    fourthCityFoodContent.classList.add("hidden");
    fifthCityFoodContent.classList.remove("hidden");
    
}
function clicked5(){
    firstCity.classList.remove("clicked"); 
    secondCity.classList.remove("clicked");
    thirdCity.classList.remove("clicked");
    fourthCity.classList.remove("clicked");
    fifthCity.classList.add("clicked");
}

function wrapClick(){
    this.classList.toggle("wrapClicked");
} 

function routeBtnClick(){
    route.classList.remove("hidden");
    
}
function routeBtnClick2(){
    route2.classList.remove("hidden");
}

function firstNavBtnClick(){
    clickCity1();
    clicked1();
    clickedCity="1";
    clickedCityName.innerText = clickedCity;
}
function secondNavBtnClick(){
    clickCity2();
    clicked2();
    clickedCity="2";
    clickedCityName.innerText = clickedCity;
}
function thirdNavBtnClick(){
    clickCity3();
    clicked3();
    clickedCity="3";
    clickedCityName.innerText = clickedCity;
}
function fourthNavBtnClick(){
    clickCity4();
    clicked4();
    clickedCity="4";
    clickedCityName.innerText = clickedCity;
}
function fifthNavBtnClick(){
    clickCity5();
    clicked5();
    clickedCity="5";
    clickedCityName.innerText = clickedCity;
}


firstCity.addEventListener("click",clickCity1);
firstCity.addEventListener("click",clicked1);
secondCity.addEventListener("click",clickCity2);
secondCity.addEventListener("click",clicked2);
thirdCity.addEventListener("click",clickCity3);
thirdCity.addEventListener("click",clicked3);
fourthCity.addEventListener("click",clickCity4);
fourthCity.addEventListener("click",clicked4);
fifthCity.addEventListener("click",clickCity5);
fifthCity.addEventListener("click",clicked5);
cityContentWrap.forEach((array) => array.addEventListener("click", wrapClick));
routeBtn.addEventListener("click",routeBtnClick);
routeBtn.addEventListener("click",routeBtnClick2);


