import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

export interface AwardProps {
  title: string;
  subtitle: string;
  image?: string;
  person?: string;
  style?: string;
}

export const Award = (props: AwardProps) => {
  const { title, subtitle, image, person, style } = props;
  return (
    <Content style={style}>
      <Container>
        <Heading>{title}</Heading>
        <SubHeading>{subtitle}</SubHeading>
        <SubHeading>
          <span className="text-4xl">
            Current Panagoer: <span className="font-sansBold text-secondary">{person}</span>
          </span>
        </SubHeading>
        {image ? <img src={image} alt="Award" /> : ''}
      </Container>
    </Content>
  );
};
