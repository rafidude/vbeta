const labelBarGraph = (title, data, divID = '#test', outerWidth = 300, outerHeight = 400) => {
    const margin = {left: 20, right:20, top:100, bottom:20}
    const innerWidth = outerWidth - (margin.left + margin.right)
    const innerHeight = outerHeight - (margin.top + margin.bottom)

    const maxDomain = d3.max(data, d => d.amount);
    const labelWidth = 90;
    const barWidth = innerWidth - labelWidth;

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    
    const scale = d3.scaleLinear()
        .domain([0, maxDomain])   // Data space
        .range([0, barWidth]); // Pixel space


    const svg = d3.select(divID).append("svg")
        .attr("width",  outerWidth)
        .attr("height", outerHeight)
        .attr("class", "svg");

    const g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.selectAll("rect")
            .data(data)
        .enter().append("rect")
            .attr("x", (margin.left + labelWidth))
            .attr("y", (d, i) => i * 40 + margin.top)
            .attr("width",  d => scale(d.amount))
            .attr("height", 35)
            .attr("fill", (d, i) => colorScale(i))
        
        svg.selectAll("text")
            .data(data)
        .enter().append("text")
            .text(d => d.category)
            .attr("text-anchor", "end")
            .attr("x", labelWidth + 10)
            .attr("y", (d, i) => i * 40 + 20 + margin.top);

        const total = d3.sum(data, d => d.amount);
        svg.append("text")
            .text("$"+total)
            .attr("x", margin.left)
            .attr("y", 40)
            .attr("class", "total");

        svg.append("text")
            .text(title)
            .attr("x", margin.left)
            .attr("y", 60)
            .attr("class", "title");

}