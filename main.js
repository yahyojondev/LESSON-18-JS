// console.log(document);

// console.log(document.title);
// console.log(document.head);

// selecting js 

// const selectabout  = document.getElementById("about");

// console.log(selectabout);

// const selectcontact = document.getElementById("contact");

// console.log(selectcontact);

// const selectdivs = document.getElementsByTagName("div");

// console.log(selectdivs);

// const  selectclass = document.getElementsByClassName("container");
// console.log(selectclass);

// const herotitle = document.querySelector("#hero h1");
// console.log(herotitle);

// const alltitle = document.querySelectorAll("h2");
// console.log(alltitle);

// const navtitle = document.querySelector("nav h1");

// console.log(navtitle.parentNode);
// console.log(navtitle.parentElement);

// const aboutsection = document.getElementById("about");

// console.log(aboutsection.nextSibling);
// console.log(aboutsection.nextElementSibling);

// console.log(aboutsection.previousSibling);
// console.log(aboutsection.previousElementSibling);

// const main = document.getElementById("hero");

// console.log(main.firstChild);
// console.log(main.firstElementChild);

// const herotitle = document.querySelector("#hero h1");

// herotitle.style.color = "red";
// herotitle.style.backgroundColor = "black";
// herotitle.style.fontSize = "40px"

// herotitle.style = `
// color:red;
// background-color: black;
// font-size:30px;
// `

// const herotitlestyle = getComputedStyle(herotitle);

// console.log(herotitlestyle);
// console.log(herotitlestyle.color);


// const contacttitle = document.querySelector("#contact h2");

// contacttitle.classList.add("contact__text")
// contacttitle.classList.remove("contact__title")
// contacttitle.classList.replace("contact__text","contact__title")
// contacttitle.classList.contains("contact__text")
// contacttitle.classList.toggle("text")

// console.log(contacttitle);
// console.log(contacttitle.className);
// console.log(contacttitle.classList );

// const morelink = document.querySelector("#contact a");

// console.log(morelink.href);
// console.log(morelink.target);
// console.log(morelink.placeholder);


// console.log(morelink.getAttribute("href"));
// console.log(morelink.getAttribute("target"));
// console.log(morelink.getAttribute("placeholder"));

// morelink.title = "ma'lumot";
// morelink.setAttribute("title","ko'proq")
// console.log(morelink);

// console.log(morelink.hasAttribute("title"));
// console.log(morelink.hasAttribute("target"));


// MAnipulating

const productCard = document.createElement("div");
productCard.className = "product-card";
const productCardFrame = document.createElement("div");
productCardFrame.className = "product-card__frame"
const productCardcontent = document.createElement("div");
productCardcontent.className = "product-card__content"
const productCardtitle = document.createElement("h1");
productCardtitle.className = "product-card__title"
const productCardprice = document.createElement("p");
productCardprice.className = "product-card__price"
const productCardBnt = document.createElement("button");
productCardBtn.className = "product-card__btn";



const productCardtitletext = document.createTextNode("Hello world");
const productCardpricetext = document.createTextNode("100$");
const productCardBtntext = document.createTextNode("Buy");

productCardFrame.appendChild(productCardimg);


    productCardtitle.appendChild(productCardtitletext);
    productCardtitle.appendChild(productCardpricetext);
    productCardtitle.appendChild(productCardBtntext);


productCardcontent.append(
    productCardtitle,
    productCardprice,
    productCardBnt
)
productCard.append(productCardFrame,productCardcontent);

console.log(productCard);

