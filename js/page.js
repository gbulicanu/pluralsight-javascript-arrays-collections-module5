// Accessing the objects
var yearlyLabel = document.getElementById("yearlyTotal");
var newAmount = document.getElementById("itemAmount");
var newMonth = document.getElementById("monthId");
let hikingRadio = document.getElementById("hiking");
let runningRadio = document.getElementById("running");
let huntingRadio = document.getElementById("hunting");

let testBuffer = new ArrayBuffer(16);

let view1 = new Int8Array(testBuffer);
let view2 = new Int16Array(testBuffer);
let view3 = new DataView(testBuffer);
view1[0] = 32;
view2[0] = 32;
console.log(view1);
console.log(view2);

view3.setInt8(2, 43);
console.log(view3);
let number = view3.getInt8(2);
console.log(number);
let view4 = new DataView(testBuffer);
let number2 = view4.getInt8(2);
console.log(number2);

let view5 = new DataView(testBuffer, 7, 3);
view5.setInt8(0, 54);
view5.setInt8(1, 23);
view5.setInt8(2, 32);

let numberToAlert = view5.getInt8(0);
console.log(numberToAlert);

// Add Sales
function addSale() {}

function findSale() {}

// Bar chart
// var monthlySalesChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [],
//         datasets: [{
//             label: '# of Sales',
//             data: [],
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {

//     }
// })
