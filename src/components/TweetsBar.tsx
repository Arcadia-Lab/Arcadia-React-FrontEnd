import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { tweetType } from "../types.ts/DataTypes";
import { SideBar } from "./SideBar";

export const TweetsBar = () => {
  const [tweets, setTweets] = useState<tweetType[]>();
  let { narrative } = useParams<{ narrative?: string }>();
  console.log(narrative);

  useEffect(() => {
    axios(
      "https://arcadia-api.tokismoki.repl.co/tweets/Undefined%20Narrative"
    ).then((res) => setTweets(res.data.tweets));
  }, []);

  tweets &&
    tweets.forEach((tweet) => {
      console.log(tweet.twitterAccount);
    });

  return (
    <>
      <SideBar />
      <div className="col-10">
        {narrative && tweets && narrative === "Undefined Narrative" ? (
          tweets.map((el, idx) => (
            <div key={idx} className="row text-center my-5 border rounded py-2">
              <div className="col-12 mb-3">
                <p>
                  <strong>Twiter URL:</strong>
                </p>
                {/* <Link
                to={`/${
                  el.twitterUrl.startsWith("https")
                    ? el.twitterUrl
                    : "https://" + el.twitterUrl
                }`}
                target="_blank"
              >
                {el.twitterUrl}
              </Link> */}
                <a href={`${el.twitterUrl}`} rel="noreferrer" target="_blank">
                  {el.twitterUrl}
                </a>
              </div>
              <div className="col-3">
                <p>
                  <strong>Tickers:</strong>
                </p>
                <p>
                  {" "}
                  {el.tickers.map((ticker, idx) => (
                    <span key={idx} className="px-3">
                      {ticker}
                    </span>
                  ))}
                </p>
              </div>
              <div className="col-3">
                <p>
                  <strong>Date:</strong>
                </p>
                <p>{el.date}</p>
              </div>
              <div className="col-3">
                <p>
                  <strong>Narrative:</strong>
                </p>
                <p>
                  {el.narrative.map((narrative, idx) => (
                    <span key={idx} className="px-3">
                      {narrative}
                    </span>
                  ))}
                </p>
              </div>
              <div className="col-3">
                <p>
                  <strong>Twitter Account:</strong>
                </p>
                {el.twitterAccount}
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 mt-5 text-center">
            <p className="display-4">
              We don't have any data for this <strong>Narrative</strong> yet
            </p>
          </div>
        )}
      </div>
    </>
  );
};
