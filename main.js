import {myName, greet} from "./greeting.js"
import { celsiusToFahrenheit } from "./temperature.js";
import { calculateFallDistance } from "./fallDistance.js"
import { concatStrings } from "./concatString.js";
import { calculateAverage } from "./average.js";

greet()
console.log(celsiusToFahrenheit(5))
console.log(calculateFallDistance(7))
console.log(calculateAverage(3,5,8))
console.log(concatStrings('привет', 'мир'))