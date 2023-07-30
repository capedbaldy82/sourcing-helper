import '@/app/globals.css';
import Header from '@/components/layout/Header';

export const metadata = {
  title: 'Sourcing Helper',
  description: 'help your sourcing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`box-border bg-black text-white`}>
        <header>
          <h1 className="hidden">Sourcing Helper</h1>
        </header>
        <main className={`m-auto max-w-2xl relative`}>
          <Header />
          <div className="px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
