// Select the ordered list
let list = document.getElementById("infi-list");

// Function to add list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        let li = document.createElement("li");
        li.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(li);
    }
}

// Initial 10 list items
addListItems(10);

// Scroll event listener to detect when user reaches the end of the list
window.addEventListener("scroll", function() {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) { // Check if scrolled to bottom
        addListItems(2); // Add 2 more items
    }
});
