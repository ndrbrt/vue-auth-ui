import { css } from '@stitches/core'

export const containerDefaultStyle = css({
  display: 'flex',
  gap: '4px',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        margin: '4px 0',
      },
      col: {
        flexDirection: 'column',
        margin: '8px 0',
      },
    },
    gap: {
      small: {
        gap: '4px',
      },
      medium: {
        gap: '8px',
      },
      large: {
        gap: '16px',
      },
    },
  },
})
