// Global object sampleObject
const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

// Function to check if a key exists in the object
function hasKey(key) {
  return key in sampleObject;
}

// Function to get the user input and check the key
function checkKey() {
  const inputKey = document.getElementById("keyInput").value; // Get the key from input
  const result = hasKey(inputKey); // Check if the key exists using hasKey function
  document.getElementById("result").innerText = result ? "Key exists!" : "Key does not exist."; // Display result
}
