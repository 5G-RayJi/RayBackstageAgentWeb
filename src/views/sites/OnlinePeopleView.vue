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
          <vue-table
            class="vue-table"
            :is-static-mode="true"
            :columns="table.columns"
            :rows="tableData"
            :total="totalRecordCount"
            :sortable="table.sortable"
          />
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

<script lang="ts" setup>
//asd
import { useAppOptionStore } from "@/stores/app-option";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { apiGetGameData } from "@/apis/GameData";
import type { IGameData } from "@/apis/GameData";
import VueTable from "../../components/plugins/VueTable.vue";

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

onMounted(async () => {
  appOption.appContentFullHeight = true;
  appOption.appContentClass = "p-0";
  await apiGetGameData().then((res) => {
    tableData.value = res;

    /*
    setInterval(() => {
      tableData.value.forEach((game) => {
        game.numPeople += Math.floor(-5 + Math.random() * 20);
        game.numPeople = Math.max(0, game.numPeople);
        game.numPeople = Math.min(200, game.numPeople);
      });
    }, 1000);
    */
  });
});

onBeforeRouteLeave(() => {
  appOption.appContentFullHeight = false;
  appOption.appContentClass = "";
});
</script>
