/*
================================================================
What will be the time complexity for below program in terms of
Big O notation.
================================================================
*/

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// execution time will grow as 'n' grows.
// Output: O(n)



function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// execution time will grow as 'n' grows till 5 else it will be constant.
// Output: O(1)



function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// execution time will grow as 'n' grows when i exceeds 5.
// Output: O(n)



function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// execution time will grow as 'n' grows.
// Output: O(n)



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

// execution time will grow as 'n' grows.
// Output: O(n^2)