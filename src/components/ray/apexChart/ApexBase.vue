<!--
Apex元件基礎
-->
<template>
  <apexchart
    :type="baseProp.type"
    :height="baseProp.height"
    :width="baseProp.width"
    :series="baseProp.series"
    :options="baseProp.options"
  ></apexchart>
</template>
<script lang="ts" setup>
import type {
  ApexAxisChartSeries,
  ApexBaseOptions,
} from "@/types/ray/apexCharts/apexCharts";

/**外部設定property */
const baseProp = withDefaults(
  defineProps<{
    /**類型 */
    type?:
      | "line"
      | "area"
      | "bar"
      | "pie"
      | "donut"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "heatmap"
      | "candlestick"
      | "boxPlot"
      | "radar"
      | "polarArea"
      | "rangeBar"
      | "rangeArea"
      | "treemap";
    /**圖形寬度 */
    width?: number;
    /**圖形高度 */
    height?: number;
    /**圖表客製化設定 */
    options: ApexBaseOptions;
    /**圖表N個系列資料 */
    series?: ApexAxisChartSeries[];
  }>(),
  {
    /**預設寬度 */
    width: 300,
    /**預設高度 */
    height: 300,
    /**預設資料 */
    series: () => [],
    options: () =>
      ({
        chart: {
          id: "base",
          toolbar: {
            show: false,
          },
        },
      }) as ApexBaseOptions,
  }
);
</script>
