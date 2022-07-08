import { ACol, ARow } from '@P/antd';
import AntEmpty from '@C/AntEmpty';
import AntSkeleton from '@C/AntSkeleton';
import CusListItem from '@C/CusListItem';


export function CusList(props: any) {
  const {
    listData,
    isLoading,
    lastItemRef,
  } = props;

  const listLength = listData?.length;

  return (
    <ARow
      gutter={16}
      justify="center"
      align="middle"
      style={{
        // marginTop: '2rem',
        color: '#4D5472',
      }}
    >
      {listData && listLength === 0
        ? isLoading ? <AntSkeleton active /> : <AntEmpty />
        : listData.map((item: any, index: number) => {
          if (index === listLength - 1) {
            return (
              <>
                <ACol
                  key={`${item.id}${index}`}
                  ref={lastItemRef}
                  data-id={index}
                  span={6}
                  xs={16}
                  md={6}
                  lg={4}
                >
                  <CusListItem
                    itemId={item?.token_id}
                    imageUrl={item?.image_url}
                    name={item?.name}
                    collectionName={item?.collection?.name}
                    description={item?.description}
                    permalink={item?.permalink}
                    creatorImg={item?.creator?.profile_img_url}
                    ownerImg={item?.owner?.profile_img_url}
                  />
                </ACol>
                {isLoading
                  ? <AntSkeleton active />
                  : null}
              </>
            );
          } else {
            return (
              <ACol
                key={`${item?.id}${index}`}
                span={6}
                xs={16}
                md={6}
                lg={4}
              >
                <CusListItem
                  itemId={item?.token_id}
                  imageUrl={item?.image_url}
                  name={item?.name}
                  collectionName={item?.collection?.name}
                  description={item?.description}
                  permalink={item?.permalink}
                  creatorImg={item?.creator?.profile_img_url}
                  ownerImg={item?.owner?.profile_img_url}
                />
              </ACol>
            );
          }
      })}
    </ARow>
  );
}
