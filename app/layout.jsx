import Container from "./components/Container";

import "./globals.css";

export const metadata = {
  title: "Matteo Beu | Full Stack Developer",
  description:
    "Hi, this is Matteo Beu! I am a full stack developer with the passion of informatics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
