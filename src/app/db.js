import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "127.0.0.1",
    port: "3306",
    database: "job_posting",
    user: "root",
    password: "",
  },
});

// const db2 = mysql({
//   config: {
//     host: "127.0.0.1",
//     port: "3306",
//     database: "user",
//     user: "root",
//     password: "",
//   },
// });

export default async function executeQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    // await db2.end();
    return results;
  } catch (error) {
    return { error };
  }
}
