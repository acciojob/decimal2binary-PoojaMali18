function decimalToBinary(num) {
  // Check if the input is not a positive integer
  if (!Number.isInteger(num) || num < 0) {
    return "Invalid input. Please provide a non-negative integer.";
  }

  // Handle the special case of 0
  if (num === 0) {
    return "0";
  }

  let binary = ""; // Initialize an empty string to store the binary representation

  // Convert the decimal number to binary
  while (num > 0) {
    binary = (num % 2) + binary; // Get the remainder and prepend it to the binary string
    num = Math.floor(num / 2); // Divide the number by 2
  }

  return binary;
}
window.decimalToBinary = decimalToBinary;


