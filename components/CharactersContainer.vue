<script lang="ts" setup>
</script>
<template>
  <div>
    <div class="text-center p-4">
      <slot
        name="header"
      />
    </div>

    <slot name="content" />
  </div>
</template>
