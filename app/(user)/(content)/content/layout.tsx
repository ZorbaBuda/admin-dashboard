import UserHeader from "../_layout/header";

export default function LayoutPagesEdition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserHeader heading="Content edition" />

      {children}
    </>
  );
}
