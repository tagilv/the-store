export default function ArtLayout({
    children,
    modal,
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
      <>
        {children}
        {modal}
      </>
    );
  }