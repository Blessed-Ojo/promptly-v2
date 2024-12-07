import Searchform from "@/components/Searchform";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query
  const posts = [{
    _createdAt: new Date(),
    Views: 55,
    author: { _id: 1 , name:'Blessed'},
    _id: 1,
    category: "Robobts",
    title: "we Robots",
    image: "data:image/jpeg;base64,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",
    description:" world of robot"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With The World
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed In Virtual Competitions.
        </p>

        <Searchform query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {
            query ? `Search result for "${query}"` : 'All Startups'
          }
        </p>
        <ul className="mt-7 card_grid">
          { posts ?. length > 0? (
            posts.map((post:StartupCardType, index:number) =>(
              <StartupCard key={post?._id} post={post}/>
            ))

          ):(
            <p className="no-results">No Startups found</p>
          )}

        </ul>
      </section>
    </>
  );
}
