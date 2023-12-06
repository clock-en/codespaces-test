import { useEffect, useState } from 'react';

import { usePostFetch } from '~/features/app/hooks/use-post-fetch';
import { getApiBaseUrl } from '~/features/app/utils/get-api-base-url';

type ApiResponseData = { id: string };

export const useCreateMemoApi = () => {
  const [success, setSuccess] = useState<boolean | null>(null);

  const { data, error, isLoading, mutate } = usePostFetch<ApiResponseData>(`${getApiBaseUrl()}/memos/create`);

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
