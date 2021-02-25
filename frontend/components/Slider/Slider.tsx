import { useRef, useEffect, useState } from 'react';

import { 
  SliderStyle,
  SliderItem,
  SliderWrapper
} from "./Slider.styles"

import { SliderProps } from "./Slider.d"

import Grid from '@components/Grid';
import Arrow from "@components/Arrow"

const Slider: React.FC<SliderProps> = ({
  items
}) => {
  const element = useRef(null);
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    // Update the document title using the browser API
    setOffset(element.current.offsetWidth)
  }, [element]);
 
  const moveLeft = () => {
    element.current.scrollLeft -= offset / 2
  }
  
  const moveRight = () => {
    element.current.scrollLeft += offset
  }
  return (
  <>
  <SliderWrapper>
      <Arrow
        left
        onClick={() => moveLeft()}
      />
    <SliderStyle ref={element}>
      <Grid 
        gridGap=".75rem"
        autoFlow="column"
        autoColumns="max-content"
      >
        {items.map(item => {
          return <>
          <SliderItem key={item.id}>
            {item.name}
          </SliderItem>
            </>
        })}
      </Grid>
    </SliderStyle>
    <Arrow 
      right
      onClick={() => moveRight()}
      />
      </SliderWrapper>
  </>
  )
}

export default Slider;
