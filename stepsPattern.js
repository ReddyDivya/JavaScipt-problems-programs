//steps algorithm
/*
steps(2); 
    #
    ##
steps(3); 
    #
    ##
    ###
steps(4); 
    #
    ##
    ###
    ####
*/

const steps = (n) => {
    for(let row=0; row < n; row++)   
    {
        let step = "";
        for(let col=0; col<=row; col++)
        {
            step += "#";
        }
        
        console.log(step);
    }
    console.log();
}

steps(2);
steps(4);
