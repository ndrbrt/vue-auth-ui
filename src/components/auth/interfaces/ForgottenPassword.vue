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

const email = ref<string>('')

const emit = defineEmits(['resetPasswordForEmail'])
const submit = () => {
  emit('resetPasswordForEmail', { email })
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
      <Label for="email" :appearance="appearance">
        {{ labels.forgotten_password.email_label }}
      </Label>
      <Input
        v-model="email"
        type="email"
        id="email"
        :appearance="appearance"
      />
    </div>

    <Button
      type="submit"
      color="primary"
      :appearance="appearance"
    >
      {{ labels.forgotten_password.button_label }}
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
