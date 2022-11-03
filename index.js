function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const myArr = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  const newArr = [];
  let myArr2 = [];
  for (let i = myArr.length-1; i >= 0; i--) {
    /* while (myArr[i][1] <= change) {
      newArr.push(myArr[i]);
      change -= myArr[i][1];
    } */
    let num = 0;
    let myTry = myArr[i][1];
    for (let j = myTry; j <= change; change-=myTry) {
     !newArr.includes(myArr[i]) ? newArr.push([myArr[i][0], num+=myArr[i][1]]) : newArr.push(myArr[i]);
    } if(num>0) //myArr2.push([myArr[i][0], num]);
      if (num < cid[i][1]) {
myArr2.push([myArr[i][0], num])} else {
  let rem = num - cid[i][1] + 0.001;
       change += rem; 
  myArr2.push([myArr[i][0], num = cid[i][1]]) } 
  } 
  
  var total = 0;
  cid.map((item)=> {
    return total += item[1] })
    console.log(total)
    console.log(change)
    let firstIndex = cid.map((item)=> {
      return item[1]
    })
    let myChange = cash-price;
    let result;
    if (total == myChange) {
      return  {status: "CLOSED", change: cid};
    }else if (firstIndex[1] < 0.4  ) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
     
  return  {status: "OPEN", change: myArr2}
      
  console.log(myArr2);
  
  //return newArr;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
