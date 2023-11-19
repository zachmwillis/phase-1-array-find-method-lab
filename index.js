// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(wins) {
    const superbowlsWon = wins.find(record => record.result === "W");
    return superbowlsWon ? superbowlsWon.year : undefined;
}
  
const yearWon = superbowlWin(record);
console.log(yearWon);