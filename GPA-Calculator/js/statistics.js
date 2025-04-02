let gpaChart = null;

function updateStatisticsChart(termData) {
    const ctx = document.getElementById("gpa-chart").getContext("2d");
    const labels = termData.map((_, index) => `${translations[currentLang].termResult} ${index + 1}`);
    const gpaValues = termData.map(term => parseFloat(term.gpa) || 0);

    if (gpaChart) {
        gpaChart.destroy();
    }

    const maxGPA = currentGradingSystem === "4.0" ? 4 : 5;

    gpaChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: translations[currentLang].points || "GPA",
                data: gpaValues,
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.1)",
                fill: true,
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: maxGPA,
                    title: {
                        display: true,
                        text: translations[currentLang].points || "GPA",
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: translations[currentLang].termResult || "Term",
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
        },
    });
}