//usando map para somar os valores de dois arrays entre si 
var someNumbers = [1,2,10,57];
var someNumbers2 = [2,2,150,257];

//uso o map pra percorrer os dois vetores somando item por item 
var sum = someNumbers.map((a,b) => a + someNumbers2[b]);

console.log(sum)

  