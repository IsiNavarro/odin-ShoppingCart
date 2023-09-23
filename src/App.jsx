import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = ({ child }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-[100px] lg:mt-[150px] flex items-center justify-center">
        {child}
      </div>
      <Footer />
    </div>
  );
};

export default App;
