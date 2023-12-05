import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Start = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#0d1d35",
          },
          fpsLimit: 40,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 600,
              value: 300,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1.5,
            },
            move: {
              enable: true,
              speed: 0.3,
              // direction: "bottom",
              // outModes: {
              //   default: "bounce",
              // },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              push: {
                particles_nb: 8,
                speed: 4,
                distance: 100,
              },
              bubble: {
                distance: 250,
                size: 0,
                opacity: 0,
                speed: 3,
              },
            },
          },
        }}
      />
      <Section>
        <Text>
          Hello! I’m YuJeong <br /> Welcome to my portfolio!
        </Text>
        <Button>Let's Go! →</Button>
      </Section>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Text = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  margin-bottom: 32px;
  user-select: none;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  width: 120px;
  height: 40px;
`;
