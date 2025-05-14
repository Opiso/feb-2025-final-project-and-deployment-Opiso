document.addEventListener("DOMContentLoaded", function () {

    const hoverDivs = document.querySelectorAll(".portfolio-item-wrapper");

    hoverDivs.forEach(hoverDiv => {

        hoverDiv.addEventListener("mouseover", function () {
            hoverDiv.classList.add('portfolio-item-wrapper-hover');

        });

        hoverDiv.addEventListener("mouseout", function () {
            hoverDiv.classList.remove('portfolio-item-wrapper-hover');

        });
    });

    //  Load footer.html
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading footer:", error);
        });


        const productLinks = document.querySelectorAll(".product");
        const detailsDiv = document.querySelector(".specific-product-details");
      

        //  product info with multiple images
        const productDetails = {
          "Balls": [
            {
            name: "Puma",
            price: "Kshs 3,500",
            description: "Size 5, synthetic leather, FIFA-certified and built for performance.",
            image: [
              "PUMA.jpg",
              "Mitre.jpg",
              "Mikasa.jpg",
              "mikasa tubeless.jpg",
            ]
        },
        {
            name: "Mikasa",
            price: "Kshs 3,000",
            description: "Size 5, synthetic leather, FIFA-certified and built for performance.",
            image: [
              "Mikasa.jpg",
              
            ]
        },
        {
            name: "Mitre",
            price: "Kshs 4,000",
            description: "Size 5, synthetic leather, FIFA-certified and built for lasting performance.",
            image: [
              "Mitre.jpg",
                ]
            },
        ],
        
          "Boots": [
            {
                name: "adidas-crazyfast-messi1",
                price: "Kshs 5,000",
                description: "High-traction football boots available in all sizes.",
                image: [
                  "adidas-crazyfast-messi1.jpg",
                ]
            },
            {
                name: "nike-air-zoom-mercuriall",
                price: "Kshs 5,000",
                description: "High-traction football boots available in all sizes.",
                image: [
                "nike-air-zoom-mercuriall.jpg",
                ]
            },
            {
                name: "puma-football-ultra-5",
                price: "Kshs 6,000",
                description: "High-traction football boots available in all sizes. Fitted with all-weather grip.",
                image: [
                "puma-football-ultra-5.jpg",
                ]
            },
        ],

          "Running shoes": [
            {
                name: "on-running-cloudwander-waterproof",
                price: "Kshs 2,000",
                description: "Light and highly comfortable with a soft inner lining. Built for high performance",
                image: [
                "on-running-cloudwander-waterproof.jpg",
                ]
            },
            {
                name: "asics-gel-kayano-14-whitetai-chi-yellow",
                price: "Kshs 2,500",
                description: "Highly comfortable and also suits rocky surfaces. Available in all sizes.",
                image: [
                "asics-gel-kayano-14-whitetai-chi-yellow.jpg",
                ]
            },
            {
                name: "nike-air-zoom-guide-10-running-sneakers",
                price: "Kshs 2,000",
                description: "High-traction shoes available in all sizes.",
                image: [
                "nike-air-zoom-guide-10-running-sneakers.jpg",
                ]
            },
        ],
        "Trainers": [
            {
                name: "training beebs",
                price: "Kshs 2,000",
                description: "11 pieces, very high quality.",
                image: [
                "training beebs.jpg",
                ]
            },
            {
                name: "trainer boots",
                price: "Kshs 2,000",
                description: "High-traction quality training shoes on muddy suarfaces. Available in all sizes.",
                image: [
                "trainer boots.jpg",
                ]
            },
            {
                name: "agility hurdles",
                price: "Kshs 1,500",
                description: "For maintaining high stamina and endurance. ",
                image: [
                "agility hurdles.jpg",
                ]
            },
            {
              name: "markers",
              price: "Kshs 1,100",
              description: "Contains 42 pieces of high quality markers. Fully twistable",
              image: [
              "markers.jpg",
              ]
          },
        ],
        "Jerseys": [
            {
                name: "jerseys",
                price: "Kshs 1,300",
                description: "Original quality EPL jerseys. Available in large, X-large and XX-large sizes.",
                image: [
                "jerseys.jpg",
                ]
            },
          ],
        "Others": [
            {
                name: "white football net",
                price: "Kshs 5,300",
                description: "Standard football goal size, highly durable.",
                image: [
                "white goalpost net.jpg",
                ]
            },
            {
              name: "volleyball net",
              price: "Kshs 2,500",
              description: "Standard volleyball ring size, highly durable.",
              image: [
              "volleyball net.jpg",
              ]
            },
            {
              name: "goalpost net",
              price: "Kshs 5,000",
              description: "Standard size, highly durable.",
              image: [
              "goalpost net.jpg",
              ]
            },
            {
              name: "shin guard",
              price: "Kshs 500",
              description: "Fitted with a sponge inner lining, highly elastic.",
              image: [
              "shin guard.jpg",
              ]
            },
            {
              name: "Vuvuzela",
              price: "Kshs 350",
              description: "Can be deassembled and easily twistable.",
              image: [
              "vuvuzela.jpg",
              ]
            },
          ]
    };
      
    productLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent page jump

        productLinks.forEach(link => link.style.color = "");

        this.style.color = "black";
    
    
        const category = this.dataset.product;
        const products = productDetails[category];
    
        // Clears the previous content
        detailsDiv.innerHTML = "";
    
        if (products && products.length > 0) {
          // Create a wrapper for the products (the grid container)
          const gridWrapper = document.createElement("div");
          gridWrapper.classList.add("portfolio-items-wrapper");
    
          products.forEach(product => {
            const firstImage = product.image[0] || "default.jpg";
    
            const productHTML = `
              <div class="portfolio-item-wrapper" id="portfolio-item-wrapper">
                <div class="img-text-wrapper">
                  <div class="logo-wrapper">
                    <img class="product-image" src="static/images/products/${firstImage}" alt="Image of ${product.name}">
                  </div>
                  <div class="subtitle d-flex">
                    <p class="product-name">${product.name}
                      <span class="product-price"> - ${product.price}</span><br>
                          <span class="product-description"><a class="btn description text-info" href="#" onclick=" productDescribe(event, '${product.description}')">Description: </a> <span class="text-light product-description-text" id="product-description-text"></span></span> 
                    </p>
                  </div>
                  <div class="cart d-flex justify-content-center" style="background-color: rgb(3, 119, 3);">
                    <a class="add-to-cart" href="#">Add to Cart</a>
                  </div>
                </div>
              </div>
            `;
    
            // Append the individual product to the grid wrapper
            gridWrapper.innerHTML += productHTML;
          });
    
          // Append the grid wrapper to the detailsDiv
          detailsDiv.appendChild(gridWrapper);
        } else {
          detailsDiv.innerHTML = `<p>No products available in "${category}".</p>`;
        }
      });
    });

        // JavaScript to move the background image smoothly
        let offsetX = 0;
        let offsetY = 0;
    
        function animateBackground() {
          // Increment the offsets to make the background "dance"
          offsetX += 0.1; 
          offsetY += 0.3;
    
          document.querySelector('.contact-details').style.backgroundPosition = `${offsetX}% ${offsetY}%`;
    
          // Loop the animation smoothly
          requestAnimationFrame(animateBackground);
        }
        animateBackground();
    
   
});