//Pyramid
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        // Create spaces before the hashes
        let spaces = ' '.repeat(height - i);//4, 3, 2, 1, 0

        // Create the hashes
        let hashes = '#'.repeat(i * 2 - 1); //#, ###, #####, #######, #########

        // Combine spaces and hashes and print the row
        console.log(spaces + hashes);
    }
}

// Example usage
generatePyramid(5);

/*
Ouput:
    #    
   ###   
  #####  
 #######  
#########
*/

/*
Explanation:
- i * 2 - 1 => It is multiplied by 2 to account for both sides of the pyramid, and then subtracts 1 to ensure that the center of the pyramid has only one hash.
- 
*/
