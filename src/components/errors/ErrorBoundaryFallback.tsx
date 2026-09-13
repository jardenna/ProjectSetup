import MetaTags from '../MetaTags';
import ErrorContent from './ErrorContent';

// Props are automatically injected by react-error-boundary
interface FallbackProps {
  error?: {
    data?: { message?: string };
    status?: number | string;
  };
  resetErrorBoundary: () => void;
}

const ErrorBoundaryFallback = ({
  resetErrorBoundary,
  error,
}: FallbackProps) => {
  console.error('Caught error in ErrorBoundary:', error);

  const errorText = error?.data?.message ?? 'Something went wrong';
  const hasStatusCode = error?.status && error.status !== 'FETCH_ERROR';
  const metaErrorText =
    `${error?.data?.message ?? ''} ${hasStatusCode ? error?.status : ''}`.trim();

  return (
    <>
      <MetaTags metaTitle={metaErrorText} />
      <ErrorContent
        onClick={resetErrorBoundary}
        errorText={errorText}
        btnLabel="Retry"
      />
    </>
  );
};

export default ErrorBoundaryFallback;
