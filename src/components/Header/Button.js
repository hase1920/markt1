import { React } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import { rgba, darken } from 'polished'

const Button = ({ to, children, secondary, ...restProps }) => {
  const theme = useTheme()
  const styles = css({
    display: 'inline-flex',
    border: 'blue 1px solid',
    width:'70%',

    borderRadius: '4px',
    background: secondary
      ? rgba(theme.colors.primary, 0.1)
      : theme.colors.primary,
    color: secondary ? theme.colors.primary : theme.colors.white,
    padding: '10px 15px',
    
    marginRight: '0px',
    cursor: 'pointer',
    transition: 'all 150ms ease',
    '@media (hover: hover)': {
      ':hover': {
        color: theme.colors.white,
        background: darken(0.1, theme.colors.primary),
      },
    },
  })
  return to ? (
    <Link to={to} css={styles} {...restProps}>
      {children}
    </Link>
  ) : (
    <button css={styles} {...restProps}>
      {children}
    </button>
  )
}

export default Button
