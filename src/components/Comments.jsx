import { useEffect, useState } from "react"
import userIcon from "../assets/icons/user.svg"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    async function fetchComments() {
      const data = await fetch("/assets/api.json").then(res => res.json())
      setComments(data)
    }
    fetchComments()
  }, [])


  useEffect(() => {
    function handleResize() {

      if (window.innerWidth >= 1024) {
        setItemsPerPage(4)
      } else {
        setItemsPerPage(1)
      }
    }


    handleResize()


    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function nextComment() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage

      return nextIndex >= comments.length ? 0 : nextIndex
    })
  }

  function prevComment() {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - itemsPerPage

      if (prev < 0) {

        return comments.length - itemsPerPage < 0 ? 0 : comments.length - itemsPerPage
      }
      return prev
    })
  }



  const visibleComments = []
  if (comments.length > 0) {
    for (let i = 0; i < itemsPerPage; i++) {

      const index = (currentIndex + i) % comments.length
      visibleComments.push(comments[index])
    }
  }

  return (
    <section id="comments" className="comments">
      <div className="comment-section-header">
        <h4>Testimonials</h4>
        <h2> What Patients Are Saying</h2>
      </div>

      <div className="comments-grid">
        <button onClick={prevComment} className="comments-btn">
          <img src="src/assets/images/left-arrow-icon.svg" alt="left-arrow-icon" />
        </button>


        <div className="cards-wrapper">
          {visibleComments.map((comment, index) => (
            <div key={`${comment.id}-${index}`} className="comment-card">
              <span>
                {"⭐".repeat(Math.round(comment.rating))} ({comment.rating})
              </span>
              <h2>{comment.title}</h2>
              <p>{comment.review}</p>
              <div className="commenter-info">
                <img
                  src={comment?.customer?.src || userIcon}
                  alt="user avatar"

                />


                <div>
                  <h5>{comment.customer.name}</h5>
                  <p>{comment.customer.time_ago}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextComment} className="comments-btn">
          <img src="src/assets/images/right-arrow-icon.svg" alt="right-arrow-icon" />
        </button>
      </div>
    </section>
  )
}