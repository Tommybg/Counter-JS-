let count = 0; 
let welcomeGreet = document.getElementById("welcomeGreet") ;
let user_name = prompt("What is your name?");
let greeting = "What´s Popping ";
render = `${greeting} ${user_name}! 🫰 `;
welcomeGreet.textContent = `Welcome ${user_name}!` 
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('increment-btn');
const decreaseButton = document.getElementById("decrease-btn"); 

// Function to update the display
function updateDisplay() {
    countDisplay.textContent = `Count: ${count}`;
}
function update_welcome(){
    welcomeGreet.textContent = render
}
update_welcome()

// Event listener for the INCREMENT button
incrementButton.addEventListener('click', function() {
    count++; // Increment count by 1
    updateDisplay(); // Update the displayed count
});

// Event listener for the DECREASE button
decreaseButton.addEventListener('click', function() {
    if (count > 0) { // Ensure count doesn't go below 0
        count--; // Decrement count by 1
        updateDisplay(); // Update the displayed count
    }
});

// Get the save button element
const saveButton = document.getElementById('save-btn');

// Create a div to display saved counts
// This creates a new div element and adds it to the document body
const savedCountsDiv = document.createElement('div');
savedCountsDiv.id = 'saved-counts';
document.body.appendChild(savedCountsDiv);

// Variable to store saved counts as a string
let savedCounts = "";

// Variable to keep track of the total number of passengers saved
let totalSavedCount = 0;

// Event listener for the SAVE button
saveButton.addEventListener('click', function() {
    totalSavedCount += count; // Add current count to total
    if (savedCounts !== "") {
        savedCounts += " - "; // Add separator if not the first count
    }
    savedCounts += count; // Add current count to saved counts string
    updateSavedCountsDisplay(); // Update the display of saved counts
    count = 0; // Reset current count after saving
    updateDisplay(); // Update the main count display
});

// Function to update the saved counts display
function updateSavedCountsDisplay() {
    // Set the content of the saved counts div
    savedCountsDiv.innerHTML = '<h3 style="color: turquoise;">Saved Counts:</h3>';
    savedCountsDiv.innerHTML += `<p style="color: turquoise;">${savedCounts}</p>`; // Display all saved counts in turquoise
    savedCountsDiv.innerHTML += `<p style="color: turquoise;">Total Passengers: ${totalSavedCount}</p>`; // Display total in turquoise
}

// Initial display update
updateDisplay();
