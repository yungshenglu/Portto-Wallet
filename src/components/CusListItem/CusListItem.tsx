import { useState, useEffect } from 'react';
import { AList } from '@P/antd';
import { IListItem } from '@I/list';
import AntCard from '@C/AntCard';
import AntNotification from '@C/AntNotification';
import CusPostModal from '@C/CusPostModal';
import useFetchAssets from '@H/useFetchAssets';

export function CusListItem(props: IListItem) {
  const {
    itemId,
    imageUrl = '',
    name = '',
    collectionName = '',
    description = '',
    permalink = '',
    creatorImg = '',
    ownerImg = '',
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const [{ data, isLoading, isError }, refetch]: any = useFetchAssets(itemId);
  console.log('data:', data);

  useEffect(() => {
    if (isError) {
      AntNotification({
        message: '系統錯誤',
        description: '目前連線異常，請稍後再試。'
      });
    }
  }, [isError]);

  const handleOpenModal = async () => {
    setModalVisible(true);
    await refetch();
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <>
      <AList.Item onClick={handleOpenModal}>
        <AntCard
          title={name}
          imgSrc={imageUrl}
          imgAlt={name}
        />
      </AList.Item>
      <CusPostModal
        modalTitle={collectionName}
        modalData={{
          name,
          description,
          imageUrl,
          permalink,
          creatorImg,
          ownerImg,
        }}
        isLoading={isLoading}
        isError={isError}
        modalVisible={modalVisible}
        onCloseModal={handleCloseModal}
      />
    </>
  );
};
