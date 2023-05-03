//time complexity is O(N) because use of hashMap...
function zeroPair(array) {
    //map declaration
      const hashMap = new Map();
      //array iteration
      for (let i = 0; i < array.length; i++) {
          
        const curr = array[i];
        const next = -curr;
        //checking the element present in the map
        if (hashMap.has(next)) {
          return [next, curr];
        }
        hashMap.set(curr, i);
      }
      return "No elements found";
    }
    
    // given array elements
    const array = [-4, 6, 3, -2, -1,8];
    //invoking the function
    const output = zeroPair(array);
    console.log(output);