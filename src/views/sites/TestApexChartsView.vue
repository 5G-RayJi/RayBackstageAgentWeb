<template>
  <!--ApexLine--------------------------------------------->
  <div class="row">
    <h2>ApexLine</h2>
    <div class="col-md-3">
      <ApexLine :width="w" :series="series"></ApexLine>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ApexLineSeries } from "@/types/ray/apexCharts/apexCharts";
import VueApexCharts from "vue3-apexcharts";

const w = ref(800);
const h = ref(400);
//事先定義好N條線結構
let numLine = 3;
let lines: ApexLineSeries[] = [];
for (let lineIdx = 0; lineIdx < numLine; ++lineIdx) {
  let line: ApexLineSeries = {
    name: `line_${lineIdx}`,
    data: [],
  };
  for (let i: number = 0; i < 10; ++i) {
    line.data.push({
      x: `199${i}`,
      y: Math.floor(Math.random() * 100),
    });
  }
  lines.push(line);
}
const series = ref<ApexLineSeries[]>(lines);
</script>
<style></style>
