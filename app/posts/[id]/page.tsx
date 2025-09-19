import PostDetails from "@/components/PostDetails";


export default function Page({ params }: { params: { id: string } }) {
  return <PostDetails id={params.id} />;
}