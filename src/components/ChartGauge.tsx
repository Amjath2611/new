import React from 'react';
import ReactECharts from 'echarts-for-react';

function GaugeChart(props: { data: any; }) {
  const option = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d'],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4,
          },
        },
        axisLabel: {
          color: 'auto',
          distance: 40,
          fontSize: 15,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
          color: 'auto',
        },
        data: [
          {
            value:props.data
          },
        ],
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} style={{ minHeight: '200px', width: '100%' }} lazyUpdate={true} />
    </div>
  );
}
export default GaugeChart;
