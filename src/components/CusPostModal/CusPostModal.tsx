import AntModal from '@C/AntModal';
import { AAvatar, ADescriptions, AImage, ACol, ARow, AUserOutlined } from '@P/antd';
import { StyledItemTitle } from './style';
import AntButton from '@C/AntButton';
import AntEmpty from '@C/AntEmpty';
import CusItemTitle from '@C/CusItemTitle';

interface ICusPostModal {
  modalTitle: string;
  modalData: any;
  isLoading: boolean;
  isError: boolean
  modalVisible: boolean;
  onCloseModal: () => void;
}

export function CusPostModal(props: ICusPostModal) {
  const {
    modalTitle,
    modalData,
    isLoading = true,
    isError = false,
    modalVisible = false,
    onCloseModal,
  } = props;

  const handleClick = () => {
    const url = modalData.permalink ? modalData.permalink : '';
    window.open(url, '_blank');
  }

  return (
    <AntModal
      title={
        <StyledItemTitle margin={false}>
          { modalTitle }
        </StyledItemTitle>
      }
      visible={modalVisible}
      isLoading={isLoading}
      isError={isError}
      onCancel={onCloseModal}
    >
      <ARow
        gutter={[16, 12]}
        justify="center"
        align="middle"
      >
        <ACol
          span={20}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {modalData.imageUrl ? (
            <AImage preview={false} src={modalData.imageUrl} />
          ) : (
            <AntEmpty description="No Image" />
          )}
        </ACol>
        <ACol span={20}>
          <CusItemTitle content={modalData?.name || 'No Title'} />
        </ACol>
        <ACol span={20}>
          {modalData?.description || 'No Description'}
        </ACol>
        <ACol span={20}>
          <ADescriptions>
            <ADescriptions.Item
              label="Creator"
              labelStyle={{
                color: '#7F7F7F',
                alignItems: 'center',
              }}
            >
              <AAvatar src={modalData?.creatorImg || AUserOutlined} />
            </ADescriptions.Item>
            <ADescriptions.Item
              label="Owner"
              labelStyle={{
                color: '#7F7F7F',
                alignItems: 'center',
              }}
            >
              <AAvatar src={modalData?.ownerImg || AUserOutlined} />
            </ADescriptions.Item>
          </ADescriptions>
        </ACol>
        <ACol span={20}>
          <AntButton onClick={handleClick} disabled={Boolean(modalData.permalink)}>
            Permalink
          </AntButton>
        </ACol>
      </ARow>
    </AntModal>
  );
};
