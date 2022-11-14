import { computed } from 'vue'
import { merge } from 'lodash-es'

import type { Labels } from '@/components/auth/types'

export const defaultLabels = {
  sign_up: {
    email_label: "Email address",
    password_label: "Create a Password",
    button_label: "Sign up",
    social_provider_text: "Sign in with",
    link_text: "Already have an account? Sign in"
  },
  sign_in: {
    email_label: "Email address",
    password_label: "Your Password",
    button_label: "Sign in",
    social_provider_text: "Sign in with",
    link_text: "Don't have an account? Sign up"
  },
  magic_link: {
    email_input_label: "Email address",
    email_input_placeholder: "Your email address",
    button_label: "Send Magic Link",
    link_text: "Send a magic link email"
  },
  forgotten_password: {
    email_label: "Email address",
    password_label: "Your Password",
    button_label: "Send reset password instructions",
    link_text: "Forgot your password?"
  },
  update_password: {
    password_label: "New password",
    password_input_placeholder: "Your new password",
    button_label: "Update password"
  }
}

export function useLabels(labels?: Labels) {
  return computed<typeof defaultLabels>(() => {
    return merge({}, defaultLabels, labels)
  })
}
