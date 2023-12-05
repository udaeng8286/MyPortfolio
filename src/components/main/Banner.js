import styled from "styled-components";
import Typewriter from "typewriter-effect";
import BannerImg from "../../asset/bannerImg.png";
const Banner = () => {
  return (
    <Container>
      <Section>
        <Text1>안녕하세요</Text1>
        <Text1>
          <StyledTypewriter
            options={{
              strings: ["Front-end", "프론트엔드"],
              autoStart: true,
              loop: true,
            }}
          />
          개발자
        </Text1>
        <Text2>송유정입니다!</Text2>
      </Section>
      <Image src={BannerImg} alt="Banner Image" />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  background-color: rgba(157, 198, 225, 0.25);
  justify-content: space-around;
  align-items: center;
  padding: 32px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div`
  color: black;
  font-size: 32px;
  display: flex;
`;

const Text2 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 36px;
`;

const StyledTypewriter = styled(Typewriter)`
  .Typewriter {
    display: inline-block;
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

const Image = styled.img`
  margin-top: 36px;
  color: black;
  width: 320px;
`;
