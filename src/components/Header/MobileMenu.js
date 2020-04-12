import React, { useState } from 'react'
import { css } from '@emotion/core'
import Container from '../Container'

//import { bpMaxSM } from '../../lib/breakpoints'

import { useTheme } from '../Theming'

const Toggle = ({ children }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => {
    setToggle(!isToggledOn)
    if(window)
    window.scroll(0,0)
  }
  const theme = useTheme()
  const color = theme.colors.white

  return (
    <div>
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={css`
          z-index: 30;
          
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 4px;
            background: ${color};
            position: fixed;
            
            right: 6%;
            @media(max-width:360px){
              right:12%;
            }
            ${isToggledOn ? 'background: transparent' : `background: green`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 4px;
             
              background: green;
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 4px;
              background: green;
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: ${theme.colors.headerBg};
          `}
        >
          <Container
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              a {
                color: white;
                font-size: 22px;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                :hover {
                  background: rgba(0, 0, 0, 0.2);
                }
              }
              .active {
                opacity:  0.4;
              }
            `}
          >
            {children}
          </Container>
        </div>
      )}
    </div>
  )
}

export default Toggle
