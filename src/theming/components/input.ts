import { css } from '@stitches/core'

export const inputDefaultStyle = css({
  fontFamily: '$inputFontFamily',
  background: '$inputBackground',
  borderRadius: '$inputBorderRadius',
  padding: '$inputPadding',
  cursor: 'text',
  borderWidth: '$inputBorderWidth',
  borderColor: '$inputBorder',
  borderStyle: 'solid',
  fontSize: '$baseInputSize',
  width: '100%',
  color: '$inputText',
  boxSizing: 'border-box',
  '&:hover': {
    borderColor: '$inputBorderHover',
    outline: 'none',
  },
  '&:focus': {
    borderColor: '$inputBorderFocus',
    outline: 'none',
  },
  '&::placeholder': {
    color: '$inputPlaceholder',
    letterSpacing: 'initial',
  },
  transitionPproperty: 'background-color, border',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '100ms',
  variants: {
    type: {
      default: {
        letterSpacing: '0px',
      },
      password: {
        letterSpacing: '6px',
      },
    },
  },
})
