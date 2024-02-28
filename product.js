// JavaScript Document

const docName = document.getElementById("productname");
const docImage = document.getElementById("productimg");
const docPrice = document.getElementById("productprice");
const docDesc = document.getElementById("productdesc");

if((docName !== null) && (docName !== "")){
	docName.innerHTML=localStorage.getItem("name");
}

if((docImage !== null) && (docImage !== "")){
docImage.src=localStorage.getItem("image");
}

if((docPrice !== null) && (docPrice !== "")){
var price = "Price : " + localStorage.getItem("price");
docPrice.innerHTML=price;
}

if((docDesc !== null) && (docDesc !== "")){
docDesc.innerHTML=localStorage.getItem("desc");
}

console.log("done!");