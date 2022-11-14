<script setup lang="ts">
import { ref } from 'vue'

import type { View, Labels, Appereance } from '@/components/auth/types'
import { useLabels } from '@/components/auth/utils/labels'
import { Button, Container, Input, Label, Message } from '@/components/auth/ui'

export interface Props {
  view: Extract<View, 'sign_in' | 'sign_up'>,
  labels?: Labels,
  appearance?: Appereance,
  message?: string,
  error?: string
}
const props = defineProps<Props>()

const email = ref<string>('')
const password = ref<string>('')

const labels = useLabels(props.labels)

const emit = defineEmits(['signInWithPassword', 'signUp'])
const submit = () => {
  if (props.view === 'sign_in')
    emit('signInWithPassword', { email: email.value, password: password.value })
  else if (props.view === 'sign_up')
    emit('signUp', { email: email.value, password: password.value })
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
    <!-- Email input -->
    <div>
      <Label for="email" :appearance="appearance">
        {{ labels[view].email_label }}
      </Label>
      <Input
        v-model="email"
        type="email"
        id="email"
        :appearance="appearance"
      />
    </div>

    <!-- Password input -->
    <div>
      <Label for="password" :appearance="appearance">
        {{ labels[view].password_label }}
      </Label>
      <Input
        v-model="password"
        type="password"
        id="password"
        :appearance="appearance"
      />
    </div>

    <!-- Submit button -->
    <Button
      type="submit"
      color="primary"
      :appearance="appearance"
    >
      {{ labels[view].button_label }}
    </Button>

    <!-- Message and Error -->
    <Message v-if="message" color="default" :appearance="appearance">
      {{ message }}
    </Message>
    <Message v-if="error" color="danger" :appearance="appearance">
      {{ error }}
    </Message>

    <!-- Anchors -->
    <slot name="anchors"></slot>
  </Container>
</template>
