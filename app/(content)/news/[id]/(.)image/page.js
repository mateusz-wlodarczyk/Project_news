import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

function NewsDetailPageIntercepted({ params }) {
  const router = useRouter();

  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />

      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`images/news/${newsItem.image}/`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default NewsDetailPageIntercepted;
