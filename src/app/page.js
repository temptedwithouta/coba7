"use client";

import JobPostingList from "./components/jobPosting";
import { getData, createPost, deletePost } from "./service";
import { useState, useEffect } from "react";
import CreateJobPosting from "./components/createJobPosting";

export default function Home() {
  const [finalResult, setFinalResult] = useState([]);

  const [flag, setFlag] = useState(0);

  useEffect(() => {
    getData().then((res) => {
      setFinalResult(res);
    });
  }, [flag]);

  function insertJobPosting(jobPostingName, jobPostingDescription, jobPostingTa) {
    createPost(jobPostingName.toString(), jobPostingDescription.toString(), Number.parseInt(jobPostingTa));

    setFlag(1);
  }

  function deleteJobPosting(postId) {
    deletePost(postId);

    setFlag(2);
  }

  return (
    <>
      <div>
        <CreateJobPosting insertJobPosting={insertJobPosting} />
      </div>
      <div>
        {finalResult.map((jobPosting) => (
          <JobPostingList key={jobPosting.post_id} postId={jobPosting.post_id} postName={jobPosting.post_name} postDescription={jobPosting.post_description} taName={jobPosting.ta_name} deleteJobPosting={deleteJobPosting} />
        ))}
      </div>
    </>
  );
}
