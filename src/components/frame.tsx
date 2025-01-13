const Frame = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`flex flex-col bg-[#20252B] border border-[#262932]  pl-5 pt-5 ${className}`}>
            {children}
        </div>

    )
}
export default Frame