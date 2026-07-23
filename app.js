const container = document.querySelector(".container");
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => createProducts(data));



function createProducts(products){
    let fistProducts = products[0];
    const title  = document.createElement('p');
    const image  = document.createElement('img');
    title.textContent = fistProducts.title;
    image.src = fistProducts.image
    image.style.width = "200px"
    image.style.height = "200px";
    container.appendChild(title);
    container.appendChild(image);
}

  
