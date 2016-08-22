import LineChart from 'react-chartjs/lib/line';
import React from 'react';

const chartData = {
  labels: ['Three weeks ago', 'Two weeks ago', 'Last week', 'This week'],
  datasets: [{
    label: 'Workout',
    fillColor: 'RGBA(2, 168, 243, 0.2)',
    strokeColor: '#00B3FE',
    pointColor: '#00B3FE',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: '#00B3FE',
    data: [0, 0, 0, 0]
  }]
};

const chartOptions = { responsive: true };

class WorkoutChart extends React.Component {
  render() {
    chartData.datasets[0].data = this.props.chartData;
    return <LineChart data={chartData} options={chartOptions} width='600' height='250'/>;
  }
}

module.exports = WorkoutChart;
