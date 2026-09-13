import { useEffect } from 'react';
import { useLocation } from 'react-router';

type MetaTagsProps = {
  description?: string;
  keywords?: string;
  metaTitle?: string;
};

const MetaTags = ({ description, keywords, metaTitle }: MetaTagsProps) => {
  const { pathname } = useLocation();

  const getTitle = (pathname: string): string => {
    if (pathname === 'logIn') {
      return 'Login';
    }
    if (pathname === '/') {
      return 'Home';
    }
    if (metaTitle) {
      return metaTitle;
    }
    return '';
  };

  const title = getTitle(pathname);

  useEffect(() => {
    document.title = `Fashion Fusion | ${title}`;
  }, [pathname, title]);

  return (
    <>
      <meta
        name="description"
        content={
          description || 'Minimal React and TypeScript project powered by Vite'
        }
      />
      <meta name="keywords" content={keywords || 'Startup project'} />
    </>
  );
};

export default MetaTags;
