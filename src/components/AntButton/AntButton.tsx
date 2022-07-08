import { AButton } from '@P/antd';

export function AntButton(props: any) {
  const {
    children,
    onClick = () => {},
    size = 'middle',
    type = 'default',
    disabled = false,
    loading = false,
    block = false,
    icon,
    style = {
      borderRadius: '0.5rem',
    },
  } = props;

  return (
    <AButton
      block={block}
      onClick={onClick}
      size={size}
      type={type}
      loading={loading}
      disabled={disabled}
      icon={icon}
      style={style}
    >
      {children}
    </AButton>
  );
};
