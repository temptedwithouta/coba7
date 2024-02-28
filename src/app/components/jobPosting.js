"use client";

const JobPostingList = ({ postId, postName, postDescription, taName, deleteJobPosting, updateJobPosting }) => {
  return (
    <>
      <div className="w-full mb-6 p-4 flex flex-col justify-evenly overflow-visible  border border-black">
        <h2>Post Title: {postName}</h2>
        <h3>TA Name: {taName}</h3>
        <p>Post Description: {postDescription}</p>
        <button onClick={() => deleteJobPosting(postId)}>X</button>
        <button onClick={() => updateJobPosting(postId)}>Update</button>
      </div>
    </>
  );
};

export default JobPostingList;
