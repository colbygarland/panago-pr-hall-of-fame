import { AllAwards } from '../components/AllAwards';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Heading } from '../components/Heading';
import { Nominees } from '../components/Nominees';
import { SubHeading } from '../components/SubHeading';
import { copy } from '../lib';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Header />

      <Content style="bg-primary">
        <Container>
          <h1 className="text-tertiary font-sansBold text-5xl lg:text-8xl leading-relaxed">
            {copy.title}
            <br /> {currentYear}.
          </h1>
          <SubHeading style="text-tertiary">{copy.subtitle}</SubHeading>
        </Container>
      </Content>

      <Content>
        <Container>
          <Heading>{copy.meetNominees}</Heading>
        </Container>
      </Content>

      <Content style="bg-secondary">
        <Container>
          <Nominees />
        </Container>
      </Content>

      <Content>
        <Container>
          <div className="lg:flex justify-between items-center">
            <Heading>{copy.categoryIs}</Heading>
            <img className="w-32 lg:w-64 object-cover" src="pizza.png" alt="" />
          </div>
        </Container>
      </Content>

      <AllAwards />

      <Footer />
    </>
  );
}
