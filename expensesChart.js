function expensesBarChart(header, data) {
    const outerWidth  = 300;
    const outerHeight = 200;
    const border = 1, bordercolor = 'black';

    const margin = { left: 50, top: 10, right: 10, bottom: 10 };
    const innerWidth  = outerWidth  - margin.left - margin.right;
    const innerHeight = outerHeight - margin.top  - margin.bottom;

    const maxDomain = d3.max(data, d => d.amount);

    const scale = d3.scaleLinear()
        .domain([0, maxDomain])   // Data space
        .range([0, innerWidth]); // Pixel space

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select("#expenses").append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight)
        .attr("class", "svg");

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
            .attr("x", margin.left)
            .attr("y", (d, i) => i * 40)
            .attr("width",  d => {console.log(-5, d.amount, scale(d.amount));return scale(d.amount)})
            .attr("height", 35)
            .attr("fill", (d, i) => colorScale(i))

    svg.selectAll("text")
        .data(data)
    .enter().append("text")
        .text(d => d.category)
        .attr("x", 10)
        .attr("y", (d, i) => i * 40 + 30);
}
