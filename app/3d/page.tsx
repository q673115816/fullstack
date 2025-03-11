import Link from "next/link";

const Page = async () => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={`3d/base`}>base</Link>
      <Link href={`3d/skull`}>skull</Link>
    </div>
  );
};

export default Page;
