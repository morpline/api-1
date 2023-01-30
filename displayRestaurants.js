function createRestaurant ({name,address,imageurl,description}){
    let r = document.createElement("div");
    r.innerHTML = `
        <div class="restaurant">
            <img src="${imageurl}" alt="" srcset="">
            <p class="name">${name}</p>
            <p class="desr">${description}</p>
            <p class="address">${address}</p>
        </div>
    `;
    return r;
}
let restaurantDiv = document.getElementById("restaurants");
function loadRestaurants(r){
    r.business.forEach(element => {
        restaurantDiv.appendChild(createRestaurant(element));
    });
}