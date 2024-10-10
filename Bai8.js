
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTips = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tipss = [];
const totalss = [];

const billsLen = billss.length;
for (let index = 0; index < billsLen; index++) {
    const element = billss[index];
    tipss.push(calcTips(element));
    totalss.push(element + tipss[index]);
}

const calcAveragee = (arr) => {
    var sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
};
console.log("--------------------------------Bài 8--------------------------------");

console.log(calcAveragee(totalss));
