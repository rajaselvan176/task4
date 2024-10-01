function add(a,b,c){
    console.log(a+b+c)
}
let arr=[10,20,30];
add(...arr);
add(10,20,30);
add(arr[0],arr[0],arr[1]);
add(...arr)
console.log(...arr);
