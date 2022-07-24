/** @jsx jsx */
import {useColorMode, jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
// @ts-ignore
import { UpDownFast } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
// @ts-ignore
import { useMediaQuery } from 'react-responsive';

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const [colorMode, setColorMode] = useColorMode();
  var bgImage = colorMode === `dark` ? `background-hero.jpg` : `background-hero-light.jpg`;
  var arrowColor = colorMode === `dark` ? `icon_brightest` : `black`;
  return  (
    <div>
      <Divider speed={0.2} offset={offset} factor={factor}>
          {!isPortrait ? <img src={ require('./images/' + bgImage) } style={{width: `100vw`, height: `auto`}}/> : ``}
          <UpDownFast>
              <SVG icon="downArrowCircle" hiddenMobile width={120} color={arrowColor} left="50%" top="85%" />
          </UpDownFast>
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <Intro />
        </Inner>
      </Content>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={0.2}
        offset={0.8}
        factor={2}
      >
      </Divider>
    </div>
  )
}

export default Hero