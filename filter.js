console.log("JS Connected")

const data = [
    {
        id: 1,
        name: "Titan Mens",
        img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=800&sh=800",
        price: 75,
        cat: "Casual",
    },
    {
        id: 2,
        name: "Rolex Ladies",
        img: "https://i.pinimg.com/736x/7b/ed/d9/7bedd9e49cf8339fbb1efbb96883b652.jpg",
        price: 150,
        cat: "Luxury",
    },
    {
        id: 3,
        name: "Tissot Ladies",
        img: "https://blog.myntra.com/wp-content/uploads/2019/09/Tissot-Myntra.jpg",
        price: 200,
        cat: "Dress",
    },
    {
        id: 4,
        name: "Ariel Watch",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7exwZN8UWY_d2lkOC53F1Yob1kDbs1zmAw&s",
        price: 110,
        cat: "Luxury",
    },
    {
        id: 5,
        name: "James Prett",
        img: "https://assets.architecturaldigest.in/photos/6008308bcce5700439e11b74/16:9/w_2560%2Cc_limit/Audemar-Piguet-1366x768.jpg",
        price: 100,
        cat: "Sports",
    },
    {
        id: 6,
        name: "Rolex Men Special",
        img: "https://luxurywatchesusa.com/wp-content/uploads/2021/02/buy-watches-luxury-watches-usa.jpg",
        price: 250,
        cat: "Casual",
    },
]

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".input")
const catsContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceDile")

const displayProducts = (filterProds) => {
    productsContainer.innerHTML = filterProds.map(
        (prod) =>
            `
        <div class="watchBox">
                    <img src=${prod.img} alt="">
                    <div class="watchName">${prod.name}</div>
                    <div class="watchPrice">$${prod.price}</div>
                </div>
        `
    ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const val = e.target.value.toLowerCase();

    if (val) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(val) !== -1))
    }
    else {
        displayProducts(data);
    }
});

const setCat = () => {
    const allcat = data.map(item => item.cat);
    const cate = ["All", ...allcat.filter((item, i) => {
        return allcat.indexOf(item) == i;
    })];

    console.log(cate)
    catsContainer.innerHTML = cate.map(cat =>
        `
            <span class="cat">${cat}</span>

        `
    ).join("")

     catsContainer.addEventListener("click",(e)=>{
        const selcCat = e.target.textContent;
        selcCat === "All"
        ? displayProducts(data)
        :displayProducts(data.filter((item)=>item.cat === selcCat))
     })
}

const setPrices = ()=>{
    const priceList = data.map(p => p.price )
    // console.log(priceList);
    const minPrice =  Math.min(...priceList);
    const maxPrice =  Math.max(...priceList);
    
    console.log(minPrice,maxPrice)

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$"+ maxPrice;

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter(item => item.price <=e.target.value));
    })
}

setCat();
setPrices();


