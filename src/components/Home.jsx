import heroImage from '../assets/hero.jpg';
import newDimensionImage from '../assets/newDimension.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
  const getDate = () => {
    let seasonYear = '';
    const now = new Date();

    const month = now.getMonth() + 1; // Months are 0-indexed

    if (month >= 3 && month <= 5) seasonYear = 'Spring ';
    if (month >= 6 && month <= 8) seasonYear = 'Summer ';
    if (month >= 9 && month <= 11) seasonYear = 'Fall ';
    else seasonYear = 'Winter ';

    seasonYear += now.getFullYear();
    return seasonYear;
  };
  return (
    <section className="mt-20 w-full flex flex-col items-center justify-center">
      <header className="w-full h-screen flex flex-col items-center justify-center">
        <img
          src={heroImage}
          alt="hero image"
          className="blur-[5px] w-screen h-full object-cover absolute z-[-1] top-0"
        />
        <h1 className="font-bold text-slate-950 tracking-wider text-[2rem] text-center bg-white w-full">
          REINEFORM MÖBEL
        </h1>
        <h2 className="font-bold text-[0.6rem] bg-slate-950 w-full py-1 text-white text-center tracking-wider">
          ESSENCE OF ELEGANT MINIMALISM
        </h2>
        <h3 className="font-bold text-2xl mt-4 tracking-wider text-slate-100">
          {getDate()}
        </h3>
      </header>
      <div className="bg-slate-900 text-white tracking-widest font-bold w-full flex items-center justify-center py-20">
        DISCOVER A NEW DIMENSION
      </div>
      <div className="max-w-[1200px] flex flex-col gap-4 py-4 md:py-20 px-2 md:flex-row">
        <div className="w-full max-w-[600px] lg:max-w-[400px] border-b-2 pb-4 border-slate-500 flex items-center justify-center">
          <img
            className="w-full object-cover border-slate-800"
            src={newDimensionImage}
            alt="furniture"
          />
        </div>
        <div className="text-xs tracking-wider font-bold text-slate-800 flex flex-col gap-4 items-center justify-center md:justify-end md:items-end">
          <p>
            STEP INTO A REALM WHERE FURNITURE TRANSCENDS MERE FUNCTION. OUR
            LATEST COLLECTION IS AN ODE TO THE SYMPHONY OF FORM AND PURPOSE, A
            CANVAS WHERE AESTHETICS INTERTWINE WITH THE POETRY OF UTILITY.
          </p>
          <p>
            DIVE INTO A WORLD WHERE SIMPLICITY BECOMES ART, AND WHERE EVERY
            FURNISHING WHISPERS TALES OF ELEGANCE AND GRACE. THIS IS MORE THAN
            FURNITURE; IT'S AN INVITATION TO A DANCE OF SOULS IN YOUR LIVING
            SPACES.
          </p>
          <button className="bg-slate-800 text-white w-full text-base tracking-widest py-2 flex items-center justify-center md:w-[500px]">
            <Link to={'/catalogue'}>VIEW OUR LATEST COLLECTION</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
