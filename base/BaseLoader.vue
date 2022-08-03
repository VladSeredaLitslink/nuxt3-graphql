<template>
  <div>
    <div class="loader" />
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.loader {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #34db55;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
