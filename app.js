let cities = [
    {
        image: "./images/badshai.jpg",
        city: "Lahore"
    },
    {
        image: "./images/mazare-quid.jpg",
        city: "Karachi"
    },
    {
        image: "./images/peshawer.jpg",
        city: "Peshawar"
    },
    {
        image: "./images/islamabad.jpg",
        city: "Islamabad"
    },
    {
        image: "./images/quetta.png",
        city: "Quetta"
    },
    {
        image: "./images/multan.jpeg",
        city: "Multan"
    },
    {
        image: "./images/faislabad.jpg",
        city: "Faislabad"
    },
    {
        image: "./images/rawalpindi.jpg",
        city: "Rawalpindi"
    },
    {
        image: "./images/sahiwal.jpg",
        city: "Sahiwal"
    },
    {
        image: "./images/hyderabad2.jpg",
        city: "Hyderabad"
    },
    {
        image: "./images/muree.jpg",
        city: "Muree"
    },
    {
        image: "./images/silakot.jpg",
        city: "Sialkot"
    },
    {
        image: "./images/gujranwala.jpg",
        city: "Gujranwala"
    },
    {
        image: "./images/bahwalpur.jpg",
        city: "Bahwalpur"
    },
    {
        image: "./images/abbottabad.jpg",
        city: "Abbottabad"
    },
    {
        image: "./images/wahcant.jpeg",
        city: "Wah Cantt"
    },
    {
        image: "./images/larkana.jpg",
        city: "Larkana"
    },
    {
        image: "./images/deraghazikhan.jpg",
        city: "Dera Ghazi Khan"
    },
    {
        image: "./images/okara.jpg",
        city: "Okara"
    },
    {
        image: "./images/mardan.png",
        city: "Mardan"
    },
    {
        image: "./images/swat.jpg",
        city: "Swat"
    },
    {
        image: "./images/muzafarghar.webp",
        city: "Muzzafarghar"
    },
    {
        image: "./images/bhera.jpg",
        city: "Bhera"
    },
    {
        image: "./images/khushab.jpg",
        city: "Khushab"
    }
];

let cuisines = [
    {
        image: "./imagesCusin/fast.jpeg",
        city: "FastFood"
    },
    {
        image: "./imagesCusin/pizza.jpg",
        city: "Pizza"
    },
    {
        image: "./imagesCusin/desert.jpeg",
        city: "Dessert&Bakes"
    },
    {
        image: "./imagesCusin/pakistani.jpg",
        city: "Pakistani"
    },
    {
        image: "./imagesCusin/beawerges.webp",
        city: "Beverages"
    },
    {
        image: "./imagesCusin/Burger.jpg",
        city: "Burger"
    },
    {
        image: "./imagesCusin/american.jpeg",
        city: "American"
    },
    {
        image: "./imagesCusin/chiness.jpg",
        city: "Chiness"
    },
    {
        image: "./imagesCusin/arabic.jpg",
        city: "Arabic"
    },
    {
        image: "./imagesCusin/afghani.jpg",
        city: "Afghani"
    },
    {
        image: "./imagesCusin/italian.jpg",
        city: "Italian"
    },
    {
        image: "./imagesCusin/turkish.jpg",
        city: "Turkish"
    },
    {
        image: "./imagesCusin/thai.jpg",
        city: "Thai Food"
    },
    {
        image: "./imagesCusin/steet.jpg",
        city: "Street Food"
    },
    {
        image: "./imagesCusin/pan_asia.jpeg",
        city: "Pan Asia"
    },
    {
        image: "./imagesCusin/lebanese.jpg",
        city: "Lebanese"
    },
   
];



let recipes = [
    {
        image: "./imagesRecipe/Rbbq.jpg",
        city: "BBQ"
    },
    {
        image: "./imagesRecipe/Rbriyani.avif",
        city: "Briyani"
    },
    {
        image: "./imagesRecipe/Rbreakfast.jpg",
        city: "BreakFast"
    },
    {
        image: "./imagesRecipe/Rpasta.jpg",
        city: "Pasta"
    },
    {
        image: "./imagesRecipe/Rdrink.jpg",
        city: "Drinks"
    },
    {
        image: "./imagesRecipe/Rsnack.jpeg",
        city: "Snack"
    },
    {
        image: "./imagesRecipe/Rsoup.avif",
        city: "Soup"
    },
    {
        image: "./imagesRecipe/Rcake.avif",
        city: "Cakes"
    },
    {
        image: "./imagesRecipe/Rdessert.jpg",
        city: "Dessert & Sweet"
    },
    {
        image: "./imagesRecipe/Rvegtarian.avif",
        city: "Vegterian"
    },
    {
        image: "./imagesRecipe/Rsalad.jpg",
        city: "Salad"
    },
    {
        image: "./imagesRecipe/Rsauce.jpg",
        city: "Sauce"
    },

];



let cityCardsContainor =document.getElementById("cityCardsContainor");

cities.forEach((data,index)=>{
    cityCardsContainor.innerHTML +=`
    <div class="cityCard  .col-xxl-12  .col-xl-12 col-lg-2 col-md-4 col-sm-12 col-12" >
    <div class="card">
        <div class="image-container">
            
            <img src="${data.image}" alt="Card Image" style="padding: 0;">
        </div>
        <div class="content">
          <h2>${data.city}</h2>
        </div>
        <button class="btn ">Discover</button>
      </div>
</div>
    `
})


let cuisinesCardsContainor =document.getElementById("cuisinesCardsContainor");

cuisines.forEach((data,index)=>{
    cuisinesCardsContainor.innerHTML +=`
    <div class="cityCard  .col-xxl-12  .col-xl-12 col-lg-3 col-md-6 col-sm-12 col-12" >
    <div class="card">
        <div class="image-container">
            
            <img src="${data.image}" alt="Card Image" ">
        </div>
        <div class="content">
          <h2>${data.city}</h2>
        </div>
        <button class="btn ">Discover</button>
      </div>
</div>
    `
})
let recipeCardsContainor =document.getElementById("recipeCardsContainor");

recipes.forEach((data,index)=>{
    recipeCardsContainor.innerHTML +=`
    <div class="cityCard  .col-xxl-12  .col-xl-12 col-lg-2 col-md-4 col-sm-12 col-12" >
    <div class="card">
        <div class="image-container">
            
            <img src="${data.image}" alt="Card Image" ">
        </div>
        <div class="content">
          <h2>${data.city}</h2>
        </div>
        <button class="btn ">Discover</button>
      </div>
</div>
    `
})
