<script setup>

import { useMousePosition } from '@/composables/mouseposition';
const { x, y } = useMousePosition()

</script>

<template>

  Mouse position is at: {{ x }}, {{ y }}
  
</template>
