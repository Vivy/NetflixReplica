import Flex from '../flex/flex';
import Hero from '../hero/hero';

const theHeroList = [
  {
    src: '/image/tv.png',
    video: '/video/video1.mp4',
    title: 'Enjoy on your TV.',
    direction: '',
    content:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
  },
  {
    src: '/image/mobile.jpg',
    title: 'Download your shows to watch offline.',
    direction: 'row-reverse',
    content: 'Save your favorites easily and always have something to watch.',
  },
  {
    src: '/image/device-pile.png',
    title: 'Watch everywhere.',
    direction: '',
    video: '/video/video1.mp4',
    content:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
  },
  {
    src: '/image/kids.png',
    title: 'Create profiles for kids.',
    direction: 'row-reverse',
    content:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
  },
];

const HeroList = () => {
  return (
    <div>
      {theHeroList.map(({ title, direction, src, content, video }, key) => (
        <Hero
          title={title}
          direction={direction}
          key={key}
          video={video}
          src={src}
        >
          {content}
        </Hero>
      ))}
    </div>
  );
};

export default HeroList;
