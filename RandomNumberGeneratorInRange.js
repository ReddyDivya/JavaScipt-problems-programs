// Return a random number from a given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
	//1. if start range is greater than end range, switch them
	if(rangeStart > rangeEnd)
	{
		//destructure assignment
		[rangeStart, rangeEnd] = [rangeEnd, rangeStart];
	}
	
	//2. find the difference between the range
	let difference = Math.floor(rangeEnd - rangeStart);
	
	//3. find the random number starting from the given rangeStart
	let randomNum = Math.floor(Math.random() * difference) + rangeStart;
	
	return randomNum;
}//randomNumberGeneratorInRange

console.log(`My random number: ${randomNumberGeneratorInRange(10, 5)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(100, 150)}`);
console.log(`My random number: ${randomNumberGeneratorInRange(50, 15)}`);
