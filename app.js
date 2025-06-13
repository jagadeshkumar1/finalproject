// Enhanced product data with more products and images
const products = [
    {
        name: "Wireless Headphones",
        description: "Experience high-fidelity sound with noise cancellation.",
        price: "$59.99",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495",
        rating: 4.7
    },
    {
        name: "Smart Watch",
        description: "Track your fitness and notifications in style.",
        price: "$89.99",
        image: "https://image.made-in-china.com/202f0j00NcYWuLiICKRy/HD-Screen-Watch-for-Men-Smart-Watch-Bluetooth-Calling-Smartwatch-2023-Fashion-Business-Clock-New-Sports-Wristwatches-Ws5.webp",
        rating: 4.5
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and long battery life.",
        price: "$39.99",
        image: "https://arcticfox.com/cdn/shop/files/8_b5937b5b-8c26-4450-a248-3162a20e83a3.jpg?v=1706020146",
        rating: 4.6
    },
    {
        name: "DSLR Camera",
        description: "Capture stunning photos with this professional camera.",
        price: "$499.99",
        image: "https://gppro.in/wp-content/uploads/2024/11/NIKON-D-850-WITH-24-120MM-KIT-GP001471-1.jpg",
        rating: 4.8
    },
    {
        name: "Gaming Mouse",
        description: "Ergonomic design with customizable buttons.",
        price: "$24.99",
        image: "https://m.media-amazon.com/images/I/61MJXznbAhS._AC_UF1000,1000_QL80_.jpg",
        rating: 4.4
    },
    {
        name: "Laptop Backpack",
        description: "Spacious, water-resistant, and stylish for daily use.",
        price: "$34.99",
        image: "https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843",
        rating: 4.3
    }
];

// Function to render products with ratings
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <div class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} <span>(${product.rating})</span></div>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <button class="buy-btn">Buy Now</button>
        `;
        productList.appendChild(card);
    });
}

// Fancy contact form handler
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.querySelector('button').disabled = true;
            form.querySelector('button').textContent = "Sending...";
            setTimeout(() => {
                alert('Thank you for contacting us!');
                form.reset();
                form.querySelector('button').disabled = false;
                form.querySelector('button').textContent = "Send";
            }, 1200);
        });
    }

    // Buy button interaction
    document.getElementById('product-list').addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-btn')) {
            const productName = e.target.parentElement.querySelector('h3').textContent;
            alert(`Thank you for your interest in "${productName}"! Our team will contact you soon.`);
        }
    });
});