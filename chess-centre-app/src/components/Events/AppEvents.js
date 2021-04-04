import React from "react";
import { Link } from "react-router-dom";
import { eventData } from "../../api/mock.entries";
import { Members as members } from "../../api/mock.members";

function UpComingEvents() {
  return (
    <>
      {eventData.map(({ name, entries }, index) => {
        return (
          <section key={index} className="relative">
            <div className="m-2 bg-white dark:bg-gray-800 pt-6 shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {name}
                </h2>
              </div>
              <div className="m-auto width-auto mt-6 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto border-t border-gray-200 dark:border-gray-700">
                      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-4 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            >
                              Rating
                            </th>

                            <th
                              scope="col"
                              className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                            >
                              <span>Details</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                          {entries.map((id, i) => {
                            const member = members.find((m) => m.id === id);
                            const isEven = i % 2 === 0;
                            return (
                              <tr
                                key={i}
                                className={
                                  isEven
                                    ? "bg-white dark:bg-gray-800"
                                    : "bg-gray-50 dark:bg-gray-800"
                                }
                              >
                                <td className="px-2 pl-4 sm:px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                                  {member.name}
                                </td>
                                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-300">
                                  {member.gradingInfo.grade}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                  <Link
                                    to={`/app/non-members/${id}`}
                                    className="text-orange-600 hover:text-orange-900 dark:text-orange-brand dark:hover:text-orange-400"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default UpComingEvents;
