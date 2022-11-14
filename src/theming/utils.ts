import type { Appereance } from '@/components/auth/types'
import type { ComponentName } from '@/theming/types'
import {
  containerDefaultStyle, buttonDefaultStyle, inputDefaultStyle,
  anchorDefaultStyle, labelDefaultStyle, loaderDefaultStyle,
  dividerDefaultStyle, messageDefaultStyle
} from '@/theming/components'

export function generateClassName(
  appearance: Appereance | undefined,
  component: ComponentName,
  params?: Record<string, any>
)
{
  const componentStyles = {
    'anchor': anchorDefaultStyle,
    'button': buttonDefaultStyle,
    'container': containerDefaultStyle,
    'divider': dividerDefaultStyle,
    'input': inputDefaultStyle,
    'label': labelDefaultStyle,
    'loader': loaderDefaultStyle,
    'message': messageDefaultStyle
  }
  
  const defaultClassName = componentStyles[component](params).className
  let className = appearance?.className?.[component]
  if (className !== undefined && typeof className !== 'string') {
    className = className(params).className
  }

  return [
    appearance?.prependedClassName || '',
    defaultClassName,
    className || ''
  ].join(' ')
}
