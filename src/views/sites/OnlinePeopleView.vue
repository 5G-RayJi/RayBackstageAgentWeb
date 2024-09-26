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
            <div class="col-12 col-md-6">
              <Chartjs :type="chart.type" :data="chart.data" />
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
import VueTable from "../../components/plugins/VueTable.vue";
import { useAppVariableStore } from "@/stores/app-variable";
import Chartjs from "@/components/plugins/Chartjs.vue";

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
  return [0.5, 0.5, 1];
});
const chart = ref({
  type: "pie",
  labels: chartLabels.value,
  data: {
    labels: chartLabels.value,
    datasets: [
      {
        data: chartData.value,
        backgroundColor: [
          "rgba(" + appVariable.color.themeRgb + ", .5)",
          "rgba(" + appVariable.color.redRgb + ", .2)" + ", .5)",
          "rgba(" + appVariable.color.gray600Rgb + ", .5)",
        ],
        hoverBackgroundColor: [
          appVariable.color.theme,
          appVariable.color.red,
          appVariable.color.gray900,
        ],
        borderWidth: 0,
      },
    ],
  },
});

onMounted(async () => {
  appOption.appContentFullHeight = true;
  appOption.appContentClass = "p-0";
  await apiGetGameData().then((res) => {
    tableData.value = res;

    setInterval(() => {
      tableData.value.forEach((game) => {
        game.numPeople += Math.floor(-5 + Math.random() * 20);
        game.numPeople = Math.max(0, game.numPeople);
        game.numPeople = Math.min(200, game.numPeople);
      });
    }, 1000);
  });
});

onBeforeRouteLeave(() => {
  appOption.appContentFullHeight = false;
  appOption.appContentClass = "";
});
</script>
