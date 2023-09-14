//a for loop
function writeCards(names, eventName) {
    const thankYouMessages = []; // Create an empty array to store the messages
  
    for (let i = 0; i < names.length; i++) {
      // Iterate through the names array
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message); // Add the message to the array
    }
  
    return thankYouMessages; // Return the array of thank you messages
}
  
const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday";
const messages = writeCards(names, eventName);
//console.log(messages);

//a while loop
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
}  
  
const number = 10
countDown(number);