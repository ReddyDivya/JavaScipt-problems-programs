//Find duplicate element from an array

const findDuplicateElements = (vArray) => {
    let vSameElement = vArray[0];
    
    for(let i=1; i<vArray.length; i++){
        if(vSameElement == vArray[i])
            vSameElement = vArray[i];
    }
    
    return vSameElement;
}

console.log("Duplicate Element from the Array is "+ findDuplicateElements([2,4,5,6,7,8,2,9]));//2
