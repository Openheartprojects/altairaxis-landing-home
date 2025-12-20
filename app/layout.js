import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Fira+Code:wght@300..700&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
    </head>
    <body className="antialiased selection:bg-dm-blue selection:text-white bg-dm-white text-dm-black">
      {children}
    </body>
  </html>
);

export default RootLayout;
