export default function CourseIdPage({
  params,
}: {
  params: { courseId: string };
}) {
  return <div>CoursePage {params.courseId}</div>;
}
