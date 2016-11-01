function salary(data, xdom1, xdom2, ydom1, ydom2) {

    const outerWidth = 400;
    const outerHeight = 400;
    const margin = {left: 50, right:50, top:50, bottom:50}
    const innerWidth = outerWidth - (margin.left + margin.right)

    const svg = d3.select("#test").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight)
        .attr("class", "svg");

    //xAxis code
    const xScale = d3.scaleLinear()
        .domain([xdom1, xdom2])
        .range([margin.left, innerWidth]);
    const yB = outerHeight - margin.bottom;
    const g = svg.append("g");
    g.attr("transform", "translate(0,"+ yB +")")
        .call(d3.axisBottom(xScale).ticks(6));	

    //yAxis code
    const yScale = d3.scaleLinear()
        .domain([ydom1, ydom2])
        .range([300 + margin.bottom, margin.top]);
    svg.append("g")
        .attr("transform", "translate("+margin.left+",0)")
        .call(d3.axisLeft(yScale).ticks(6));

    //line & path
    const salAge = d3.line()
        .x(function(d) { return xScale(d.exp); })
        .y(function(d) { return yScale(d.salary); });

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", salAge);
}

salary(data,0, 6, 20000, 80000);
salary(data1, 60, 90, 200, 800);