import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://divyanivekagg.github.io/portfolio">Primary link</Link>
    <Link secondary href="https://divyanivekagg.github.io/portfolio">
      Secondary link
    </Link>
  </StoryContainer>
);
