import { useMemo } from 'react';
import { AModal } from '@P/antd';
import AntEmpty from '@C/AntEmpty';
import AntSkeleton from '@C/AntSkeleton';

interface IAntModal {
  children: any;
  title: any;
  visible: boolean;
  isLoading: boolean;
  isError: boolean;
  onCancel: () => void;
}

export function AntModal(props: IAntModal) {
  const {
    children,
    title = '',
    visible = false,
    isLoading = true,
    isError = false,
    onCancel
  } = props;

  const modalContent = useMemo(() => {
    return !isError
      ? isLoading
        ? <AntSkeleton active />
        : children
      : <AntEmpty />;
  }, [isLoading, isError, children]);

  return (
    <AModal
      title={title}
      visible={visible}
      footer={null}
      destroyOnClose={true}
      centered={true}
      width={600}
      onCancel={onCancel}
      style={{
        whiteSpace: 'pre-line',
        color: '#4D5472',
      }}
    >
      { modalContent }
    </AModal>
  );
};
