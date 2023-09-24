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
    <section className="flex flex-col items-center">
      <header className="h-screen flex flex-col items-center justify-center">
        <img
          className="absolute top-0 left-0 z-[-10] h-screen w-screen object-cover blur-md"
          src={heroImage}
          alt=""
        />
        <div className="w-screen flex flex-col items-center">
          <h1 className="w-full tracking-wider text-[2rem] lg:text-[4rem] text-slate-950 bg-white p-10 font-bold text-center">
            REINEFORM MÖBEL
          </h1>
          <h2 className="w-full tracking-wider text-white text-[0.7rem] lg:text-[1rem] text-center p-1 font-bold bg-slate-950">
            ESSENCE OF ELEGANT MINIMALISM
          </h2>
          <h3 className="font-bold tracking-wide text-slate-950 mt-8 text-2xl lg:text-3xl">
            {getDate()}
          </h3>
        </div>
      </header>
      <div className="w-full bg-slate-950 text-white text-center tracking-widest text-4xl p-20">
        DISCOVER A NEW DIMENSION
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="md:max-w-[800px] xl:max-w-[1000px] p-4 md:mt-16 flex flex-col items-center gap-4 md:flex-row">
          <img
            className="max-w-[320px] xl:max-w-[400px] p-2 md:border-r-4 border-slate-500"
            src={newDimensionImage}
            alt="Photo by Collov Home Design on Unsplash"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center">
          <p className="font-bold text-sm text-slate-800 text-justify">
            STEP INTO A REALM WHERE FURNITURE TRANSCENDS MERE FUNCTION. OUR
            LATEST COLLECTION IS AN ODE TO THE SYMPHONY OF FORM AND PURPOSE, A
            CANVAS WHERE AESTHETICS INTERTWINE WITH THE POETRY OF UTILITY.
          </p>
          <p className="font-bold text-sm text-slate-800 text-justify">
            DIVE INTO A WORLD WHERE SIMPLICITY BECOMES ART, AND WHERE EVERY
            FURNISHING WHISPERS TALES OF ELEGANCE AND GRACE. THIS IS MORE THAN
            FURNITURE; IT'S AN INVITATION TO A DANCE OF SOULS IN YOUR LIVING
            SPACES.
          </p>
          <Link
            to={'/catalogue'}
            className="tracking-wider bg-slate-800 text-white mt-4 self-end py-2 px-6 active:scale-95"
          >
            EXPLORE OUR NEWEST COLLECTION
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Home;
