import Flex from '../flex/flex';
import Hero from '../hero/hero';

const theHeroList = [
  {
    title: 'lorem10',
    direction: '',
    content: 'laksndakosndaklsnfalksnflasknflaksnfaslnf',
  },
  {
    title: 'lorem10',
    direction: 'row-reverse',
    content: 'laksndakosndaklsnfalksnflasknflaksnfaslnf',
  },
  {
    title: 'lorem10',
    direction: '',
    content: 'laksndakosndaklsnfalksnflasknflaksnfaslnf',
  },
  {
    title: 'lorem10',
    direction: 'row-reverse',
    content: 'laksndakosndaklsnfalksnflasknflaksnfaslnf',
  },
];

const HeroList = () => {
  return (
    <div>
      {theHeroList.map((hero, key) => (
        <Hero title={hero.title} direction={hero.direction} key={key}>
          {hero.content}
        </Hero>
      ))}
    </div>
  );
};

export default HeroList;
