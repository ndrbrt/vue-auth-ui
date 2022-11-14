<script setup lang="ts">
import { ref } from 'vue'

import type { Labels, Appereance } from '@/components/auth/types'
import { useLabels } from '@/components/auth/utils/labels'
import { Button, Container, Input, Label, Message } from '@/components/auth/ui'

export interface Props {
  labels?: Labels,
  appearance?: Appereance,
  message?: string,
  error?: string,
}
const props = defineProps<Props>()

const labels = useLabels(props.labels)

const password = ref<string>('')

const emit = defineEmits(['updateUser'])
const submit = () => {
  emit('updateUser', { password })
}
</script>

<template>
  <Container
    is="form"
    @submit.prevent="submit"
    direction="col"
    gap="large"
    :appearance="appearance"
  >
    <div>
      <Label for="password" :appearance="appearance">
        {{ labels.update_password.password_label }}
      </Label>
      <Input
        v-model="password"
        type="password"
        id="password"
        :placeholder="labels.update_password.password_input_placeholder"
        :appearance="appearance"
      />
    </div>

    <Button
      type="submit"
      color="primary"
      :appearance="appearance"
    >
      {{ labels.update_password.button_label }}
    </Button>

    <Message v-if="message" color="default" :appearance="appearance">
      {{ message }}
    </Message>
    <Message v-if="error" color="danger" :appearance="appearance">
      {{ error }}
    </Message>

    <slot name="anchors"></slot>
  </Container>
</template>
