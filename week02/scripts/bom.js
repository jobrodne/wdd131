const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("____"); // fill in the blank to reference the unordered list element.

const li = document.createElement("li");

const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌";
li.append(deleteButton);
list.append(li);

<button aria-label="Close" id="close-button">❌</button>
button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        
    }
    deleteButton.addEventListener("click", function() {
        list.remove();
    });
    input.value = "";
    input.focus();
});
