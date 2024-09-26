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
        圖表測試
        <!-- <small>header small text goes here...</small> -->
      </h1>
      <!-- END page-header -->

      <!-- BEGIN panel -->
      <panel>
        <panel-header>
          <panel-title>{{ title }}</panel-title>
          <panel-toolbar />
        </panel-header>
        <panel-body>
          <slot></slot>
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
<script setup>
defineProps({
  title: String,
});
</script>
