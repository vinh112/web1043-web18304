let giatri1
let giatri2
let pt //toán tử
  

function   giatritruyenvao(buton){ //khi nhấn vào một nút trên bàn phím. 
    const presedValue =buton.innerText // lấy giá trị được hiển thị trên nút.
    const  resultInput =document.getElementById('resultInput')

if(isNaN(presedValue)){
    if(presedValue =='C'){
        giatri1="";
    giatri2="";
    pt=undefined;
    resultInput.value="";
    return;
}
    

if(presedValue =='='){
    const result = pheptinh(giatri1,giatri2,pt);
    resultInput.value=result;
    giatri1="";
    giatri2="";
    pt=undefined;}
    else{
        pt=  presedValue;
    }
} 

    
    else{
    if(pt){
        giatri2 +=presedValue;
        resultInput.value =giatri2;

    }
    else{
        giatri1 +=presedValue;  
        resultInput.value=giatri1;  
    }
}
}
function pheptinh(giatri1, giatri2, pt) {

    const number1 = parseFloat(giatri1);
    const number2 = parseFloat(giatri2);
  
    
    if (isNaN(number1) || isNaN(number2)) {
      return NaN;
    }
  
    
    switch (pt) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case ':':
        return number1 / number2;
    }}