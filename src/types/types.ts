import type { RefObject } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export type InputType =
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type AriaHasPopup =
  boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';

export type AriaCurrentType =
  'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';

export type InputMode =
  'numeric' | 'decimal' | 'search' | 'tel' | 'url' | 'email';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type AriaLive = 'off' | 'assertive' | 'polite';

export type ControlInputType = Extract<InputType, 'checkbox' | 'radio'>;

export type RefBtnType = RefObject<HTMLButtonElement | null>;
