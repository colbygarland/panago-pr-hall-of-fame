import { useState } from 'react';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { copy, titleToSlug } from '../lib';

export interface AwardProps {
  title: string;
  subtitle: string;
  image?: string;
  person?: string;
  style?: string;
}

export const Award = (props: AwardProps) => {
  const { title, subtitle, image, person, style } = props;
  const [visible, setVisible] = useState(false);

  function handleOnClick() {
    setVisible(true);
  }

  return (
    <Content style={style} id={titleToSlug(title)}>
      <Container>
        <Heading>{title}</Heading>
        <SubHeading>{subtitle}</SubHeading>
        <SubHeading>
          <span className="text-2xl lg:text-4xl">{copy.awardWinner}</span>
          {visible ? (
            <>
              <span className="ml-10 inline-block font-sansBold text-secondary">{person}</span>
            </>
          ) : (
            <button
              onClick={handleOnClick}
              className="ml-10 px-10 py-2 bg-secondary border-secondary border-4 text-white font-sansBold rounded-full transition duration-100 hover:bg-transparent hover:text-secondary"
            >
              {copy.revealButtonText}
            </button>
          )}
        </SubHeading>
        {image ? <img src={image} alt="Award" /> : ''}
      </Container>
    </Content>
  );
};
