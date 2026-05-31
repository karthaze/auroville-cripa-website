import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type ButtonVariant = 'red' | 'olive' | 'gold' | 'outline' | 'outline-dark';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Button({
  variant = 'red',
  href,
  to,
  type = 'button',
  onClick,
  children,
  className = '',
  style,
}: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} style={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
