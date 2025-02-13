import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import QuickSearch from "../../../components/FAQs/QuickSearch";
import { ChessProfile, AccountProfile, IntegrationProfile } from "./sections";
import { useAuthState } from "../../../context/Auth";

export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      about
      fideId
      ecfId
      username
      name
      email
      ecfRating
      ecfRapid
      ecfMembership
      estimatedRating
      club
      gender
      membershipType
      gameInfo
      ratingInfo
      createdAt
      updatedAt
      stripeCustomerId
      stripeCurrentPeriodEnd
      stripePriceId
      stripeProductId
      ecfLastUpdated
      liChessUsername
      liChessInfo
      lichessLastUpdated
      chesscomUsername
      chesscomInfo
      chesscomLastUpdated
    }
  }
`;

interface Member {
 id: string;
 about?: string | null;
 fideId?: string | null;
 ecfId?: string | null;
 username?: string | null;
 name?: string | null;
 email?: string | null;
 stripeCustomerId?: string | null;
 stripeCurrentPeriodEnd?: number | null;
 stripePriceId?: string | null;
 stripeProductId?: string | null;
 stripeFriendlyProductName?: string | null;
 ecfRating?: string | null;
 ecfRapid?: string | null;
 ecfMembership?: string | null;
 ecfRapidPartial?: boolean | null;
 ecfRatingPartial?: boolean | null;
 estimatedRating?: string | null;
 chessTitle?: string | null;
 club?: string | null;
 gender?: string | null;
 membershipType?: string | null;
 gameInfo?: string | null;
 ratingInfo?: string | null;
 liChessUsername?: string | null;
 liChessInfo?: string | null;
 chesscomUsername?: string | null;
 chesscomInfo?: string | null;
 chesscomLastUpdated?: number | null;
 lichessLastUpdated?: number | null;
 ecfLastUpdated?: number | null;
}


export default function Profile() {
  const { user } = useAuthState();
  const [member, setMember] = useState<Member>();
  const [customerPortalUrl, setCustomerPortalUrl] = useState();
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isPaid, setIsPaid] = useState(false);


  useEffect(() => {

    document.title = "The Chess Centre | Profile";

    const getCustomerPortal = async () => {
      const returnUrl = `${window.location.origin}/app/profile`;
      const { url } = await API.post("public", "/customer-portal", {
        body: {
          returnUrl,
        },
      }).catch((e) => {
        return {};
      });
      setCustomerPortalUrl(url);
    };

    const getMemberInfo = async () => {
      const {
        data: { getMember: member },
      } = await API.graphql<any>({
        query: getMember,
        authMode: "AWS_IAM",
        variables: { id: user.username },
      });

  
      setMember(member);

      document.title = `The Chess Centre | ${member.name}`;

      if (member && member.stripeCurrentPeriodEnd) {
        const today = new Date();
        const renewal = new Date(member.stripeCurrentPeriodEnd);
        setIsPaid(renewal > today);
      }
    };

    const getProfileData = async () => {
      setIsLoadingProfile(true);
      await getMemberInfo().catch(error => console.log("Error", error));
      await getCustomerPortal();
      setIsLoadingProfile(false);
    };

    getProfileData().catch(() => {
      setIsLoadingProfile(false);
    });

  }, [user]);

  return (
    <div className="sm:mt-10 mb-4 lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav className="space-y-1">
          <Link
            to="#"
            className={`dark:bg-gray-800 text-teal-700 dark:text-teal-400 hover:text-teal-700 
            bg-white group rounded-md flex items-center
              shadow
            `}
            aria-current="page"
          >
            <div className="flex text-center pt-3 pl-3 pr-3 pb-3">
              <div className="text-sm inline-block font-medium">
                <i className="fas fa-1x fa-user-circle mr-2 text-teal-500 dark:text-teal-400"></i>{" "}
                <span className="">
                  Account
                  {isPaid && (
                    <div className="inline-flex align-top top-2">
                      <span className="ml-2 items-center px-2.5 py-0.5 rounded-md text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800 top-2">
                        Member
                      </span>
                    </div>
                  )}
                </span>
              </div>
              {isLoadingProfile && (
                <div className="text-teal-500 ml-2 text-sm inline-block">
                  <i className="fal fa-spinner-third fa-spin fa-fw"></i>{" "}
                  <span className="sm:hidden ml-2 text-xs text-gray-600">
                    fetching details...
                  </span>
                </div>
              )}
            </div>
          </Link>

          {customerPortalUrl && (
            <a
              href={customerPortalUrl}
              className="text-teal-700 dark:text-teal-400 hover:text-teal-700 
              bg-gray-50 hover:shadow hover:bg-white group rounded-md flex items-center
                "
            >
              <span className="text-gray-500 inline-block align-middle p-2">
                <span className="truncate text-sm inline-block align-middle font-medium">
                  <i className="text-teal-500 fa-1x fas fa-credit-card mr-2"></i>{" "}
                  <span className="inline-block align-baseline">
                    Subscription
                  </span>
                </span>
              </span>
            </a>
          )}
        </nav>
      </aside>
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <AccountProfile
          name={member?.name}
          expires={member?.stripeCurrentPeriodEnd}
        />
        <ChessProfile {...member} isLoading={isLoadingProfile} />
        <IntegrationProfile {...member} isLoading={isLoadingProfile} />
        <div className="text-right">
          <QuickSearch tag="membership" />
        </div>
      </div>
    </div>
  );
}
