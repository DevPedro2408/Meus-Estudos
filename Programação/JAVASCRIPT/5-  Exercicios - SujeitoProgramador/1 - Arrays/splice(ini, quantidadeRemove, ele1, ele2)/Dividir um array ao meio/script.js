const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array2 = array1.splice(-5, Number.MAX_VALUE)
console.log(array1,"-",array2)