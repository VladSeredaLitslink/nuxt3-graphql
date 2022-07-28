<template>
  <section class="loader__wrap">
    <div class="loader" />
  </section>
</template>

<script>
export default {
  name: "BaseLoader"
};
</script>

<style lang="scss">
.loader {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #34db55;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  &__wrap {
    margin: 0 auto;
  }
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
