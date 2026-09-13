import Button from '../Button';
import Picture from '../Picture';

interface ErrorContentProps {
  btnLabel: string;
  errorText: string;
  onClick: () => void;
}

const ErrorContent = ({ onClick, errorText, btnLabel }: ErrorContentProps) => {
  const src = '/icons/sad_smiley';
  return (
    <section className="error-content">
      <Picture
        className="emoji"
        src={`${src}.png`}
        srcSet={`${src}.avif`}
        alt="A really guilty emoji"
      />
      <h1>Error</h1>
      <p className="error-info">{errorText}</p>
      <Button onClick={onClick}>{btnLabel}</Button>
    </section>
  );
};

export default ErrorContent;
