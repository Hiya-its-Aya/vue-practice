
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="counterStore.increaseCount">count is {{ counterStore.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div>
    This counter is {{ counterStore.oddOrEven}}. 
  </div>

</template>


<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '../../stores/counter';

defineProps({
  msg: String,
})

let counterStore = useCounterStore();

</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
