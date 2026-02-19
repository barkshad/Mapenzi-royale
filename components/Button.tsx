import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href,
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-sans uppercase tracking-widest font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-royale-gold text-royale-brown hover:bg-white hover:text-royale-brown border border-royale-gold hover:border-royale-brown",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-royale-brown",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] border border-transparent shadow-sm",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};