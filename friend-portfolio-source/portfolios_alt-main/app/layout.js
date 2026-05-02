import './globals.css'
import Header from './components/Header'
import GridBackground from './components/GridBackground'

export const metadata = {
  title: 'Arya Raut | Industrial Engineering Portfolio',
  description: 'Industrial engineering portfolio for Arya Raut, focused on process optimization, manufacturing systems, quality, and aerospace projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GridBackground />
        <Header />
        {children}
      </body>
    </html>
  )
}
