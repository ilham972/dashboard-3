type DashboardLayoutProps = {
  children: React.ReactNode;
  storeId: string;
};

export default function DashboardLayout({
  children,
  storeId,
}: DashboardLayoutProps) {
  return (
    <>
      <div>DashboardLayout</div>
      {children}
    </>
  );
}
