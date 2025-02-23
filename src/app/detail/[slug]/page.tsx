import ViewBoardDetail from "@/components/view/board-detail/ViewBoardDetail";

export default function BoardDetailPage({
  params,
}: {
  params: Record<string, string>;
}) {
  return <ViewBoardDetail id={params.slug} />;
}
