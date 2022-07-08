import { ANotification } from '@P/antd';

export function AntNotification(props: any) {
  return ANotification.error({
    message: props.messages,
    description: props.description
  })
};
