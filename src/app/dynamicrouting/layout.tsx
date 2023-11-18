export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <head></head>
        <body>
          <nav>
            My NavBar
          </nav>
          {children}
          </body>
      </html>
    )
  }