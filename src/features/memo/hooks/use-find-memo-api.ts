import { useEffect, useState } from 'react';

import { useGetFetch } from '~/features/app/hooks/use-get-fetch';
import { getApiBaseUrl } from '~/features/app/utils/get-api-base-url';
import { MemoDetailUiModel } from '~/features/memo/ui-models/memo';

type ApiResponseData = { id: string; title: string; content: string; createdAt: string; updatedAt: string };

export const useFindMemoApi = (id: string) => {
  const [memo, setMemo] = useState<MemoDetailUiModel | null>(null);

  const { data, error, isLoading, query } = useGetFetch<ApiResponseData>(`${getApiBaseUrl()}/memos/detail/${id}`);

  useEffect(() => {
    if (!data) return;

    setMemo(convertToUiModel(data));
  }, [data]);

  return { memo, error, isLoading, query };
};

const convertToUiModel = (data: ApiResponseData): MemoDetailUiModel => {
  return {
    id: data.id,
    title: data.title,
    content: data.content,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};
