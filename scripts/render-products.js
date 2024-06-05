const container = document.querySelector('.services');
const products = [
    {
        imagePath: "assets/Images/spaghetti.jpg",
        title: "OSOFT SPAGHETTI",
        description: "Indulge in our classic Spaghetti, featuring perfectly cooked pasta smothered in a rich and savory tomato sauce, seasoned with herbs and spices. Available with your choice of hearty meatballs, grilled chicken, or a vegetarian medley, this dish is a timeless favorite that satisfies every craving.",
    },

    {
        imagePath: "assets/Images/soup.jpg",
        title: "OSOFT SOUP/STEW",
        description: "Warm up with our comforting soups and hearty stews. From classic chicken noodle to savory beef stew, our dishes are crafted with fresh ingredients and aromatic spices, promising flavors that satisfy and comfort.",
    },
    
    {
        imagePath: "assets/Images/sardine.jpg",
        title: "OSOFT SARDINE BREAD",
        description: "A delightful fusion of soft, freshly baked bread and savory sardines. Osoft sardine bread is perfect for a quick snack or a light meal, offering a unique and flavorful twist that's sure to satisfy your taste buds.",
    },

    {
        imagePath: "assets/Images/sausage-roll.jpg",
        title: "OSOFT SAUSAGE-ROLL",
        description: "Juicy, flavorful sausages that are perfect for any meal. Whether you're enjoying them for breakfast, lunch, or dinner, osoft sausages are crafted with high-quality ingredients and seasoned to perfection.",
    },
    
    {
        imagePath: "assets/Images/eggroll.jpg",
        title: "OSOFT EGG-ROLL",
        description: "Crispy on the outside, soft and savory on the inside. Our eggrolls are filled with a delicious mixture of eggs and seasonings, making them a perfect snack or appetizer for any time of the day.",
    }
];

products.forEach(product => {
    const productHTML = `
        <div class="each-service">
            <img src="${product.imagePath}" class="service-img">
            <center>
                <hr>
            </center>
            <div class="service-description">
        
                <div class="title">
                    ${product.title}
                </div>
                <div class="description">
                    ${product.description}
                </div>
            </div>
            <div class="middle">
                <div class="button"><a href="book-online.html">Order</a></div>
            </div>
        </div>
    `;
    container.innerHTML += productHTML;
});

