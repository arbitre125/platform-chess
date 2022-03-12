import RoundRobin from "../../components/Events/Tables/March/RoundRobin";
import Logo from "../../assets/img/logo-dark-theme.png";
import {
  name,
  players,
  results,
  settings,
} from "../../components/Events/Tables/March/meta.json";

const Viewer = () => {

  const isLastRound = settings.currentRound >= settings.totalRounds;
  const isLive = settings.roundLive;

  return (
    <div className="bg-cool-gray-700 h-full grid grid-rows-1 grid-flow-col px-5 pt-4 pb-10">
      <div className="text-center">
        <div className=" bg-cool-gray-900 py-4 relative border-2 border-teal-600 shadow-lg rounded-lg">
          <div>
            <img alt="The Chess Centre" className="h-14 mx-auto" src={Logo} />
          </div>
          <h2 className="tracking-tight leading-10 text-teal-500 text-3xl sm:leading-none">
            {name}
          </h2>
          <div className="tracking-tight text-gray-100 text-md leading-none mt-3">
            Welcome to the 1st dedicated, not for profit, chess centre in the UK
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {players.map(({ entries, section, title, icon }, index) => {
            const resulst = results.find((r) => r.section === section).scores;
            return (
              <RoundRobin
                title={title}
                entries={entries}
                results={resulst}
                settings={settings}
                icon={icon}
                boards={index}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 mt-4">
          <div className=" bg-cool-gray-900 border-2 border-cool-gray-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-cool-gray-600 sm:text-2xl">
                  Event Information
                </h2>
              </div>
              <dl className="mt-2 text-center sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-20">
                <div className="flex flex-col">

                  {!isLastRound &&
                    <>
                      <dt className="order-1 mt-2 text-lg leading-6 font-medium text-gray-400">Next Round</dt>
                      <dd className="order-2 text-5xl font-extrabold text-white">
                        {settings.nextRoundTime[settings.currentRound + 1]}
                      </dd>
                    </>
                  }

                  {isLastRound && isLive &&
                    <>
                      <dt className="order-1 mt-2 text-lg leading-6 font-medium text-gray-400">Last Round</dt>
                      <dd className="order-2 text-3xl font-extrabold text-orange-brand">
                        Underway
                      </dd>
                    </>
                  }

                  {isLastRound && !isLive &&
                    <>
                      <dt className="order-1 mt-2 text-lg leading-6 font-medium text-gray-400">Event Complete</dt>
                      <dd className="order-2 text-3xl font-extrabold text-gray-600">
                        All Games Complete
                      </dd>
                    </>
                  }


                </div>
                <div className="flex flex-col">
                  <dt className="order-1 mt-2 text-lg leading-6 font-medium text-gray-400">Live Games</dt>
                  <dd className="order-2 text-2xl font-extrabold text-teal-400 mt-1">chesscentre.online</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="order-1 mt-2 text-lg leading-6 font-medium text-gray-400">Prize Giving</dt>
                  <dd className="order-2 text-5xl font-extrabold text-white">{settings.prizeGiving} </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;