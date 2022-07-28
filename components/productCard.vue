<template>
  <div>
    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "productCard"
}
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    height: 100%;
    height: 423px;
    width: 332px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
</style>