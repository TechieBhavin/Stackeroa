import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;