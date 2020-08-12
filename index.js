/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 18;
if (votingAge > 18) {
	console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var num1 = 0;
var num2 = 0;

if (num1 == num2) {
	var newNum = num1++;
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var yearString = '1999';
var year = Number('1999');

//Task d: Write a function to multiply a*b
function multiply (a, b) {
	return a * b;
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function dogYears (age) {
	ageDogYears = age * 7;
	message = age + ' years is ' + ageDogYears + ' dog years.';
	return message;
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to fed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function feeding (dogAge, dogWeight) {
	// Is puppy //
	if (dogAge < 1) {
		if (dogAge >= 0.166667 && dogAge < 0.333333) {
			foodAmount = dogWeight * 0.10;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}

		else if (dogAge >= 0.333333 && dogAge < 0.583333) {
			foodAmount = dogWeight * 0.05;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}
		
		else if (dogAge >= 0.583333 && dogAge < 1) {
			foodAmount = dogWeight * 0.04;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}
	}

	else if (dogAge >= 1) {
		if (dogWeight <= 5) {
			foodAmount = dogWeight * 0.05;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}

		else if (dogWeight >= 6 && dogWeight <= 10) {
			foodAmount = dogWeight * 0.04;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}

		else if (dogWeight >= 11 && dogWeight <= 15) {
			foodAmount = dogWeight * 0.03;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}

		else if (dogWeight > 15) {
			foodAmount = dogWeight * 0.02;
			message = 'Your gog needs ' + foodAmount + ' punds of dog food a day.';
			return message;
		}
	}
}

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockPaperSissors (you) {
	computer = Math.floor(Math.random() * 3) + 1;
	
	// 1 = rock
	// 2 = paper
	// 3 = sissors
	
	if (you === computer) {
		message = 'It\'s a draw!';
		return message;
	}

	// Rock results //
	else if (you === 1 && computer === 2) {
		message = 'Paper covers rock. You lose!'
		return message;
	}

	else if (you === 1 && computer === 3) {
		message = 'Rock breaks sissors. You win!'
		return message;
	}

	// Paper results //
	else if (you === 2 && computer === 1) {
		message = 'Paper covers rock. You win!'
		return message;
	}

	else if (you === 2 && computer === 3) {
		message = 'Sissors cuts paper. You lose!'
		return message;
	}

	// Sissors results //
	else if (you === 3 && computer === 1) {
		message = 'Rock breaks sissors. You lose!'
		return message;
	}

	else if (you === 3 && computer === 2) {
		message = 'sissors cuts paper. You win!'
		return message;
	}

	else {
		message = 'Invalid choice, please try again.'
		return message;
	}
}

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kilometersToMiles(km) {
	miles = km / 1.609;
	message = km + ' kilometers is ' + miles + ' miles.'
	return message;
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCentimeters(feet) {
	centimeters = feet * 30.48;
	message = feet + ' feet is ' + centimeters + ' centimeters.';
	return message;
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(num) {
	for (i = num; i > 0; i--) {
		console.log(i + ' bottles of soda on the wall, ' + i + ' bottles of soda, take one down pass it around ' + (i - 1) + ' bottles of soda on the wall!');
	}
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be C
//60s should be D
//and anything below 60 should be F
function LetterGrade(grade) {
	if (grade >= 90) {
		message 'A grade of ' + grade + ' is an A.';
		return message;
	}

	else if (grade >= 80 & grade < 90) {
		message 'A grade of ' + grade + ' is a B.';
		return message;
	}

	else if (grade >= 70 & grade < 80) {
		message 'A grade of ' + grade + ' is a C.';
		return message;
	}

	else if (grade >= 60 & grade < 70) {
		message 'A grade of ' + grade + ' is a D.';
		return message;
	}

	else if (grade < 60) {
		message 'A grade of ' + grade + ' is an F.';
		return message;
	}
}

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object