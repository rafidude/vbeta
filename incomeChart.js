function incomeBarChart(data) {
    let xc = 0;
    let prevy = -99999;
        
    const outerWidth  = 600;
    const outerHeight = 200;

    const margin = { left: 70, top: 30, right: 30, bottom: 30 };
    const innerWidth  = outerWidth  - margin.left - margin.right;
    const innerHeight = outerHeight - margin.top  - margin.bottom;
    const border = 1, bordercolor = 'black';

    const xcoord = function (d){ 
        if (prevy != d.y) {
            prevy = d.y;
            xc = 0;
        }
        x = xc;
        xc += scale(d.w) + 5; 
        return x; 
        }

    const scale = d3.scaleLinear()
        .domain([0, 5000])   // Data space
        .range([0, 400]); // Pixel space
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select("#income").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight)
        .attr("class", "svg")
        .attr("border",1);

    var borderPath = svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", outerHeight)
        .attr("width", outerWidth)
        .style("stroke", bordercolor)
        .style("fill", "none")
        .style("stroke-width", border);

    const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        g.selectAll("rect")
            .data(data)
        .enter().append("rect")
            .attr("x", xcoord)
            .attr("y", function (d){return d.y})
            .attr("width",  function(d){ return scale(d.w)})
            .attr("height", 35)
            .attr("fill", function (d){ return colorScale(d['c']); })

    const sumW = d3.sum(data, function(d) { return d['w']; });
    const xScale = d3.scaleLinear()
            .domain([0, sumW])
            .range([margin.left, innerWidth]);

    svg.append("g")
            .attr("transform", "translate(0," + (outerHeight - margin.bottom) + ")")
            .call(d3.axisBottom(xScale).ticks(5));	

    svg.append("text")
        .text("Expenses")
        .attr("x", 0)
        .attr("y", 100);

    svg.append("text")
        .text("Income")
        .attr("x", 0)
        .attr("y", 150);

    startY = outerHeight - margin.bottom;
    endY = margin.top;
    svg.append("line")
        .attr("x1", margin.left)
        .attr("y1", startY)
        .attr("x2", margin.left)
        .attr("y2", endY)
        .attr("stroke-width", 1)
        .attr("stroke", "black");
}
