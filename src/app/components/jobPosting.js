const JobPostingList = ({ postId, postName, postDescription, taName, deleteJobPosting }) => {
  return (
    <>
      <div className="mb-4">
        <h2>Post Title: {postName}</h2>
        <h3>TA Name: {taName}</h3>
        <p>Post Description: {postDescription}</p>
        <button onClick={() => deleteJobPosting(postId)}>X</button>
      </div>
    </>
  );
};

export default JobPostingList;
