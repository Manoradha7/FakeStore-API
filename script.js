var url = "https://fakestoreapi.com/products";

//create function to get the data from the Api
function getData(){

    //fetching data from the url using fetch
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //select the div to show the fetching data
        const datas = document.querySelector(".container-fluid");
        
        //show the data to the window
        data.forEach (val =>
            datas.innerHTML +=`
            <div class="card">
            <h1 class="title">${val.title}</h1>
            <img src=${val.image} alt="img" class="img img-responsive img-circle">
            <p class="description">${val.description}</p><br>
            <p class="category">${val.category}</p><br>
            <p class="price">$${val.price}</p>
            </div>
            `
            )
    })
    .catch(err =>console.log(err));  // catch the error if any error occur
}

// call the function to satrt the progress
getData();