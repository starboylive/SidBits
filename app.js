let gChart = null;

fetch("data.json")
  .then(r => r.json())
  .then(d => {
    const gCtx = document.getElementById("gCanv");

    if (gChart) gChart.destroy();

    gChart = new Chart(gCtx, {
      type: "line",
      data: {
        labels: d.t,
        datasets: d.runs.map((run, i) => ({
          label: run.name,
          data: run.wpm,
          borderColor: ["#120079ff", "#720000ff", "#051d00ff","#000000ff"][i],
          borderWidth: 2,
          pointRadius: 3,
          backgroundColor: "transparent",
          tension: 0
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: { color: "#000000ff" }
          }
        },
        scales: {
          x: { ticks: { color: "#111111ff" } },
          y: { ticks: { color: "#131313ff" } }
        }
      }
    });
  });
