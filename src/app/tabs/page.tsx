"use client";
import useTabs from "@/components/Tabs/useTabs";

export default function HomePage() {
  const tabs = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3" },
  ];

  const { activeTab, RenderTabs } = useTabs({
    tabs,
    defaultTab: "tab1", // Default active tab
    size: "medium", // Tab size
  });

  // Dynamic content rendering based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <p>Content for Tab 1</p>;
      case "tab2":
        return <p>Content for Tab 2</p>;
      case "tab3":
        return <p>Content for Tab 3</p>;
      default:
        return <p>Content not found</p>;
    }
  };

  return (
    <div className="p-8">
      <RenderTabs /> {/* Call the RenderTabs component */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}
