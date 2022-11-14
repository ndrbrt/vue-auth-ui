<script setup lang="ts">
import type { Provider, Labels, Appereance } from '@/components/auth/types'
import { propsDefaults } from '@/components/auth/utils/props'
import { useShowDivider } from '@/components/auth/utils'
import { EmailAuth, SocialAuth } from '@/components/auth/interfaces'
import { Divider } from '@/components/auth/ui'

/* Cannot import external props interface.
 * See: https://github.com/vuejs/core/issues/4294 */
export interface Props {
  onlyThirdPartyProviders?: boolean,
  providers?: Array<Provider> | null,
  socialLayout?: 'row' | 'col',
  labels?: Labels,
  appearance?: Appereance,
  message?: string,
  error?: string
}
const props = withDefaults(defineProps<Props>(), { ...propsDefaults })

const showDivider = useShowDivider(props)

defineEmits([
  'signInWithOAuth',
  'signUp'
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

  <EmailAuth
    v-if="!onlyThirdPartyProviders"
    view="sign_up"
    :labels="labels"
    :appearance="appearance"
    :message="message"
    :error="error"
    @signUp="creds => $emit('signUp', creds)"
  >
    <template #anchors>
      <slot name="anchors"></slot>
    </template>
  </EmailAuth>
</template>
