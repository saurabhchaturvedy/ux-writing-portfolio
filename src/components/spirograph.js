import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { color } from 'styles/theme'
import debounce from 'lodash/debounce'
import Richa from "../img/richa.svg";

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const CanvasWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`



const Spirograph = () => {
 

  return (
    <Div>
   <img src={Richa}></img>
    </Div>
  )
}

export default Spirograph
