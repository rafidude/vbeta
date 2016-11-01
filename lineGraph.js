const lineGraph = (data, xCol, yCol, outerWidth = 400, outerHeight = 400, divID = '#test') => {
    const margin = {left: 50, right:50, top:50, bottom:50}
    const innerWidth = outerWidth - (margin.left + margin.right)
    const innerHeight = outerHeight - (margin.top + margin.bottom)

    const svg = d3.select(divID).append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight)
        .attr("class", "svg");

    //xAxis code
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d[xCol]))
        .range([margin.left, innerWidth]);
    const yB = outerHeight - margin.bottom;
    const g = svg.append("g");
    g.attr("transform", "translate(0,"+ yB +")")
        .call(d3.axisBottom(xScale).ticks(6));	

    //yAxis code
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d[yCol]))
        .range([innerHeight + margin.bottom, margin.top]);
    svg.append("g")
        .attr("transform", "translate("+margin.left+",0)")
        .call(d3.axisLeft(yScale).ticks(6));

    //line & path
    const salAge = d3.line()
        .x(d => xScale(d[xCol]))
        .y(d => yScale(d[yCol]));

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", salAge);
}
