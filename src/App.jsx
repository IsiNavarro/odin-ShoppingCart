import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = ({ child }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px] lg:pt-[150px] flex items-center justify-center">
        {child}
      </div>
      <Footer />
    </div>
  );
};

export default App;
