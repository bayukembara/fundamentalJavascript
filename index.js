const getHelloId = document.getElementById("hello");

const getButtonTest = document.getElementById("test");

const getWindowElement = document.body;

getButtonTest.addEventListener("click", e => {
  // Get the current color of the element
  let currentColor = getHelloId.style.color;

  // Check the current color and change it accordingly
  if (currentColor === "red") {
    getHelloId.style.color = "blue";
  } else {
    getHelloId.style.color = "red";
  }
});

getWindowElement.addEventListener("mouseenter", function() {
  getWindowElement.style.backgroundColor = "lightblue"; // Change to your desired color
});

getWindowElement.addEventListener("mouseleave", function() {
  getWindowElement.style.backgroundColor = ""; // Revert to original or another color
});
