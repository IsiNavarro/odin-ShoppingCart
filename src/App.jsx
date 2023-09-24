import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = ({ child, cartItems }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar cartItems={cartItems} />
      <div className="mt-[100px] lg:mt-[125px] flex items-center justify-center">
        {child}
      </div>
      <Footer />
    </div>
  );
};

export default App;
