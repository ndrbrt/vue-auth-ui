<script setup lang="ts">
import type { Provider, Labels, Appereance } from '@/components/auth/types'
import { useLabels } from '@/components/auth/utils/labels'
import { Icon } from '@/components/auth/icons'
import { Container } from '@/components/auth/ui'
import { generateClassName } from '@/theming/utils'

export interface Props {
  providers: Array<Provider> | null
  socialLayout: 'row' | 'col',
  labels?: Labels,
  appearance?: Appereance
}
const props = withDefaults(defineProps<Props>(), {
  socialLayout: 'row',
  providers: null
})

const labels = useLabels(props.labels)

const emit = defineEmits(['signInWithOAuth'])

const getTitle = (provider: Provider) => {
  const providerName = provider[0].toUpperCase() + provider.substring(1)
  return `${labels.value.sign_in.social_provider_text} ${providerName}`
}

const signIn = (provider: Provider) => {
  emit('signInWithOAuth', { provider })
}
</script>

<template>
  <Container
    v-if="providers !== null && providers.length > 0"
    :direction="socialLayout"
    :gap="socialLayout === 'row' ? 'medium' : 'small'"
    :appearance="appearance"
  >
    <button
      v-for="provider in providers"
      :key="provider"
      @click="signIn(provider)"
      :title="getTitle(provider)"
      :class="generateClassName(appearance, 'button', { color: 'default' })"
      :style="appearance?.style?.button"
    >
      <icon :name="provider" style="width: 21px; height: 21px;" />
      <span v-if="socialLayout === 'col'">
        {{ getTitle(provider) }}
      </span>
    </button>
  </Container>
</template>
