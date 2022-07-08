import useAxios from 'axios-hooks';


// GET: Assets Detail
export default function useFetchAssets(token: string) {
  const [{ data, loading, error }, refetch] = useAxios({
      url: `http://localhost:9527/api/assets&token=${token}`,
      method: 'GET',
    }, {
      manual: true,
    }
  );

  return [{
    data,
    isLoading: loading,
    isError: error !== null,
  }, refetch];
}