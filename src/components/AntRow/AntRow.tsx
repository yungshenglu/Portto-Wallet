import { ARow } from '@P/antd';

export function AntRow(props: any) {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <ARow {...otherProps}>
      {children}
    </ARow>
  );
};

