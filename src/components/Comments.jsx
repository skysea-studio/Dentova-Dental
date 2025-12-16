import { useEffect, useState } from "react"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    async function fetchComments() {
      const data = await fetch("/assets/api.json").then(res => res.json())
      setComments(data)


    }
    fetchComments()


  }, [])

  function nextComment() {
    setCurrentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    )
  }
  function prevComment() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    )
  }


  return (
    <section id="comments" className="comments">
      <div className="comment-section-header">
        <h4>Testimonials</h4>
        <h2> What Patients Are Saying</h2>
      </div>

      <div className="comments-grid">
        <button onClick={prevComment} className="comments-btn">&lt;</button>
        {comments.length > 0 && (
          <div className="comment-card">
            <span>
              {"⭐".repeat(Math.round(comments[currentIndex].rating))} (
              {comments[currentIndex].rating})
            </span>
            <h2>{comments[currentIndex].title}</h2>
            <p>{comments[currentIndex].review}</p>
            <div className="commenter-info">
              <img src={comments[currentIndex].customer.src || ""} alt="user avatar" />
              <div>
                <h5>{comments[currentIndex].customer.name}</h5>
                <p>{comments[currentIndex].customer.time_ago}</p>
              </div>
            </div>
          </div>
        )}


        <button onClick={nextComment} className="comments-btn">&gt;</button>

      </div>

    </section>
  )
}