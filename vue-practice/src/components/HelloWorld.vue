
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div>
    This counter is {{ oddOrEven}}. 
  </div>

</template>


<script setup>
import { ref, computed } from 'vue'

defineProps({
  msg: String,
})

let count = ref(0)

const oddOrEven = computed(()=> {
  if (count.value % 2 === 0 ) return 'even'
  return 'odd'
})


</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
