
const path = "https://iskarr.github.io/austindonovan.github.io/api/business.json";
// sets fetched path to a variable
let restaurants;
fetch(path).then((response) => response.json()).then((jsObject) => {
    console.log(jsObject);
    HOSConsoleLog(jsObject);
    restaurants = jsObject;
});
setTimeout(() => {
    loadRestaurants(restaurants);
    
}, 1000);