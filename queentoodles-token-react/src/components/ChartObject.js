import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/Chart.css'
function ChartObject() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() =>{
        if (chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(myChartRef, {
            type:'pie',
            data: {
                labels:["Marketing", 'Burn', 'Team', 'Raydium'],
                datasets: [{
                    label: 'Queen Toodles Tokenomics',
                    data: [150000000, 200000000, 100000000, 550000000],
                    backgroundColor: [
                      'rgb(255, 0, 110)',
                      'rgb(251, 86, 7)',
                      'rgb(58, 134, 255)',
                      'rgb(131, 56, 236)'
                    ],
                    borderColor: [
                        'rgb(73, 80, 87)', // White border for 'Marketing'
                        'rgb(73, 80, 87)', // White border for 'Burn'
                        'rgb(73, 80, 87)', // White border for 'Team'
                        'rgb(73, 80, 87)'  // White border for 'Raydium'
                      ],
                    hoverOffset: 4
                  }]
            }
        })
        return () =>{
            if(chartInstance.current){
                chartInstance.current.destroy();
            }
        }
    }, [])
  return (
    <div>
        <canvas ref={chartRef} className='PieChart' />
    </div>
  )
}

export default ChartObject