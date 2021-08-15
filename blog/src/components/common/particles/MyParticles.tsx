import React, { useState } from 'react'
import { useStore } from 'react-redux'
import Particles, { ClickMode, DivType, EasingType } from 'react-tsparticles'
import { IStore } from '../../../types/store/action';
export default function MyParticles() {
  // 获取state
  const state:IStore = useStore().getState();
  document.body.style.setProperty('--main-bg-color', state.header.bgColor);
  const color = document.body.style.getPropertyValue('--main-bg-color');
  
  return (  
    <div></div>
  )
}
