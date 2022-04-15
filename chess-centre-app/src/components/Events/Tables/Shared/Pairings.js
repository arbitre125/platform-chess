export const PairingsTable = ({ format, players, results, indexer, settings }) => {
  const { round, pairings } = format;
  const isLive = round === settings.currentRound && settings.roundLive;
  
  return (
    <div>
      <table className="w-full divide-y divide-cool-gray-900 table-auto border-cool-gray-900 border shadow-lg">
        <thead className="bg-teal-700">
          <tr>
            <th
              scope="col"
              className="px-1 py-2 text-center text-xs font-medium text-teal-400 uppercase tracking-wider"
            >Brd.
            </th>
            <th
              scope="col"
              className="flex-grow-0 w-80 px-2 sm:px-4 py-2 text-center text-xs font-medium text-teal-400 uppercase tracking-wider"
            >
              White
            </th>
            <th
              scope="col"
              className="px-4 sm:px-6 py-3 text-center text-xs font-medium text-teal-400 uppercase tracking-wider"
            >
              Vs
            </th>
            <th
              scope="col"
              className="flex-grow-0 w-80 px-4 sm:px-6 py-3 text-center text-xs font-medium text-teal-400 uppercase tracking-wider"
            >
              Black
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800">
          <tr className="border border-r border-cool-gray-900">
            {/* using colSpan=3 here means the header "VS" doesn't align center with the Round */}
            <td className="px-2 py-3"></td>
            <td className="px-2 sm:px-6 py-3"></td>
            <td className="px-2 py-1 text-center text-xs sm:text-sm font-medium text-gray-100">
              Round {round}
            </td>
            <td className="px-2"></td>
          </tr>
          {pairings.map((p, key) => {
            const [white, black] = results.find(r => r.round === round).pairResults[key];
            const whitePlayer = players.find(player => player.seed === p[0]);
            const blackPlayer = players.find(player => player.seed === p[1]);
            const isEven = key % 2 === 0;
            return (
              <tr key={key} className={isEven ? "bg-cool-gray-800" : "bg-cool-gray-900"}>
                <td className={isEven ? "bg-cool-gray-800 px-2 py-3 border-r border-cool-gray-700 text-xs text-white" 
                                      : "bg-cool-gray-900 px-2 py-3 border-r border-cool-gray-700 text-xs text-white"}>
                  {(indexer * 3) + 1 + key}
                </td>
                <td className="flex-grow-0 max-w-full px-2 pl-4 sm:px-4 py-2 whitespace-nowrap text-center text-md font-medium text-white">
                  {whitePlayer.name ? (
                    whitePlayer.name
                  ) : (
                    <span className="text-sx">TBC</span>
                  )}{" "}
                  <br />
                  <span className="text-teal-400">
                    {whitePlayer.ratingInfo.rating === "blank"
                      ? ""
                      : whitePlayer.ratingInfo.rating
                      ? `${whitePlayer.ratingInfo.rating}`
                      : "unrated"}
                  </span>
                </td>
                <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-center text-sm border-cool-gray-700 border-l border-r text-white">
                  {white || black
                    ? `${white === 0.5 ? "½" : white} - ${
                        black === 0.5 ? "½" : black
                      }`
                    : isLive ? <span className="text-orange-brand animate-pulse">Live</span> : "? - ?"}
                </td>
                <td className="flex-grow-0 max-w-full px-2 pl-4 sm:px-4 py-2 whitespace-nowrap text-center text-md font-medium text-white">
                  {blackPlayer.name ? (
                    blackPlayer.name
                  ) : (
                    <span className="text-sx">TBC</span>
                  )}{" "}
                  <br />
                  <span className="text-teal-400">
                    {blackPlayer.ratingInfo.rating === "blank" ? (
                      <span className="text-white">Blank</span>
                    ) : blackPlayer.ratingInfo.rating ? (
                      `${blackPlayer.ratingInfo.rating}`
                    ) : (
                      "unrated"
                    )}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};