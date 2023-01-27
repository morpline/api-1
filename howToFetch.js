
const path = "https://iskarr.github.io/austindonovan.github.io/api/business.json";
fetch(path)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
HOSConsoleLog(jsObject);
});