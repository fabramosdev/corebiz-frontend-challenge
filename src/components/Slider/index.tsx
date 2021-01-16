import React, { useState, useEffect } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import { Container } from './styles';

interface IWindowSizeType {
  width: number;
  height: number;
}

const Slider:React.FC = () => {
  const images = [
    { url: 'https://img.ibxk.com.br/2015/11/11/11165928520186.jpg?w=1120&h=420&mode=crop&scale=both' },
    { url: 'https://i.pinimg.com/originals/01/d5/9e/01d59edc328728de22f87989495c1751.jpg' },
    { url: 'https://baixarpapeldeparede.com/web/wallpapers/wallpaper-hd-galaxia-01/thumbnail/lg.jpg' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjNM9JmChJYh6BpJQ_uqKJKjFI9MNcMDi3Q&usqp=CAU' },
    { url: 'https://www.fundospaisagens.com/1366x768/wallpaper-de-uma-galaxia.jpg' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZWwH3ujeERcHovqZlj6m0c-0CarTD1bepg&usqp=CAU' },
  ];

  const size = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState<IWindowSizeType>({
      width: 0,
      height: 0,
    });

    useEffect(() => {
    // Handler to call on window resize
      function handleResize() {
      // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  return (
    <Container>
      <SimpleImageSlider
        width={size.width}
        height={430}
        images={images}
        showBullets
        showNavs
      />
    </Container>
  );
};

export default Slider;
