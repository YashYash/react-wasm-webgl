import { HomeProps } from './home.types'
import React from 'react'

export const Home: React.FC<HomeProps> = props => {
  import('webgl-wasm-dev').then(module => {
    const result = module.fib(1)
    console.log(result)
  })
  return (
    <div>
      <p>Home here</p>
    </div>
  )
}