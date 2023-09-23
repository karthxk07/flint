import CompactSideBar from "@/components/InboxPageView/CompactSidebar";
import Contacts from "@/components/InboxPageView/Contacts";

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row ">
        <CompactSideBar />
        <Contacts />
        {children}
      </div>
    </>
  );
}
