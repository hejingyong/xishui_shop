<template>
  <ve-line
    :data="chartData"
    :colors="chartColor"
    :legend-visible="true"
    :loading="loading"
    :data-empty="dataEmpty"
    :extend="extend"
    :settings="chartSettings">
  </ve-line>
</template>
<script>

const DATA_FROM_BACKEND = {
  rows: [


  ]
};

import 'v-charts/lib/style.css'
export default {
  name: 'VCharts',
  data () {
    return {
      chartSettings: {
        xAxisType: 'time',
        area: true,
        yAxisName: ['订单总数', '订单金额'],
        axisSite: {right: ['orderAmount']},
        labelMap: {'orderCount': '订单数量', 'orderAmount': '订单金额'}
      },
      chartData: {
        columns: ['date', 'orderCount', 'orderAmount'],
        rows: []
      },
      extend: {
        series: {
          symbolSize: 5,
          label: {
            normal: {
              show: true
            }
          }
        }
      },
      chartColor: ['#89dd47', '#3cabf4'],
      loading: false,
      dataEmpty: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData(){
      this.chartData.rows = DATA_FROM_BACKEND.rows // 注意这里应该是接口给返回回来的数据，为了方便展示data结构，我这里用的是静态数据
      this.dataEmpty = false
    }
  }
}
</script>
