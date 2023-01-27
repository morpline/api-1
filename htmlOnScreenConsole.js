function HOSConsoleLog(e){
    const console = document.getElementById("console");
    const b = document.createElement("div");
    b.classList.add("console","line");
    b.innerHTML = e;
    console.appendChild(b);
}
HOSConsoleLog("HOSConsole Activated");
console.log("HOSConsole Activated");