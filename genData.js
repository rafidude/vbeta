const ld = require('lodash');

// const balancesData = (initialBalance, startingYear, endingYear) => {
//     let data = [];
//     let delta = initialBalance/(endingYear - startingYear);
//     const x = ld.range(startingYear, endingYear + 1);
//     const y = x.map( (v, i) => initialBalance - delta * i);
//     data = x.map((v, i) => {
//         obj = {};
//         obj.x = v;
//         obj.y = y[i];
//         return obj;
//         })   
//     console.log(-2, data);
//     return data;
// }

var balancesData = (initialBalance, startingYear, endingYear) => {
    var data = [];
    var delta = initialBalance/(endingYear - startingYear);
    var x = ld.range(startingYear, endingYear + 1);
    var y = x.map( function(v, i){return initialBalance - delta * i});
    data = x.map(function(v, i){
        obj = {};
        obj.x = v;
        obj.y = y[i];
        return obj;
        })
    console.log(-2, data);
    return data;
}

balancesData(102, 65, 90);