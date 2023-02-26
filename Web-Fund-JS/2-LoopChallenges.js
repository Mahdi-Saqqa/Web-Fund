function printodds(){
  for (let i=1; i<=20;i++){
    if(i%2==1) console.log(i);
  }
}
printodds();
function decreasingmultiples(){
  for(let i=100;i>=0;i--){
    if(i%3==0)console.log(i);

  }
}
decreasingmultiples();
function printsequence(){
  for(let i=4;i>-4;i-=1.5){
    console.log(i);
  }
}
printsequence()
function sigma(){
  let sum=0;
  for(let i=0;i<=100;i++) sum+=i;
  console.log(sum)
}
sigma();
function factprial(){
  let product=1;
  for(let i=1; i<=12;i++)product*=i;
  console.log(product)
}
factprial();