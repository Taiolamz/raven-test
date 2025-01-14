const Frame = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={` bg-[#20252B] border border-[#262932]  pl-5 pt-5 lg:rounded-[8px]  ${className}`}>
        {/* <div className={`sm:flex sm:flex-col bg-[#20252B] border border-[#262932]  pl-5 pt-5 ${className}`}> */}
            {children}
        </div>

    )
}
export default Frame