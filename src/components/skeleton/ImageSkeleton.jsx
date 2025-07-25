import React from "react";
import { Skeleton } from "@heroui/react";

const ImageSkeleton = ({ className = "h-48 w-full" }) => {
  return (
    <div className={`${className} rounded-t-md`}>
      <Skeleton className="w-full h-full rounded-t-md" />
    </div>
  );
};

export default ImageSkeleton;
