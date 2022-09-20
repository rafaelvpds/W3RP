import Chart from 'react-apexcharts'

const defaultOptions: ApexCharts.ApexOptions = {
  fill: { colors: ['#000E4D'] },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: { background: '#796CE0' },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    },
  },
}
type RadialBarProductHightProps = {
  serie: number
}
export function RadialBar({ serie }: RadialBarProductHightProps) {
  return (
    <Chart
      series={[serie]}
      width={70}
      height={70}
      options={defaultOptions}
      type="radialBar"
    />
  )
}
