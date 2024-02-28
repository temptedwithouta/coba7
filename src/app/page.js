"use client";

import JobPostingList from "./components/jobPosting";
import { getData, getPostData, createPost, deletePost } from "./service";
import { useState, useEffect } from "react";
import FormJobPosting from "./components/formJobPosting";

export default function Home() {
  const [finalResult, setFinalResult] = useState([]);

  const [post, setPost] = useState({});

  const [flag, setFlag] = useState(0);

  const [formType, setFormType] = useState("Insert");

  useEffect(() => {
    getData().then((res) => {
      setFinalResult(res);
    });
  }, [flag]);

  function insertJobPosting(jobPostingName, jobPostingDescription, jobPostingTa) {
    createPost(jobPostingName.toString(), jobPostingDescription.toString(), Number.parseInt(jobPostingTa));

    setFlag(Math.random());
  }

  function deleteJobPosting(postId) {
    deletePost(postId);

    setFlag(Math.random());
  }

  function updateJobPosting(postId) {
    getPostData(postId).then((res) => setPost(res));

    setFormType("Update");
  }

  return (
    <div className="w-full h-screen flex">
      <div className="min-h-full p-8 basis-1/2 overflow-hidden">
        {formType === "Insert" ? (
          <FormJobPosting insertJobPosting={insertJobPosting} formType={formType} setFormType={setFormType} />
        ) : (
          <FormJobPosting postId={post.post_id} postName={post.post_name} postDescription={post.post_description} taId={post.ta_id} formType={formType} setFormType={setFormType} setFlag={setFlag} />
        )}
      </div>
      <div className="min-h-full p-8 basis-1/2 overflow-scroll">
        <div className="h-full w-full flex flex-col">
          {finalResult.map((jobPosting) => (
            <JobPostingList
              key={jobPosting.post_id}
              postId={jobPosting.post_id}
              postName={jobPosting.post_name}
              postDescription={jobPosting.post_description}
              taName={jobPosting.ta_name}
              deleteJobPosting={deleteJobPosting}
              updateJobPosting={updateJobPosting}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
