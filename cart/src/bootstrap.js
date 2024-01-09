import faker from "faker";

const number = faker.random.number();

document.getElementById("dev-cart").innerHTML =
  "You have " + number + " items in your cart.";
