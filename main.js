const container = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => renderProducts(data));

function renderProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <span class="category">${product.category}</span>
      <div class="title">${product.title.length > 30 ? product.title.slice(0, 20) + "..." : product.title}</div>
      <div class="price">$${product.price}</div>
      <div class="rating">
        ⭐ ${product.rating.rate}  / 5 
        (${product.rating.count} reviews)
      </div>
      <div class="actions">
        <button class="edit" onclick="editProduct(${product.id})">
          Edit
        </button>
        <button class="delete" onclick="deleteProduct(${product.id})">
          Delete
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function editProduct(id) {
  alert("Edit bosildi! Product ID: " + id);
}

function deleteProduct(id) {
  if (confirm("Haqiqatan ham o‘chirmoqchimisiz?")) {
    alert("Delete bosildi! Product ID: " + id);
  }
}
