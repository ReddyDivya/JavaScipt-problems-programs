// Return a random number from a given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
  
  //if start range is greater than end range, switch them
	if(rangeStart > rangeEnd)
	{
		[rangeStart, rangeEnd] = [rangeEnd, rangeStart];
	}

	let difference = Math.floor(rangeEnd - rangeStart);

	let randomNum = Math.floor(Math.random() * difference) + rangeStart;
	
	return randomNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(10, 5)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(100, 150)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(50, 15)}`);
