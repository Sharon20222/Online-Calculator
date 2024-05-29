// Function to append a value to the screen
function appendToScreen(value) {
    var screen = document.getElementById("screen");
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("screen").value = "";
}

// Function to calculate the result using eval()
function calculateResult() {
    var screen = document.getElementById("screen");
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = "Error";
    }
}
