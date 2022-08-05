import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './config/particlesConfig'
export const particlesBackground = () => {
  return (
    <div><particles params = {particlesConfig}></particles></div>
  )
}
