//data
const data = [{exp:0, salary:20000},{exp:2, salary:30000},
        {exp:4, salary:60000},{exp:6, salary:80000}];	

const data2 = [{age:60, balance:800},{age:70, balance:600},
        {age:80, balance:300},{age:90, balance:200}];

lineGraph(data, 'exp', 'salary', 600, 500);
lineGraph(data2, 'age', 'balance');