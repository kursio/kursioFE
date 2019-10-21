/** @jsx jsx */
import { jsx } from '@emotion/core';
import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import HomeSection from 'components/HomeSection/HomeSection';
import withLayout from 'components/Layout/Layout';

const Home = () => {
  const objArray = [
    {
      image: '/static/img/programmer.jpg',
      title: 'Lorem ipsum dolor sit, lorem ipsum',
      subtitle: 'Course Author Name',
      description: 'Illustration, Graphic Design, Mobile Apps, Web Development',
    },
    {
      image: '/static/img/programmer.jpg',
      title: 'Lorem ipsum dolor sit, lorem ipsum',
      subtitle: 'Course Author Name',
      description: 'Illustration, Graphic Design, Mobile Apps, Web Development',
    },
    {
      image: '/static/img/programmer.jpg',
      title: 'Lorem ipsum dolor sit, lorem ipsum',
      subtitle: 'Course Author Name',
      description: 'Illustration, Graphic Design, Mobile Apps, Web Development',
    },
    {
      image: '/static/img/programmer.jpg',
      title: 'Lorem ipsum dolor sit, lorem ipsum',
      subtitle: 'Course Author Name',
      description: 'Illustration, Graphic Design, Mobile Apps, Web Development',
    },
  ];

  const teachersArray = [
    {
      image: '/static/img/headshot.jpg',
      title: 'Author Name',
      subtitle: 'Profession',
    },
    {
      image: '/static/img/headshot.jpg',
      title: 'Author Name',
      subtitle: 'Profession',
    },
    {
      image: '/static/img/headshot.jpg',
      title: 'Author Name',
      subtitle: 'Profession',
    },
    {
      image: '/static/img/headshot.jpg',
      title: 'Author Name',
      subtitle: 'Profession',
    },
  ];

  return (
    <React.Fragment>
      <HomeSection title="Popular Courses" objects={objArray} />
      <HomeSection title="Recommended Courses" objects={objArray} />
      <HomeSection title="Top Teachers" objects={teachersArray} />
    </React.Fragment>
  );
}


export default withLayout(Home);
