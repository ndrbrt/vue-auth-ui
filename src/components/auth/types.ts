import type { CSSProperties } from 'vue'
import type { CssComponent } from '@stitches/core/types/styled-component'

import type { Theme, ThemeVariables } from '@/theming/types'


export type View =
  | 'sign_in'
  | 'sign_up'
  | 'magic_link'
  | 'forgotten_password'
  | 'update_password'


export type Provider = 
  | 'google'
  | 'facebook'
  | 'twitter'
  | 'apple'
  | 'github'
  | 'gitlab'
  | 'bitbucket'
  | 'discord'
  | 'azure'
  | 'keycloak'
  | 'linkedin'
  | 'notion'
  | 'slack'
  | 'spotify'
  | 'twitch'
  | 'workos'


export interface Labels {
  sign_up?: {
    email_label?: string,
    password_label?: string,
    button_label?: string,
    social_provider_text?: string,
    link_text?: string
  },
  sign_in?: {
    email_label?: string,
    password_label?: string,
    button_label?: string,
    social_provider_text?: string,
    link_text?: string
  },
  magic_link?: {
    email_input_label?: string,
    email_input_placeholder?: string,
    button_label?: string,
    link_text?: string
  },
  forgotten_password?: {
    email_label?: string,
    password_label?: string,
    button_label?: string,
    link_text?: string
  },
  update_password?: {
    password_label?: string,
    password_input_placeholder?: string,
    button_label?: string
  }
}


interface AppearanceItem<T> {
  anchor?: T,
  button?: T,
  container?: T,
  divider?: T,
  input?: T,
  label?: T,
  loader?: T,
  message?: T
}

export interface Appereance {
  theme?: Theme,
  themeVariant?: 'default' | string,
  prependedClassName?: string,
  variables?: {
    [key: string]: ThemeVariables
  },
  className?: AppearanceItem<string | CssComponent>,
  style?: AppearanceItem<CSSProperties>,
}
