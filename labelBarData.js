const requiredExpensesTitle = 'REQUIRED EXPENSES';
const requiredExpenses = [
    {category:'Healthcare', amount:1420},
    {category:'Housing', amount:1690},
    {category:'Travel', amount:800},
    {category:'Transportation', amount:300},
    {category:'Clothing', amount:650},
    {category:'Entertainment', amount:300},
    {category:'Food', amount:420},
]
const desiredExpensesTitle = 'DESIRED EXPENSES';
const desiredExpenses = [
    {category:'Housing', amount:200},
    {category:'Travel', amount:600},
    {category:'Transportation', amount:100},
    {category:'Entertainment', amount:600},
]
const incomeTitle = 'INCOME';
const income = [
    {category:'Social Security', amount:2500},
    {category:'Pension', amount:800},
    {category:'Fixed Income', amount:2480},
    {category:'Equity', amount:1500},
]

labelBarGraph(requiredExpensesTitle, requiredExpenses, "#required");
labelBarGraph(desiredExpensesTitle, desiredExpenses, "#desired");
labelBarGraph(incomeTitle, income,"#income");

