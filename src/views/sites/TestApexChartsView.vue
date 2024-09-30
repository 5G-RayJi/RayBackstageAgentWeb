<template>
  <!--ApexLine--------------------------------------------->
  <div class="row">
    <!-- <div class="col-12">
      <h2>ApexLine</h2>
      <ApexBase :config="myLineConfig"></ApexBase>
    </div> -->
    <div class="row">
      <div class="col-12">
        <h2>ApexArea</h2>
        <ApexBase :config="myAreaConfig"></ApexBase>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  type ApexConfig,
  type ApexChartSeries,
  getLineConfig as getDefaultLineConfig,
  getAreaConfig,
} from "@/types/ray/apexCharts/apexCharts";

//測試用資料
const getTestSeries = () => {
  //事先定義好N條線結構
  let numLine = 5;
  let lines = [];
  for (let lineIdx = 0; lineIdx < numLine; ++lineIdx) {
    let line: ApexChartSeries = {
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
  return lines;
};

//Line區域=================================================================================================
//Line區域=================================================================================================
//Line區域=================================================================================================

//預設line參數
const lineConfig = getDefaultLineConfig();
//最終結果
const myLineConfig = ref<ApexConfig>({
  ...lineConfig,
  series: getTestSeries(),
  options: {
    ...lineConfig.options,
    markers: {
      size: 10,
    },
  },
});

//Area區域=================================================================================================
//Area區域=================================================================================================
//Area區域=================================================================================================

//預設line參數
const areaConfig = getAreaConfig();
//最終結果
const myAreaConfig = ref<ApexConfig>({
  ...areaConfig,
  series: getTestSeries(),
  options: {
    ...areaConfig.options,
    markers: {
      size: 30,
    },
  },
});
</script>
<style></style>
