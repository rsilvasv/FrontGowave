export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    )
  }