<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { createStitches } from '@stitches/core'
import { merge } from 'lodash-es'

import type { View, Provider, Labels, Appereance } from '@/components/auth/types'
import { propsDefaults } from '@/components/auth/utils/props'
import { useLabels } from '@/components/auth/utils/labels'
import { useShowDivider } from '@/components/auth/utils'
import { generateClassName } from '@/theming/utils'
import { Anchor, Container, Divider } from '@/components/auth/ui'
import { EmailAuth, ForgottenPassword, MagicLink, SocialAuth } from '@/components/auth/interfaces'

/* Cannot import external props interface.
 * See: https://github.com/vuejs/core/issues/4294 */
export interface Props {
  view?: Extract<View, 'sign_in' | 'sign_up' | 'forgotten_password'>,
  onlyThirdPartyProviders?: boolean,
  providers?: Array<Provider> | null,
  socialLayout?: 'row' | 'col',
  labels?: Labels,
  appearance?: Appereance,
  message?: string,
  error?: string,
  magicLink?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  ...propsDefaults,
  view: 'sign_in',
  magicLink: false,
})

/**
 * Refs
 */
const currentView = ref<typeof props.view>(props.view)
const loading = ref<boolean>(false)

/**
 * Labels
 */
const labels = useLabels(props.labels)

/**
 * Theme etc.
 */
const theme = computed(() => {
  const themeVariant = props.appearance?.themeVariant || 'default'
  const themeAndVariables = merge({}, props.appearance?.theme, props.appearance?.variables)

  return themeVariant !== 'default'
    ? merge({}, themeAndVariables?.default, themeAndVariables?.[themeVariant])
    : themeAndVariables?.default
})
createStitches({ theme: theme.value })
watch(theme, () => { createStitches({ theme: theme.value }) })

const showDivider = useShowDivider(props)

/**
 * Emits
 */
defineEmits([
  'signInWithPassword',
  'signUp',
  'signInWithOAuth',
  'signInWithOtp',
  'resetPasswordForEmail'
])
</script>

<template>
  <SocialAuth
    :providers="providers"
    :socialLayout="socialLayout"
    :appearance="appearance"
    @signInWithOAuth="provider => $emit('signInWithOAuth', provider)"
  />

  <Divider v-if="showDivider" :appearance="appearance" />

  <div
    v-if="loading"
    :class="generateClassName(appearance, 'loader')"
    :style="appearance?.style?.loader"
  >
  </div>

  <MagicLink
    v-if="!onlyThirdPartyProviders && currentView === 'sign_in' && magicLink"
    :labels="labels"
    :appearance="appearance"
    :message="message"
    :error="error"
    @signInWithOtp="email => $emit('signInWithOtp', email)"
  >
    <template #anchors>
      <Anchor
        @click.prevent="currentView = 'sign_up'"
        :appearance="appearance"
      >
        {{ labels.sign_in.link_text }}
      </Anchor>
    </template>
  </MagicLink>

  <EmailAuth
    v-else-if="!onlyThirdPartyProviders && (currentView === 'sign_in' || currentView === 'sign_up')"
    :view="currentView"
    :labels="labels"
    :appearance="appearance"
    :message="message"
    :error="error"
    @signInWithPassword="creds => $emit('signInWithPassword', creds)"
    @signUp="creds => $emit('signUp', creds)"
  >
    <template #anchors>
      <Container direction="col" gap="small">
        <Anchor
          @click.prevent="currentView = 'forgotten_password'"
          :appearance="appearance"
        >
          {{ labels.forgotten_password.link_text }}
        </Anchor>
        <Anchor
          @click.prevent="currentView = currentView === 'sign_in' ? 'sign_up' : 'sign_in'"
          :appearance="appearance"
        >
          {{ labels[currentView].link_text }}
        </Anchor>
      </Container>
    </template>
  </EmailAuth>

  <ForgottenPassword
    v-else-if="!onlyThirdPartyProviders && currentView === 'forgotten_password'"
    :labels="labels"
    :appearance="appearance"
    :message="message"
    :error="error"
    @resetPasswordForEmail="({ email }) => $emit('resetPasswordForEmail', { email })"
  >
    <template #anchors>
      <Anchor
        @click.prevent="currentView = 'sign_up'"
        :appearance="appearance"
      >
        {{ labels.sign_in.link_text }}
      </Anchor>
    </template>
  </ForgottenPassword>
</template>
