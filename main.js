function plus(event){
   
    
    var num=event.target.parentNode.querySelector('span')
    num.innerHTML=Number(num.innerHTML)+1
    sum()
}
function mois (event){
   
    
    var num=event.target.parentNode.querySelector('span')
    num.innerHTML=Number(num.innerHTML)-1
    sum()
}
function Del (event){
var rem=event.target.parentNode.parentNode.parentNode.remove('div')
sum()
}

function like(event){
    
if( event.target.style.color =='red'){
    event.target.style.color='black'
} 
else{event.target.style.color='red'}   

}
function sum(){
    var t1 = document.getElementsByClassName('unit-price')
    var t2 = document.getElementsByClassName('quantity')
    console.log (t1,t2)
    tot=0
    for (var i=0;i<t1.length;i++){
      tot+=  Number(t1[i].innerHTML)* Number(t2[i].innerHTML)
    }
    console.log(tot)
var ht =document.getElementsByClassName('total')
console.log(ht)
ht[0].innerHTML=tot+"$"
console.log(ht)

}
sum()