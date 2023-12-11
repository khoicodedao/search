export default function Page({ params }: { params: { filename: string } }) {
  return <div>My Post: {params.filename}</div>;
}
