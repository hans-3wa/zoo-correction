import Zoo from "./class/Zoo.js";

const zoo = new Zoo()
const enclosure = document.querySelectorAll('section')
zoo.constructZoo(enclosure)
zoo.listenActions()

