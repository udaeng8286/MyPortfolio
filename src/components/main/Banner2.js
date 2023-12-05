import styled from "styled-components";
import Typewriter from "typewriter-effect";
import BannerImg from "../../asset/bannerImg4.png";
import ArrowIcon from "../../asset/arrowBottomIcon.png";
const Banner = () => {
  return (
    <Container>
      <Image src={BannerImg} alt="Banner Image" />
      <Section>
        <Text1>안녕하세요</Text1>
        <Text1>
          <StyledTypewriterWrapper>
            <StyledTypewriter
              options={{
                strings: ["Front-end", "프론트엔드"],
                autoStart: true,
                loop: true,
              }}
            />
          </StyledTypewriterWrapper>
          개발자
        </Text1>
        <Text2>"송유정" 입니다!</Text2>
      </Section>
      <Arrow>
        <Button src={ArrowIcon} alt="Arrow Bottom Icon" />
      </Arrow>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  display: flex;
  /* background-color: rgba(157, 198, 225, 0.25); */
  padding-left: 72px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Text1 = styled.div`
  color: white;
  font-size: 48px;
  display: flex;
`;

const Text2 = styled.div`
  color: white;
  font-weight: bold;
  font-size: 52px;
`;

const StyledTypewriterWrapper = styled.div`
  .Typewriter {
    display: inline-block;
    font-weight: bold;
  }

  .Typewriter__cursor {
    display: inline-block;
    margin-left: 3px;
    vertical-align: middle;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const StyledTypewriter = styled(Typewriter)``;

const Arrow = styled.div`
  position: absolute;
  bottom: 16px; /* 조절 가능한 값 */
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 24px;
`;

const Button = styled.img`
  width: 48px;
  height: 32px;
`;
