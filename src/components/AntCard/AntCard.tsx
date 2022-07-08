import { ACard, AEmpty } from '@P/antd';

interface IAntCard {
  title: string;
  imgSrc: string;
  imgAlt: string;
}

export function AntCard(props: IAntCard) {
  const {
    title,
    imgSrc,
    imgAlt,
  } = props;

  return (
    <ACard
      hoverable
      style={{
        width: '100%',
        borderRadius: '1rem',
      }}
      cover={
        imgSrc ? (
          <img
            alt={imgAlt}
            src={imgSrc}
            style={{
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
          />
        ) : (
          <AEmpty
            imageStyle={{
              margin: 0,
              padding: '2rem',
              width: '100%',
            }}
            image={AEmpty.PRESENTED_IMAGE_SIMPLE}
            description="No Image"
          />
        )
      }
    >
      <ACard.Meta
        title={title ? title : ''}
        description={!title ? 'No Title' : ''}
        style={{
          color: '#4D5472',
        }}
      />
    </ACard>
  );
}
