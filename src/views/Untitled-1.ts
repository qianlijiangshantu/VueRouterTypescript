(function () { 
    var x = "Hello tom";
    var y = "thank you";   
    console.log(x+" "+y)     
 })();
var myFunction = new Function("a","b","return a * b");
var x =myFunction(4,3);
console.log(x); 
// function disp(s1:string):void;
// function disp(n1:number,s1:string):void;
function disp(x:any,y?:any):void{
    console.log(x);
    console.log (y);
}
disp("abc")
disp(1,"xyz");

var arr ={1:,2 ,3};

for (let index in arr) {
    let res= index + 1;
    console.log(res)
}