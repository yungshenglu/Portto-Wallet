import { useState, useEffect } from 'react';
import axios from 'axios';


// GET: Assets List
export default function useFetchAssetsList(offset: number) {
  const [assetsList, setAssetsList] = useState([]);
  const [hasMoreAssets, setHasMoreAssets] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const apiUrl = `http://localhost:9527/api/assets&offset=${offset}`;
    if (offset === 0) {
      axios.get(apiUrl)
        .then((res) => {
          const assets = res.data.assets;
          setAssetsList(assets);
          setHasMoreAssets(assets.length > 0);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
        });
    } else {
      setTimeout(() => {
        axios.get(apiUrl)
          .then((res) => {
            const assets = res.data.assets;
            setAssetsList((prev) => [...prev, ...assets] as any);
            setHasMoreAssets(assets.length > 0);
            setIsLoading(false);
          })
          .catch(() => {
            setIsError(true);
          });
        }, 800);
    }
  }, [offset]);

  return [{
    data: assetsList,
    isLoading,
    isError,
    hasMoreAssets,
  }];
}
