import { getTaData } from "../service";
import { useState, useEffect } from "react";

const CreateJobPosting = ({ insertJobPosting }) => {
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
  }

  return (
    <>
      <form onSubmit={submitJobPosting}>
        <input name="jobPostingName" type="text" />
        <input name="jobPostingDescription" type="text" />
        <select name="jobPostingTa">
          {taData.map((data) => {
            return (
              <option value={data.ta_id} key={data.ta_id}>
                {data.ta_name}
              </option>
            );
          })}
        </select>
        <button type="submit">Insert Post</button>
      </form>
    </>
  );
};

export default CreateJobPosting;
