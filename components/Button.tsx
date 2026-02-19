import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
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
  // Base styles: Sharp corners, responsive spacing (py-3/4 px-6/8), robust typography
  const baseStyles = "inline-flex items-center justify-center gap-3 py-3 md:py-4 px-6 md:px-8 text-xs md:text-sm font-sans uppercase tracking-widest font-medium transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed rounded-none";
  
  const variants = {
    primary: "bg-royale-brown text-white border border-royale-brown hover:bg-royale-gold hover:border-royale-gold hover:text-white",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-royale-brown",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] border border-transparent",
    outline: "bg-transparent text-royale-brown border border-royale-brown hover:bg-royale-brown hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {icon && <span className="w-4 h-4">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
};