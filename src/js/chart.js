Chart.Tooltip.positioners.custom = function (elements, position) {
    var yPosition = -0;

    return {
        x: position.x,
        y: position.y - position.y + yPosition
    }
}


Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function (ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            var activePoint = this.chart.tooltip._active[0],
                ctx = this.chart.ctx,
                x = activePoint.tooltipPosition().x,
                topY = this.chart.scales['y-axis-0'].top,
                bottomY = this.chart.scales['y-axis-0'].bottom;

            // draw line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#C0C7CC';
            ctx.stroke();
            ctx.restore();
        }
    }
});

var ctx = document.getElementById("myChart").getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(41, 190, 96, 0.1)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

function colorChart(color){
    var gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    return gradient;
}

var myChart = new Chart(ctx, {
    type: 'LineWithLine',
    data: {
        labels: label1,
        datasets: [{
            // label: '',
            data: data1,
            backgroundColor: gradient,
            borderColor: 'rgb(41, 190, 6)',
            borderWidth: 2,
            pointRadius: 0,
            hoverRadius: 3,
        }]
    },

    options: {
        legend: {
            display: false
        },
        tooltips: {
            position: 'custom',
            mode: 'index',
            intersect: false,
            backgroundColor: 'white',
            borderColor: '#E8EAEB',
            borderWidth: 1,
            bodyFontColor: '#0459C4',
            bodyFontSize: 16,
            titleFontColor: '#5E6C78',
            titleFontSize: 14,
            displayColors: false,
            xPadding: 12,
            yPadding: 12,
            animationDuration: 1,
            callbacks: {
                title: function ([tooltipItem], data) {
                    return tooltip[tooltipItem.index]
                },
            }
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                },
                gridLines: {
                    display: true,
                    drawBorder: false
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: false,
                    maxTicksLimit: 4,
                    maxRotation: 0
                },
                gridLines: {
                    display: false,
                },
            }],
        },

        layout: {
            padding: {
                top: 0
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }
});