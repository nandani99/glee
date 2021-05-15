// const csv = require("csv-parser");
// const fs = require("fs");
// let results = [];
// let result = [];
// reader = fs
//   .createReadStream("hobby.csv")
//   .pipe(csv({}))
//   .on("data", (data) => results.push(data))
//   .on("end", () => {
//     console.log(results[0]);
//     console.log("Done");
//   });

async function getData() {
  const response = await fetch("hobby.csv");
  const data = await response.text();
  console.log(data);
}
getData();
