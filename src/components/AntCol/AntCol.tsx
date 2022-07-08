import { ACol } from '@P/antd';

export function AntCol(props: any) {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <ACol {...otherProps}>
      {children}
    </ACol>
  );
}
