// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = {
      x: otuID,
      y: sampleValue,
      type: "bubble",
      text: otuLabel,
      hoverinfo: "x+y+text",
      mode: "markers",
      marker: {size: sampleValue, color: otuID, colorscale: "Earth"}
    };

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: {
        text: "<b>Bacteria Cultures Per Sample</b>",
        y:0.95,
      },
      xaxis: {title: "OTU ID"},
      margin: {
        l: 75,
        r: 50,
        b: 60,
        t: 60,
        pad: 10
      },
      hovermode: "closest"
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", [bubbleData], bubbleLayout); 
  });
}
