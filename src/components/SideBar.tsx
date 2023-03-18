import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [narratives, setNarratives] = useState<string[]>();

  useEffect(() => {
    axios("https://arcadia-api.tokismoki.repl.co/narratives").then((res) =>
      setNarratives(res.data.narrativeNames)
    );
  }, []);

  return (
    <div className="col-2">
      <div className="position-fixed custom-width">
        <div className="text-center vh-100 d-flex justify-content-center flex-column">
          {narratives &&
            narratives.map((el, idx) => (
              <Link
                key={idx}
                to={`/narrative/${el}`}
                className="btn btn-block btn-primary "
              >
                {el}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
