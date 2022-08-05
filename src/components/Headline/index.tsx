import { Container } from "../Core/Container";
import { Wrapper } from "./styles";

interface HeadlineProps{
  title: string,
  subtitle: string,
}

export function Headline({title, subtitle}:HeadlineProps) {
  return (
    <Wrapper>
      <Container css={{ flexDirection: 'column'}}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </Container>
    </Wrapper>
  );
}
