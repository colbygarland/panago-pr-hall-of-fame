import Awards from '../awards.json';
import { Award, AwardProps } from './Award';

const awards: any = Awards.awards;

export const AllAwards = () => {
  let count = 0;
  return awards.map((a: AwardProps) => {
    count++;
    return <Award title={a.title} subtitle={a.subtitle} image={a.image} person={a.person} style={count % 2 === 0 ? '' : 'bg-primary'} />;
  });
};
