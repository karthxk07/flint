import CompactSideBar from "@/src/components/Inbox/CompactSidebar";
import Contacts from "@/src/components/Inbox/Contacts";
import SideBar from "@/src/components/Sidebar";

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row h-screen overflow-clip">
        <SideBar />

        {children}
      </div>
    </>
  );
}
