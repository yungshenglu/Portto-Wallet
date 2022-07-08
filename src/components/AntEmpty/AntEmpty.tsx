import { StyledEmpty } from './style';

export function AntEmpty(props: any) {
  const {
    description = 'No Data',
  } = props;

  return <StyledEmpty description={description} />;
};
