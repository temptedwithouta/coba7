import { getTaData } from "../service";
import { useState, useEffect } from "react";

const FormJobPosting = ({ insertJobPosting, formType }) => {
  const [taData, setTaData] = useState([]);

  useEffect(() => {
    getTaData().then((res) => setTaData(res));
  }, []);

  function submitJobPosting(event) {
    event.preventDefault();

    const jobPostingName = event.target.jobPostingName.value;

    const jobPostingDescription = event.target.jobPostingDescription.value;

    const jobPostingTa = event.target.jobPostingTa.value;

    insertJobPosting(jobPostingName.toString(), jobPostingDescription.toString(), Number.parseInt(jobPostingTa));

    event.target.reset();
  }

  return (
    <>
      <form className="w-full h-full flex flex-col justify-evenly" onSubmit={submitJobPosting}>
        <div className="h-1/4 flex flex-col justify-evenly">
          <label for="jobPostingName">Job Posting Name</label>
          <input className="border border-black" name="jobPostingName" type="text" />
        </div>
        <div className="h-1/4 flex flex-col justify-evenly">
          <label for="jobPostingDescription">Job Posting Description</label>
          <input className="border border-black" name="jobPostingDescription" type="text" />
        </div>
        <div className="h-1/4 flex flex-col justify-evenly">
          <label for="jobPostingTa">Job Posting TA</label>
          <select className="border border-black" name="jobPostingTa">
            {taData.map((data) => {
              return (
                <option value={data.ta_id} key={data.ta_id}>
                  {data.ta_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="h-1/4 flex justify-center items-center">
          <button className="w-full border border-black" type="submit">
            {formType}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormJobPosting;
