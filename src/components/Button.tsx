import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import type {
  AriaCurrentType,
  AriaHasPopup,
  ButtonVariant,
  RefBtnType,
} from '../types/types';
import Loader from './loader/Loader';
import VisuallyHidden from './VisuallyHidden';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ariaControls?: string;
  ariaCurrent?: AriaCurrentType;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: AriaHasPopup;
  ariaLabel?: string;
  ariaPressed?: boolean;
  ref?: RefBtnType;
  showBtnLoader?: boolean;
  variant?: ButtonVariant;
  refCallback?: (element: HTMLButtonElement | null) => void;
}

const Button = ({
  children,
  type,
  id,
  tabIndex,
  variant = 'primary',
  onClick,
  refCallback,
  ariaPressed,
  ariaDescribedBy,
  ariaExpanded,
  ariaControls,
  ariaCurrent,
  ariaLabel,
  ariaHasPopup,
  role,
  className = '',
  autoFocus,
  disabled,
  name,
  showBtnLoader,
  ref,
}: ButtonProps) => (
  <button
    id={id}
    tabIndex={tabIndex}
    role={role}
    type={type ?? 'button'}
    ref={refCallback || ref}
    onClick={onClick}
    aria-pressed={ariaPressed}
    aria-describedby={ariaDescribedBy}
    aria-expanded={ariaExpanded}
    aria-current={ariaCurrent}
    aria-controls={ariaControls}
    aria-haspopup={ariaHasPopup}
    autoFocus={autoFocus}
    disabled={disabled || showBtnLoader ? true : undefined}
    className={`btn btn-${variant} ${className}`}
    name={name}
  >
    {ariaLabel && <VisuallyHidden>{ariaLabel}</VisuallyHidden>}
    {!showBtnLoader ? (
      children
    ) : (
      <>
        <VisuallyHidden>Loading</VisuallyHidden>
        <span aria-hidden>
          <Loader />
        </span>
      </>
    )}
  </button>
);

export default Button;
