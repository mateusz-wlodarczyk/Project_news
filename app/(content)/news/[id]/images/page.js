import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

function ImagePage({ params }) {
  const newsItemSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`images/news/${newsItem.image}/`} alt={newsItem.title} />
    </div>
  );
}

export default ImagePage;
