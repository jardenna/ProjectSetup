export const MainPath = {
  Root: '/',
};

export const LinkText = {
  Home: 'home',
} as const;

export type LinkTextType = (typeof LinkText)[keyof typeof LinkText];
