// Fetch JSON data from the API
fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
    .then(response => response.json())
    .then(data => {
        // Ensure 'products' key exists
        if ('products' in data) {
            const products = data.products;

            // Sort products by descending popularity
            const sortedProducts = Object.values(products)
                .sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));

            // Display the sorted data
            const productsContainer = document.getElementById('products-container');
            sortedProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Popularity: ${product.popularity}</p>
                    <p>Subcategory: ${product.subcategory}</p>
                `;
                productsContainer.appendChild(productDiv);
            });
        } else {
            console.log("No 'products' key found in the JSON data.");
        }
    })
    .catch(error => console.error("Error fetching data:", error));
