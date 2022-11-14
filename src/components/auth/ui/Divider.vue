<script setup lang="ts">
import { computed } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  appearance?: Appereance,
}
const props = defineProps<Props>()

const className = computed(() => {
  return generateClassName(props.appearance, 'divider')
})
</script>

<template>
  <component is="div" :class="className" :style="appearance?.style?.divider">
    <slot></slot>
  </component>
</template>
