const data =   [{x:1, y:50, w:4560, c:'1'}, 
        {x:2, y:50, w:1000, c:'2'},
        {x:1, y:100, w:2500, c:'3'}, 
        {x:2, y:100, w:800, c:'3'}, 
        {x:3, y:100, w:800, c:'3'}];

incomeBarChart(data);

const requiredExpensesHeader = {total: 5580, title: 'REQUIRED EXPENSES'};
const requiredExpenses = [
    {category:'Healthcare', amount:1420},
    {category:'Housing', amount:1690},
    {category:'Travel', amount:800},
    {category:'Transportation', amount:300},
    {category:'Clothing', amount:650},
    {category:'Entertainment', amount:300},
    {category:'Food', amount:420},
]
const desiredExpensesHeader = {total: 1500, title: 'DESIRED EXPENSES'};
const desiredExpenses = [
    {category:'Housing', amount:200},
    {category:'Travel', amount:600},
    {category:'Transportation', amount:100},
    {category:'Entertainment', amount:600},
]
const incomeHeader = {total: 7080, title: 'INCOME'};
const income = [
    {category:'Social Security', amount:2500},
    {category:'Pension', amount:800},
    {category:'Fixed Income', amount:2480},
    {category:'Equity', amount:1500},
]
// expensesBarChart(requiredExpensesHeader, requiredExpenses);
expensesBarChart(desiredExpensesHeader, desiredExpenses);
// expensesBarChart(incomeHeader, income);
