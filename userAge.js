//Problem 3

//Categorizing user age
function categorizeAge(age) {
    if (age < 5) {
        console.log("User is a toddler (under 5 years)."); //logging the appropriate message
    } else if (age >= 5 && age <= 12) {
        console.log("User is a Child (5-12 years)."); //logging the appropriate message
    } else if (age >= 13 && age <= 19) {
        console.log("User is a Teenager (13-19 years)."); //logging the appropriate message
    } else if (age >= 20 && age <= 35) {
        console.log("User is a Young Adult (20-35 years)."); //logging the appropriate message
    } else if (age >= 36 && age <= 60) {
        console.log("User is Middle-Aged (36-60 years)."); //logging the appropriate message
    } else {
        console.log("User is a Senior (over 60 years)."); //logging the appropriate message
    }
}

// Example usage
const userAge = 25; // Change this value to test different ages
categorizeAge(userAge);

