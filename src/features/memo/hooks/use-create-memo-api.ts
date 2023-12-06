import { useEffect, useState } from 'react';

import { useEnv } from '~/app/env-provider';
import { usePostFetch } from '~/features/app/hooks/use-post-fetch';

type ApiResponseData = { id: string };

export const useCreateMemoApi = () => {
  const [success, setSuccess] = useState<boolean | null>(null);
  const { API_BASE_URL } = useEnv();

  const { data, error, isLoading, mutate } = usePostFetch<ApiResponseData>(`${API_BASE_URL}/memos/create`);

  useEffect(() => {
    if (!data) return;

    if (error) {
      setSuccess(false);
      return;
    }
    setSuccess(true);
  }, [data, error]);

  return { success, error, isCreating: isLoading, createMemo: mutate };
};
