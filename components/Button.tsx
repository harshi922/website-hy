import React from 'react';

const Button = ({
    title,
    theme,
    icon,
    handleClick,
}: {
    title: string;
    theme: "light" | "dark"; // Allow only 'light' or 'dark' theme
    icon?: React.ReactNode;
    handleClick?: () => void;
}) => {
    const buttonClasses =
        theme === "dark"
            ? "w-40 h-10 rounded-xl bg-[#F0A8D0] text-white border dark:border-white border-transparent text-sm hover:bg-gray-200"
            : "w-40 h-10 rounded-xl bg-[#FFEBD4] text-black border border-transparent text-sm hover:bg-gray-200";

    return (
        <button className={buttonClasses} onClick={handleClick}>
            {title}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
};

export default Button;
