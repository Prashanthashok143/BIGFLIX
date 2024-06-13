import { useState } from "react";
import FAQsData from "./FAQsData";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const FAQs = () => {
  const [Id, setId] = useState(null);
  return (
    <div className="text-white">
      <section>
        {
        FAQsData.map(({ id, que, ans }) => (
          <div className="HideShow" key={id}>
            <div className="p-3 m-5 text-start d-flex flex-row justify-content-between">
              <h3>{que}</h3>
              <span id="myButton1" onClick={() => setId(Id === id ? null : id)}>
                {Id === id ? (
                  <FaMinus />
                ) : (
                    <FaPlus />
                )}
              </span>
            </div>
            {Id === id && (
              <p id="FirstAns" className="Answer text-start m-5 ps-3  w-75">
                {ans}
              </p>
            )}
             <hr className="m-5"/>
          </div>
               
        ))
        }
      </section>

    </div>
  );
};

export default FAQs;
