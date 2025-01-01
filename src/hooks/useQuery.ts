import { useCallback, useState } from 'react';

interface UseQueryOptions<T> {
  queryFn: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useQuery<T>({ queryFn, onSuccess, onError }: UseQueryOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await queryFn();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An error occurred');
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [queryFn, onSuccess, onError]);

  return { data, loading, error, refetch };
}