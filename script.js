document.addEventListener("DOMContentLoaded", function() {
    // Завантажуємо дані з JSON файлу
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            data.products.forEach(product => {
                // Створюємо HTML елементи для кожного товару
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-card');

                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p class="category">${product.category}</p>
                        <p class="price">₴${product.price}</p>
                        <p class="description">${product.description}</p>
                        <button class="btn-buy">Купити</button>
                    </div>
                `;

                container.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Помилка завантаження продуктів:', error);
        });
});
