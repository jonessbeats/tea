// Helper function to create a greeting message
function greet(name) {
    return "Hello, " + name + "!";
}

// Prompt the user for their name
function promptName() {
    return prompt("What is your name?");
}

// Main function to greet the user
function main() {
    var name = promptName(); // Call promptName function to get the user's name
    var greeting = greet(name); // Call greet function to create a greeting message
    console.log(greeting); // Output the greeting message to the console
}

// Call the main function to start the program
main();
