<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ title }}
    </button>
    <ul class="dropdown-menu">
      <li v-for="option in options">
        <a class="dropdown-item" href="#" @click="test(option)">{{ option }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  options: Array,
});
import useEmitter from "../../composables/useEmitter.js";
const emit = defineEmits(["changeType"]);
const emitter = useEmitter();

const test = (v) => {
  console.log(v);
  emit("changeType", v);
};
</script>
