import { css } from 'styled-components'

export const size = {
  //media query breakpoints;
  small: 400,
  med: 960,
  large: 1140,
}

//create function for each breakpoint in our object...
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
