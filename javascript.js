// script.js

// Define menu items and prices
const menu = {
    "Food Menu": [
        { name: "Beef Nihari", price: 12.99 },
        { name: "Chicken Biryani", price: 10.99 },
        { name: "Mutton Biryani", price: 14.99 },
        { name: "Chicken Karahi", price: 11.99 },
        { name: "Mutton Karahi", price: 14.99 },
        { name: "Chicken Paratha Roll", price: 7.99 },
        { name: "Samosa Chaat", price: 5.99 },
        { name: "Dahi Baray", price: 5.99 },
        { name: "Veggie Samosa (Aloo)", price: 1.50 },
        { name: "Beef or Chicken Samosa", price: 1.75 }
    ],
    "Buckets": [
        // Define bucket items here
    ],
    "Combos": [
        // Define combo items here
    ],
    "Sides": [
        // Define side items here
    ],
    "Others": [
        // Define other items here
    ]
};

// Function to display menu items
function displayMenu() {
    const menuSection = document.getElementById("menu");

    // Loop through each category in the menu
    for (const category in menu) {
        // Create a heading for the category
        const heading = document.createElement("h2");
        heading.textContent = category;
        menuSection.appendChild(heading);

        // Create an unordered list for the items in the category
        const itemList = document.createElement("ul");

        // Loop through each item in the category
        menu[category].forEach(item => {
            // Create a list item for the item
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            // Append the list item to the unordered list
            itemList.appendChild(listItem);
        });

        // Append the unordered list to the menu section
        menuSection.appendChild(itemList);
    }
}

// Call the displayMenu function when the page loads
window.onload = displayMenu;
