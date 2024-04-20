// import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";

import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const job = useLoaderData();

  //   ---- Fetching data using useEffect() ----

  //   const { id } = useParams();
  //   const [job, setJob] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchJob = async () => {
  //       try {
  //         const res = await fetch(`/api/jobs/${id}`);
  //         const data = await res.json();
  //         setJob(data);
  //       } catch (error) {
  //         console.log("Error fetching data", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchJob();
  //   }, []);

  //   return loading ? <Spinner /> : <h1>{job.title}</h1>;

  return <h1>{job.title}</h1>;
};

// ---- Fetching data using react loader from react router dom
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
