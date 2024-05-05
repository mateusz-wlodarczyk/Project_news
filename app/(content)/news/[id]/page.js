import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

function NewsDetailPage({ params }) {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <h1> {newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>

        <p>news ID: {newsItem.content}</p>
      </article>
    </>
  );
}

export default NewsDetailPage;
