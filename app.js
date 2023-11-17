let carsResponseList = document.getElementById("cars-response-list");
let cars = [];

fetch("https://rentcar.webwide.ge/api/Car/popular", {
    
        method: "GET",
    })
    .then((response) => {
       
        if (response.ok) {
           
            return response.json();
        } else {
            alert("შეცდომა, რაღაც არ არის რიგზე!!!");
        }
    })
    .then((data) => {
        data.forEach((car) => {
            cars.push(car);
        });
        console.log(cars)

        cars.forEach((car) => {
            carsResponseList.innerHTML += `
              <div class="card" style="width: 18rem;">
              <img src="${car.imageUrl1}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${car.brand}</h5>
                <p class="card-text">${car.model}</p>
                <p class="card-text">${car.price}ლ დღეში</p>
                <a href="#" class="btn btn-primary">${car.year}</a>
                <a href="#" class="btn btn-primary">${car.transmission}</a>
              </div>
            </div>
              `;
        });
    })
   