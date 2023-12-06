import { useEffect, useState } from 'react';

import { useEnv } from '~/app/env-provider';
import { useGetFetch } from '~/features/app/hooks/use-get-fetch';
import { MemoUiModel } from '~/features/memo/ui-models/memo';

type ApiResponseData = { id: string; title: string; createdAt: string };

export const useFetchMemosApi = () => {
  const [memos, setMemos] = useState<MemoUiModel[]>([]);
  const { API_BASE_URL } = useEnv();

  const { data, error, isLoading, query } = useGetFetch<ApiResponseData[]>(`${API_BASE_URL}/memos`);

  useEffect(() => {
    if (!data) return;
    const memos = convertToUiModel(data);

    setMemos(memos);
  }, [data]);

  return { memos, error, isLoading, query };
};

const convertToUiModel = (data: ApiResponseData[]): MemoUiModel[] => {
  return data.map((memo) => ({ id: memo.id, title: memo.title, createdAt: memo.createdAt }));
};
