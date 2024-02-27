"use server";

import executeQuery from "./db";

export async function getData() {
  try {
    const result = await executeQuery({
      query: "SELECT post_id, post_name, post_description, ta.ta_id, ta.ta_name FROM post INNER JOIN user.ta AS ta ON ta.ta_id = post.ta_id",
      values: [],
    });

    const newResult = JSON.parse(JSON.stringify(result));

    return newResult;
  } catch (error) {
    return [];
  }
}

export async function getTaData() {
  try {
    const result = await executeQuery({
      query: "SELECT ta_id, ta_name FROM user.ta",
      values: [],
    });

    const newResult = JSON.parse(JSON.stringify(result));

    return newResult;
  } catch (error) {
    return [];
  }
}

export async function createPost(jobPostingName, jobPostingDescription, jobPostingTa) {
  try {
    const result = await executeQuery({
      query: "INSERT INTO post (post_name, post_description, ta_id) VALUES(?, ?, ?)",
      values: [jobPostingName, jobPostingDescription, jobPostingTa],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(postId) {
  try {
    const result = await executeQuery({
      query: "DELETE FROM post WHERE post_id = ?",
      values: [postId],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
