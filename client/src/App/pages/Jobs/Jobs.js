import { Link } from "react-router-dom";
/*import JobCard from '../../components/Cards/cards'*/
import JobCard from "../../components/JobCards/JobCard";
import Navbar from "../../components/Navbar/Navbar";

function Jobs() {
  const jobsData = [
    {
      title: "Machine Learning Engineer",
      description:
        "Develop and deploy machine learning models to enhance automation and intelligence in our products. Experience with TensorFlow and PyTorch is preferred.",
      link: "https://careers.innovateai.com/jobs/machine-learning-engineer",
    },
    {
      title: "Product Manager",
      description:
        "Lead the product lifecycle from ideation to launch. Work closely with engineering and design teams to bring innovative solutions to our customers.",
      link: "https://jobs.futureproducts.com/apply/product-manager",
    },
    {
      title: "Cloud Infrastructure Engineer",
      description:
        "Design and maintain scalable cloud infrastructure. Experience with AWS, Azure, or Google Cloud is essential.",
      link: "https://careers.cloudsync.io/jobs/cloud-infrastructure-engineer",
    },
    {
      title: "Mobile Application Developer",
      description:
        "Build and optimize mobile applications for Android and iOS platforms. Proficiency in Flutter or React Native is a plus.",
      link: "https://apply.mobilitylabs.com/jobs/mobile-application-developer",
    },
    {
      title: "Cybersecurity Analyst",
      description:
        "Protect and monitor our systems to prevent and mitigate cyber threats. Knowledge of threat intelligence, intrusion detection, and response is required.",
      link: "https://jobs.securesolutions.net/openings/cybersecurity-analyst",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        {jobsData.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            description={job.description}
            Link={job.Link}
          />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
