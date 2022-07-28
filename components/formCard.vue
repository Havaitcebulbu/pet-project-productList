<template>
 <div>
   <div class="card">
     <slot></slot>
   </div>
 </div>
</template>

<script>
export default {
  name: "formCard"
}
</script>

<style scoped lang="scss">
 .card {
   padding: 24px;
   width: 100%;
   height: 100%;
   max-width: 284px;
   max-height: 440px;
   background: #FFFEFB;
   box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
   border-radius: 4px;
 ;
 }
</style>