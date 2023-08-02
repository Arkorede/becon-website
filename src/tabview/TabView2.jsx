import { useState } from "react";
import "./TabView.css";

export default function TabView({ tabs = {} }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  const glow = () => {
    console.log("tabview");
  };

  return (
    <div className="Tabview">
      <div className="body mt-5 min-h-[487px]">
        {Object.keys(tabs).length === 0 ? (
          <div>No Tabs</div>
        ) : (
          <div>
            <div className="">
              <h2 className="text-white">{tabs[activeTabIndex].heading}</h2>
              <p className="text-white">{tabs[activeTabIndex].content}</p>
            </div>
            <div className="tabs flex p-6 gap-[3.875rem] font-medium text-sm text-[#8A8B9F] leading-[19px]">
              {tabs.map((tab, index) => (
                <label
                  key={index}
                  className={index === activeTabIndex ? "active-tab" : "tab"}
                  onClick={() => {
                    activateTab(index);
                    glow();
                  }}
                >
                  {tab.name}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
