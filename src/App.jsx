import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = ({ child }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        {child}
      </div>
      <Footer />
    </div>
  );
};

export default App;
