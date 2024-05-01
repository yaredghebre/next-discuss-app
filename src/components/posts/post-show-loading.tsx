import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-1/2" />
      </div>
      <div className="rounded p-4 border space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-6 w-1/3" />
      </div>
    </div>
  );
}
