'use client';

const AppTitle = ({ size, title }: { size: "sm" | "md" | "lg" | "xl" | "2xl", title: string }) => {
    return (
        <div className={`text-${size} font-bold`}>{title}</div>
    )
}

export default AppTitle;
