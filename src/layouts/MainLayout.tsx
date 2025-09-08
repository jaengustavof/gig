import Header from "../components/Header";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="container">
      <Header />
      <div className="container__events">{children}</div>
      <Footer />
    </main>
  );
}
