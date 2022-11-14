import { computed } from 'vue'

export function useShowDivider(props: any) {
  return computed<boolean>(() => {
    const providers = props.providers !== null && props.providers?.length > 0
    return providers && !props.onlyThirdPartyProviders
  })
}
