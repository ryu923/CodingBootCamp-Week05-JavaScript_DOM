// Week05 - Warming Up

// Q.   Take an array and remove every second element out of that array.
//      Always keep the first element and start removing with the next element.
// Example: myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];


// My Solution
function removeEveryOther(arr){
  
    var newArray = [];

    for(var i = 0; i < arr.length; i++)
    {
        if(i % 2 === 0)
        {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

// Tim's Solution 1
function removeEveryOther(arr){
    let newArr = [];
    
    for(let i; i < arr.length; i++)
    {
        if(i % 2 === 0)
            newArr.push(arr[i]);
    }

    return newArr;
}

// Tim's Solution 2
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
        return index % 2 === 0;
    });
}