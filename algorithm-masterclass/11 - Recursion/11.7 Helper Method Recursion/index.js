/*
================================================================

Helper Method Recursion:
--------------------------
Helper method recursion is a function inside a function which 
helo the outer function to retain its values and only iterate 
over the inner function in order to achieve the recursion.

================================================================
*/

function collectOdds(nums){
    // if you are pushing the values in here, and calling collectOdds 
    // as a recursion then every time result array will be overriden 
    // with empty array []
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

collectOdds([1,2,3,4,5,6,7,8,9]);