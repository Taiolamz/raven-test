import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface TabItem {
    label: string;
    tab: string;
    path: string;
}

interface TabProps {
    tabs: TabItem[];
    queryParam?: string
}

const Tab: React.FC<TabProps> = ({ tabs, queryParam }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (tabName: string) => {
        const queryParams = new URLSearchParams(location.search);
        return queryParams.get(queryParam!) === tabName;
    };

    const handleTabClick = (path: string) => {
        navigate(path);
    };
    

    return (
        <div className="bg-[#1C2127] cursor-pointer flex lg:justify-normal lg:w-fit w-full justify-between items-center overflow-auto hidden-scrollbar p-[4px] px-[4px] gap-2 rounded-[8px]">
            {tabs.map((tab, idx) => (
                <React.Fragment key={idx}>
                    <p
                        className={`text-white font-medium min-w-fit rounded-[8px] px-8 py-1 my-[.5px] ${isActive(tab.tab) ? 'bg-[#E9F0FF0D]' : ''}`}
                        onClick={() => handleTabClick(tab.path)}
                    >
                        {tab.label}
                    </p>
                    {idx < tabs.length - 1 && <p className='text-[#3C3C435C]'>|</p>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Tab;
