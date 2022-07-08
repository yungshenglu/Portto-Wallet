import { StyledItemTitle } from './style';

interface ICusItemTitle {
  content: string;
}

export function CusItemTitle(props: ICusItemTitle) {
  const {
    content,
  } = props;

  return (
    <StyledItemTitle>
      { content }
    </StyledItemTitle>
  );
};
