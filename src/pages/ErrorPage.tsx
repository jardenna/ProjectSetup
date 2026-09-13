import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';
import ErrorContent from '../components/errors/ErrorContent';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  const handleGoback = () => {
    void navigate(-1);
  };

  return (
    <main className="error-page">
      <ErrorContent
        onClick={handleGoback}
        errorText={error.data as string}
        btnLabel="Go back"
      />
    </main>
  );
};

export default ErrorPage;
