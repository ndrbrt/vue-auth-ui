import { css } from '@stitches/core'

export const anchorDefaultStyle = css({
  fontFamily: '$bodyFontFamily',
  fontSize: '$baseBodySize',
  cursor: 'pointer',
  marginBottom: '$anchorBottomMargin',
  color: '$anchorTextColor',
  display: 'block',
  textAlign: 'center',
  textDecoration: 'underline',
  '&:hover': {
    color: '$anchorTextHoverColor',
  },
})
