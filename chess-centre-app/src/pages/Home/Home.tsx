import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterLanding from "../../components/Footer/LandingFooter";
import { useAuthState } from "../../context/Auth";
import LandingNav from "../../components/Navigation/LandingNav";
import Calendar from "../../components/Calendar/ComingEvents";
import FAQs from "../../components/FAQs/Faqs";
import FindUs from "../../components/Map/FindUs";
import DownloadPWA from "../../components/Quote/PWA";
import GamesSignUp from "../../components/CTA/SignUp";
import Integrations from "../../components/Integrations";
import FestivalCTA from "../../components/Festival/HomePageCTA";
import EmbeddedVideo from "../../components/Video/Embedded";
import Chesscom from "../../assets/img/chesscom.png";
import C24 from "../../assets/img/c24.png";


const Home = () => {
  const { user } = useAuthState();

  useEffect(() => {
    document.title = "The Chess Centre | Welcome";
  }, []);

  return (
    <div>
      <div className="relative bg-gray-100 sm:bg-gray-50 overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-6 sm:pb-6 md:pb-6 lg:pb-6 xl:pb-6">
          <LandingNav />

          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 xl:mt-24">
            <div className="text-center">
              <h2 className="-mt-5">
                <span className="text-gray-800 text-8xl sm:text-9xl">
                  <i className="fas fa-chess"></i>
                </span>
              </h2>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="font-light">Welcome to</span>
                <br className="xl:hidden" />
                <span className="bg-gradient-to-r text-gradient from-teal-600 to-teal-400">
                  {" "}
                  The Chess Centre
                </span>
              </h2>

              <div className="mt-3 sm:mt-3 sm:max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                It's time things changed around here <span role="img">🚀</span>
                <p className="mt-2 text-teal-500">
                  Visit our dedicated venue in Ilkley
                </p>
              </div>
              <div className="max-w-md mx-auto sm:flex sm:justify-center mt-5 text-blue-brand text-bold">Festival Live Games</div>
              <div className="mt-5 max-w-md mx-auto flex justify-center space-x-6">
                  <div>
                    <a href="https://www.chess.com/events/2022-ilkley-chess-festival">
                      <img className="w-24" alt="chess.com" src={Chesscom} />
                    </a>
                  </div>
                  <div className="mr-5 mt-1">
                    <a href="https://chess24.com/en/watch/live-tournaments/ikley-chess-festival-2022-open#live">
                      <img className="w-24" alt="chess24" src={C24} />
                    </a>
                  </div>
                </div>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className={user ? "hidden" : "rounded-md shadow"}>
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:text-lg md:px-12"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <EmbeddedVideo />
      <FestivalCTA />
      <Calendar />
      <GamesSignUp />
      <FAQs />
      <FindUs />
      <DownloadPWA />
      <Integrations />
      <FooterLanding />
    </div>
  );
};

export default Home;
