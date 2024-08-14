let dollarInGrivnya = 26;
let step = 10;
let startValue = 10;
let endValue = 100;

for (let i = startValue; i <= endValue; i += step) {
  console.log(
    `Dollars in Grivnyas: ${i} * ${dollarInGrivnya} = ${i * dollarInGrivnya}`
  );
}
if (endValue * dollarInGrivnya) {
  console.log("We are rich!");
}
