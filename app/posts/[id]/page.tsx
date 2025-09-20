import PostDetails from "@/components/PostDetails";

// Make your Page component async because you'll `await` params
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostDetails id={id} />;
}
