
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const addButton = document.getElementById("add");
    const listContainer = document.getElementById("listcontainer");

    // Add task when button is clicked
    addButton.addEventListener("click", function () {
        const taskText = input.value.trim();

        if (taskText !== "") {
            // Create list item
            const listItem = document.createElement("li");

            // Create checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            // Create label
            const label = document.createElement("label");
            label.textContent = " " + taskText;

            // Add strikethrough on checkbox toggle
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    label.style.textDecoration = "line-through";
                    label.style.color = "gray";
                } else {
                    label.style.textDecoration = "none";
                    label.style.color = "black";
                }
            });

            // Append checkbox and label to list item
            listItem.appendChild(checkbox);
            listItem.appendChild(label);

            // Append list item to container
            listContainer.appendChild(listItem);

            // Clear input field
            input.value = "";
        }
    });
});







