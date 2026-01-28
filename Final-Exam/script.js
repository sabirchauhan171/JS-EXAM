var products = [
  {
    name: "Mobile",
    price: 15000,
    image: "./Image/Mobile.jpg"
  },
  {
    name: "Laptop",
    price: 50000,
    image: "./Image/Laptop.jpg"
  },
  {
    name: "Headphones",
    price: 2000,
    image: "./Image/Headphone.jpg"
  },
  {
    name: "Keyboard",
    price: 1500,
    image: "./Image/Keyboard.jpg"
  }
];
function displayProducts(list) {

  var productDiv = document.getElementById("productList");
  productDiv.innerHTML = "";

  for (var i = 0; i < list.length; i++) {

    var name = list[i].name;
    var price = list[i].price;
    var img = list[i].image;

    productDiv.innerHTML = productDiv.innerHTML +
      "<div class='product'>" +
        "<img src='" + img + "' class='product-img'>" +
        "<p>" + name + " - Rs." + price + "</p>" +
      "</div>";
  }
}
function searchProduct() {

  var searchValue = document.getElementById("searchInput").value;
  searchValue = searchValue.toLowerCase();

  var result = [];

  for (var i = 0; i < products.length; i++) {

    var productName = products[i].name.toLowerCase();

    if (productName.indexOf(searchValue) !== -1) {
      result.push(products[i]);
    }
  }

  if (result.length == 0) {
    document.getElementById("productList").innerHTML =
      "No results found";
  } else {
    displayProducts(result);
  }
}
displayProducts(products);
