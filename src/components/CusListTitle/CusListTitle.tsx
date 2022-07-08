import {
  StyledCusListTitle,
  StyledCusListTitleText
} from './style'

interface ICusListTitle {
  content: string;
}

export function CusListTitle(props: ICusListTitle) {
  const {
    content,
  } = props;

  return (
    <StyledCusListTitle>
      <StyledCusListTitleText>
        {content}
      </StyledCusListTitleText>
    </StyledCusListTitle>
  );
};
