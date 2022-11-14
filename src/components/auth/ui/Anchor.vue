<script setup lang="ts">
import { computed } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  is?: string,
  appearance?: Appereance,
}
const props = withDefaults(defineProps<Props>(), { is: 'a' })

const className = computed(() => {
  return generateClassName(props.appearance, 'anchor')
})
</script>

<template>
  <component :is="is" :class="className" :style="appearance?.style?.anchor">
    <slot></slot>
  </component>
</template>
