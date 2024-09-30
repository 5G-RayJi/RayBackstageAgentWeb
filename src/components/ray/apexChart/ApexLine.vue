<!--
Apex折線圖組件
-->
<template>
  <ApexBase
    type="line"
    :width="prop.width"
    :height="prop.height"
    :options="prop.options"
    :series="prop.series"
  ></ApexBase>
</template>
<script lang="ts" setup>
import type {
  ApexLineSeries,
  ApexLineOptions,
} from "@/types/ray/apexCharts/apexCharts";
import { s } from "node_modules/@fullcalendar/core/internal-common";

/**外部設定property */
const prop = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
    series: ApexLineSeries[];
    options?: ApexLineOptions;
  }>(),
  {
    //預設線資料
    series: () =>
      [
        {
          name: "series-1",
          data: [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 4 },
            { x: 5, y: 5 },
            { x: 6, y: 6 },
          ],
        },
        {
          name: "series-2",
          data: [
            { x: 6, y: 6 },
            { x: 5, y: 5 },
            { x: 4, y: 4 },
            { x: 3, y: 3 },
            { x: 2, y: 2 },
            { x: 1, y: 1 },
            { x: 0, y: 0 },
          ],
        },
      ] as ApexLineSeries[],
    options: () =>
      ({
        chart: {},
        legend: {
          show: false,
        },
        markers: {
          size: 5,
        },
      }) as ApexLineOptions,
  }
);
</script>
