import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

import './top-bar.scss'

const TopBar = ({text}) => {


  const [key, setKey] = useState(1);


  // const text = 'Envios gratis a Medellin en pedidos superiores a $70.000 al resto del pais en pedidos superiores a $100.000';

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: 20000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div id="top-bar">
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  )
}

export default TopBar
