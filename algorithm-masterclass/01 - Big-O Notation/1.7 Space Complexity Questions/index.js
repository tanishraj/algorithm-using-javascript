/*
================================================================
What will be the space complexity for below program in terms of
Big O notation.
================================================================
*/

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// Space Complexity: O(1)




function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// Space Complexity: O(n)



function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

// Space Complexity: O(n^2)



function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Space Complexity: O(1)



function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// Space Complexity: O(1)