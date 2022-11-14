<script setup lang="ts">
import { computed } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  color: 'default' | 'danger',
  appearance?: Appereance,
}
const props = defineProps<Props>()

const className = computed(() => {
  return generateClassName(props.appearance, 'message', {
    color: props.color
  })
})
</script>

<template>
  <component is="span" :class="className" :style="appearance?.style?.anchor">
    <slot></slot>
  </component>
</template>
