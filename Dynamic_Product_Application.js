document.addEventListener('DOMContentLoaded', () => {
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const productRatingInput = document.getElementById('product-rating');
    const addProductButton = document.getElementById('add-product');
    
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');
    
    const products = [];

    function createBar(value, label) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 10}px`;
        bar.innerHTML = `<span>${label}</span>`;
        return bar;
    }

    function updateGraphs() {
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        products.forEach(product => {
            priceGraph.appendChild(createBar(product.price, product.name));
            ratingGraph.appendChild(createBar(product.rating, product.name));
        });
    }

    addProductButton.addEventListener('click', () => {
        const name = productNameInput.value.trim();
        const price = parseFloat(productPriceInput.value);
        const rating = parseFloat(productRatingInput.value);

        if (name && !isNaN(price) && !isNaN(rating)) {
            products.push({ name, price, rating });
            updateGraphs();
        }
    });

    document.getElementById('sort-price').addEventListener('click', () => {
        products.sort((a, b) => a.price - b.price);
        updateGraphs();
    });

    document.getElementById('sort-rating').addEventListener('click', () => {
        products.sort((a, b) => a.rating - b.rating);
        updateGraphs();
    });
});
