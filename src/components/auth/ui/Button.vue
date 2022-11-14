<script setup lang="ts">
import { computed } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  color: 'default' | 'primary',
  appearance?: Appereance,
}
const props = defineProps<Props>()

const className = computed(() => {
  return generateClassName(props.appearance, 'button', {
    color: props.color
  })
})
</script>

<template>
  <component is="button" :class="className" :style="appearance?.style?.button">
    <slot></slot>
  </component>
</template>
