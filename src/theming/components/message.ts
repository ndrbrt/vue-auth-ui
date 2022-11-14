import { css } from '@stitches/core'

export const messageDefaultStyle = css({
  fontFamily: '$bodyFontFamily',
  fontSize: '$baseBodySize',
  marginBottom: '$labelBottomMargin',
  display: 'block',
  textAlign: 'center',
  variants: {
    color: {
      default: {
        color: '$messageText',
      },
      danger: {
        color: '$messageTextDanger',
      },
    },
  },
})
