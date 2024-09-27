<template>
  <div class="d-flex flex-column h-100">
    <!-- BEGIN content-container -->
    <perfect-scrollbar
      class="app-content-padding flex-grow-1 overflow-hidden h-100"
    >
      <!-- BEGIN breadcrumb -->
      <ol class="breadcrumb float-xl-end">
        <li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
        <li class="breadcrumb-item"><a href="javascript:;">Page Options</a></li>
        <li class="breadcrumb-item active">Page with Footer</li>
      </ol>
      <!-- END breadcrumb -->
      <!-- BEGIN page-header -->
      <h1 class="page-header">
        在線人數
        <!-- <small>header small text goes here...</small> -->
      </h1>
      <!-- END page-header -->

      <!-- BEGIN panel -->
      <panel>
        <panel-header>
          <panel-title></panel-title>
          <panel-toolbar />
        </panel-header>
        <panel-body>
          <div class="row">
            <div class="col-12 col-md-6">
              <VueTable
                class="vue-table"
                :is-static-mode="true"
                :columns="table.columns"
                :rows="tableData"
                :total="totalRecordCount"
                :sortable="table.sortable"
              />
            </div>
            <div class="col-12 col-md-3">
              <canvas ref="chartItem" />
            </div>
          </div>
        </panel-body>
      </panel>
      <!-- END panel -->
    </perfect-scrollbar>
    <!-- END content-container -->

    <!-- BEGIN #footer -->
    <div id="footer" class="app-footer m-0">
      &copy; 2024 Color Admin Responsive Admin Template - Sean Ngu All Rights
      Reserved
    </div>
    <!-- END #footer -->
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
//asd
import { useAppOptionStore } from "@/stores/app-option";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { apiGetGameData } from "@/apis/GameData";
import type { IGameData } from "@/apis/GameData";
import { useAppVariableStore } from "@/stores/app-variable";
import Chart, { UpdateModeEnum } from "chart.js/auto";
import type { ChartTypeRegistry, ChartConfiguration } from "chart.js";
import type { ChartOptions } from "chart.js";

const appOption = useAppOptionStore();

const totalRecordCount = computed(() => {
  return table.value.rows.length;
});

/** table 資料 */
const tableData = ref<IGameData[]>([]);

const table = ref({
  columns: [
    {
      label: "ID",
      field: "id",
      width: "3%",
      sortable: true,
      isKey: true,
    },
    {
      label: "Name",
      field: "name",
      width: "10%",
      sortable: true,
    },
    {
      label: "類型",
      field: "type",
      width: "15%",
      sortable: true,
    },
    {
      label: "在線人數",
      field: "numPeople",
      width: "15%",
      sortable: true,
    },
  ],
  rows: tableData,
  sortable: {
    order: "id",
    sort: "asc",
  },
});

const appVariable = useAppVariableStore();
const chartLabels = computed(() => {
  return ["a", "b", "c"];
});

const chartData = computed(() => {
  return [1, 0.5, 1];
});

const chartDataSet = ref();

const chartConfig = ref<ChartConfiguration>({
  type: "pie",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      },
    ],
  },
});

const chartOptions = ref<ChartOptions>({
  plugins: {
    legend: {
      display: false,
    },
  },
});
//圖表實體參照
const chartItem = ref();
//圖表實體
let chartInstance: Chart;

const getRandomHexColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomRgbColor = () => {
  return {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  };
};

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const intervalID = ref(-1);

onMounted(async () => {
  appOption.appContentFullHeight = true;
  appOption.appContentClass = "p-0";

  await apiGetGameData().then((res) => {
    tableData.value = res;

    //設定資料
    tableData.value.forEach((game) => {
      //標題
      chartConfig.value.data.labels?.push(game.name);
      let dataSet = chartConfig.value.data.datasets[0];
      dataSet.data.push(game.numPeople);
      let color = getRandomRgbColor();
      dataSet.backgroundColor.push(
        `rgba(${color.r},${color.g},${color.b},0.5)`
      );
      dataSet.hoverBackgroundColor.push(
        `rgba(${color.r},${color.g},${color.b},1)`
      );
    }, this);

    //繪製圖表
    chartInstance = new Chart(chartItem.value, {
      type: <keyof ChartTypeRegistry>chartConfig.value.type,
      options: chartOptions.value,
      data: chartConfig.value.data,
    });

    //定時更新
    intervalID.value = setInterval(() => {
      //隨機增加人數
      let numGame: number = tableData.value.length;
      for (let i: number = 0; i < numGame; ++i) {
        let game: IGameData = tableData.value[i];
        game.numPeople = Math.floor(Math.random() * 20);
        game.numPeople = Math.max(0, game.numPeople);
        game.numPeople = Math.min(200, game.numPeople);

        //更新chart資料
        chartConfig.value.data.datasets[0].data[i] = game.numPeople;
      }

      chartInstance.update();
    }, 1000);
  });
});

onBeforeRouteLeave(() => {
  appOption.appContentFullHeight = false;
  appOption.appContentClass = "";
  clearInterval(intervalID.value);
});
</script>
