//chunk algorithm
/*
chunkTheArray(["a", "b", "c", "d"], 2);//[["a", "b"], ["c", "d"]]
chunkTheArray(["0", "1", "2", "3", "4", "5"], 4);
//[["0", "1", "2", "3"], ["4", "5"]]
*/
const chunkTheArray = (arr, size) => {
    let result = [];
    let output = [];
    
    for(let i=0; i < arr.length; i++)
    {
        if(output.length < size)
            output.push(arr[i]);
        else
        {
            result.push(output);
            output = [arr[i]]; // Start a new chunk
        }
    }
    
    // Push the last chunk if it's not empty
    if(output.length > 0)
        result.push(output);//

    return result;
}

console.log(chunkTheArray(["a", "b", "c", "d"], 2))
console.log(chunkTheArray(["0", "1", "2", "3", "4", "5"], 4))
