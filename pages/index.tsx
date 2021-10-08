import { AllAwards } from '../components/AllAwards';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Heading } from '../components/Heading';
import { Nominees } from '../components/Nominees';
import { SubHeading } from '../components/SubHeading';

export default function Home() {
  return (
    <>
      <Header />

      <Content style="bg-primary">
        <Container>
          <h1 className="text-tertiary font-sansBold text-8xl leading-relaxed">
            Pull Request
            <br /> Hall of Fame.
          </h1>
          <SubHeading style="text-tertiary">The good, the bad, and the ugly.</SubHeading>
        </Container>
      </Content>

      <Content>
        <Container>
          <Heading>Meet the Nominees.</Heading>
        </Container>
      </Content>

      <Content style="bg-secondary">
        <Container>
          <Nominees />
        </Container>
      </Content>

      <Content>
        <Container>
          <div className="flex justify-between items-center">
            <Heading>Category is...</Heading>
            <img className="w-64 object-cover" src="pizza.png" alt="" />
          </div>
        </Container>
      </Content>

      <AllAwards />

      <Footer />
    </>
  );
}
