<script setup lang="ts">
import { computed } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  appearance?: Appereance,
}
const props = defineProps<Props>()

const className = computed(() => {
  return generateClassName(props.appearance, 'label')
})
</script>

<template>
  <component is="label" :class="className" :style="appearance?.style?.label">
    <slot></slot>
  </component>
</template>
