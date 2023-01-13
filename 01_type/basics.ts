const add = function (number1:number,number2:number,showResult:boolean,phrase:string) {
    if(showResult){
        console.log(phrase+number1+number2);
        
    }else{
        return number1+number2;

    }


}

let n1:number;
n1=5;
const n2=2;
const result = true;
const resultPhrase = "result is ";

console.log(add(n1,n2,result,resultPhrase));
