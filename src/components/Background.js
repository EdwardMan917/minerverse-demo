import React, { useRef }  from "react";
import { StyledStonesBack, StyledStonesMiddle, StyledStonesFront } from './styles/StyleStones';
import { StyledMoon, StyledLightUFO, StyledEarth, StyledUFO } from "./styles/StyledObjects";
import { StyledBackground } from "./styles/StyledBackground";
import Footer from "./Footer";


function Background() {

  const MoonRef = useRef();
  const BackStoneRef = useRef();
  const MiddleStoneRef = useRef();
  const FrontStoneRef = useRef();

  // const [rect, setRect] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setRect(MoonRef.current.getBoundingClientRect());
  //   })
  //   console.log(rect);
  // });


  return (
    <StyledBackground>
      <StyledStonesBack ref={BackStoneRef} />
      <StyledStonesMiddle ref={MiddleStoneRef} />
      <StyledStonesFront ref={FrontStoneRef} />
      <StyledMoon ref={MoonRef} />
      <StyledLightUFO/>
      <StyledEarth />
      <StyledUFO />
      <Footer />
    </StyledBackground>
  )
}

export default Background;