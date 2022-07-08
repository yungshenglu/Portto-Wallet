import AntRow from '@C/AntRow';
import AntCol from '@C/AntCol';
import CusListTitle from '@C/CusListTitle';


export function Layout(props: any) {
  const {
    children,
  } = props;

  return (
    <>
      <CusListTitle content="Portto Wallet" />
      <AntRow justify="space-around" align="top">
        <AntCol md={14} lg={18}>
          { children }
        </AntCol>
      </AntRow>
    </>
  );
};
