<script setup lang="ts">
import { computed } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  is?: string,
  direction: 'row' | 'col',
  gap: 'small' | 'medium' | 'large',
  appearance?: Appereance,
}
const props = withDefaults(defineProps<Props>(), { is: 'div' })

const className = computed(() => {
  return generateClassName(props.appearance, 'container', {
    direction: props.direction,
    gap: props.gap
  })
})
</script>

<template>
  <component :is="is" :class="className" :style="appearance?.style?.container">
    <slot></slot>
  </component>
</template>
