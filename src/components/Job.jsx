import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-4 rounded-md shadow-xl bg-white border border-gray-200 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4 my-4">
        <div className="flex-shrink-0">
          <Button className="p-6" variant="outline" size="icon">
            <Avatar>
              <AvatarImage src={job?.company?.logo} alt="Company Logo" />
            </Avatar>
          </Button>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge
          className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="bg-red-100 text-[#F83002] font-bold px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="bg-purple-100 text-[#7209b7] font-bold px-3 py-1 rounded-lg"
          variant="ghost"
        >
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white hover:bg-[#5e089b]">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
