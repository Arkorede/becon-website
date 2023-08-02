import { useState } from "react";
import "./TabView.css";

export default function TabView({ tabs = {} }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="">
      <div className="mt-5 min-h-[487px] border border-solid border-[#E5EAEF] rounded">
        {Object.keys(tabs).length === 0 ? (
          <div>No Tabs</div>
        ) : (
          <div>
            <div className="tabs flex p-6 border-b border-solid border-[#E5EAEF] gap-[3.875rem] font-medium text-sm text-[#8A8B9F] leading-[19px]">
              {tabs.map((tab, index) => (
                <label
                  key={index}
                  className={index === activeTabIndex ? "active-tab" : "tab"}
                  onClick={() => activateTab(index)}
                >
                  {tab.name}
                </label>
              ))}
            </div>
            <div className="">{tabs[activeTabIndex].content}</div>
          </div>
        )}
      </div>
    </div>
  );
}
