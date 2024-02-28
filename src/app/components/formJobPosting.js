"use client";

import { getTaData, updatePost } from "../service";
import { useState, useEffect } from "react";

const FormJobPosting = ({ postId, postName, postDescription, taId, insertJobPosting, formType, setFormType, setFlag }) => {
  const [taData, setTaData] = useState([]);

  const [jobPostingName, setJobPostingName] = useState("");

  const [jobPostingDescription, setJobPostingDescription] = useState("");

  const [jobPostingTa, setJobPostingTa] = useState("");

  useEffect(() => {
    setJobPostingName(postName);

    setJobPostingDescription(postDescription);

    setJobPostingTa(taId);
  }, [postName, postDescription, taId]);

  useEffect(() => {
    getTaData().then((res) => setTaData(res));
  }, []);

  function submitJobPosting(event) {
    event.preventDefault();

    if (formType === "Insert") {
      insertJobPosting(jobPostingName.toString(), jobPostingDescription.toString(), Number.parseInt(jobPostingTa));

      setJobPostingName("");

      setJobPostingDescription("");

      setJobPostingTa("1");

      event.target.reset();
    } else if (formType === "Update") {
      updatePost(Number.parseInt(postId), jobPostingName.toString(), jobPostingDescription.toString(), Number.parseInt(jobPostingTa));

      setJobPostingName("");

      setJobPostingDescription("");

      setJobPostingTa("1");

      setFlag(Math.random());

      event.target.reset();

      setFormType("Insert");
    }
  }

  function nameChange(event) {
    const name = event.target.value;

    setJobPostingName(name);
  }

  function descriptionChange(event) {
    const description = event.target.value;

    setJobPostingDescription(description);
  }

  function taChange(event) {
    const ta = event.target.value;

    setJobPostingTa(ta);
  }

  return (
    <>
      <form className="w-full h-full flex flex-col justify-evenly" onSubmit={submitJobPosting}>
        <div className="h-1/4 flex flex-col justify-evenly">
          <label htmlFor="jobPostingName">Job Posting Name</label>
          <input className="border border-black" name="jobPostingName" type="text" value={jobPostingName} onChange={nameChange} />
        </div>
        <div className="h-1/4 flex flex-col justify-evenly">
          <label htmlFor="jobPostingDescription">Job Posting Description</label>
          <input className="border border-black" name="jobPostingDescription" type="text" value={jobPostingDescription} onChange={descriptionChange} />
        </div>
        <div className="h-1/4 flex flex-col justify-evenly">
          <label htmlFor="jobPostingTa">Job Posting TA</label>
          <select className="border border-black" name="jobPostingTa" value={jobPostingTa === "" ? "1" : jobPostingTa} onChange={taChange}>
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
            {formType} Post
          </button>
        </div>
      </form>
    </>
  );
};

export default FormJobPosting;
