<script setup lang="ts">
import type { Provider } from '@/components/auth/types'
import google from './svgs/google.svg'
import facebook from './svgs/facebook.svg'
import twitter from './svgs/twitter.svg'
import apple from './svgs/apple.svg'
import github from './svgs/github.svg'
import gitlab from './svgs/gitlab.svg'
import bitbucket from './svgs/bitbucket.svg'
import discord from './svgs/discord.svg'
import azure from './svgs/azure.svg'
import keycloak from './svgs/keycloak.svg'
import linkedin from './svgs/linkedin.svg'
import notion from './svgs/notion.svg'
import slack from './svgs/slack.svg'
import spotify from './svgs/spotify.svg'
import twitch from './svgs/twitch.svg'
import workos from './svgs/workos.svg'

const providers: {[key in Provider]: string} = {
  google,
  facebook,
  twitter,
  apple,
  github,
  gitlab,
  bitbucket,
  discord,
  azure,
  keycloak,
  linkedin,
  notion,
  slack,
  spotify,
  twitch,
  workos,
}

defineProps<{ name: keyof typeof providers }>()
</script>

<template>
  <img :src="providers[name]" :alt="`${name} icon`">
</template>
