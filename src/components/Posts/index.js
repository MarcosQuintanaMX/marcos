import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  return (
    <section className="my-6 p-4">
      <h3 className="mb-3 text-cyan-700 capitalize">{title}</h3>
      <div className="flex flex-col gap-4 xl:flex-row">
        {/* posts column */}
        <article className="xl:w-5/6">
          {posts.map((post) => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/* banner column */}
        <div className="xl:w-1/6">
          <Banner />
        </div>
      </div>
    </section>
  )
}

export default Posts
