import { Container } from 'src/components/Core/Container';
import { Headline } from 'src/components/Headline';
import DefaultTemplate from '../templates/Default';

export default function Home() {
  return (
    <DefaultTemplate>
      <Headline title="Title" subtitle='Subtitle'/>
      <Container>
        <section>
          <article>My Article</article>
        </section>
      </Container>
    </DefaultTemplate>
  );
}
