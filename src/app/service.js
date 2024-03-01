"use server";

import executeQuery from "./db";

export async function getData() {
  try {
    const result = await executeQuery({
      query: "SELECT post.post_id, post.post_name, post.post_description, ta.ta_id, ta.ta_name FROM post INNER JOIN user.ta AS ta ON ta.ta_id = post.ta_id",
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

export async function getPostData(postId) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM job_posting.post WHERE post_id = ?",
      values: [postId],
    });

    const newResult = JSON.parse(JSON.stringify(result));

    return newResult[0];
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw new Error("Failed to fetch.");
  }
}

export async function getEmployeeData(employeeEmail) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM user.employee WHERE employee.email = ? ",
      values: [employeeEmail],
    });

    const newResult = JSON.parse(JSON.stringify(result));

    return newResult[0];
  } catch (error) {
    console.error("Failed to fetch", error);
    throw new Error("Failed to fetch.");
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

export async function updatePost(postId, jobPostingName, jobPostingDescription, jobPostingTa) {
  try {
    const result = await executeQuery({
      query: "UPDATE job_posting.post AS p SET p.post_name = ?, p.post_description = ?, p.ta_id = ? WHERE p.post_id = ?",
      values: [jobPostingName, jobPostingDescription, jobPostingTa, postId],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
