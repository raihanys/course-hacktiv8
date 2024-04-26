/* 
Pseudocode
STORE "count" AS 1

WHILE "count" < 11
    DISPLAY "count"
    COMPUTE "count" mod 2
    STORE "remainder" to result of calculation
    
    IF "remainder" EQUALS &
        DISPLAY "EVEN"
    ELSE
        DISPLAY "ODD
        
COMPUTE "count" + 1
STORE "count" to result of calculation
*/
let count = 1;
while (count < 11) {
  console.log(count);
  const remainder = count % 2;
  if (remainder === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
  count = count + 1;
}
