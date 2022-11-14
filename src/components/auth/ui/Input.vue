<script setup lang="ts">
import { computed, useAttrs } from 'vue'

import type { Appereance } from '@/components/auth/types'
import { generateClassName } from '@/theming/utils'

export interface Props {
  modelValue: string,
  appearance?: Appereance,
}
const props = defineProps<Props>()
const attrs = useAttrs()

const className = computed(() => {
  return generateClassName(props.appearance, 'input', {
    type: attrs?.type === 'password' ? 'password' : 'default'
  })
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input
    :value="modelValue"
    @input="updateValue"
    :class="className"
    :style="appearance?.style?.input"
  />
</template>
