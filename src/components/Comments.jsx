import { useEffect, useState } from "react"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  // Başlangıçta varsayılan 1, ancak useEffect ile güncellenecek
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    async function fetchComments() {
      const data = await fetch("/assets/api.json").then(res => res.json())
      setComments(data)
    }
    fetchComments()
  }, [])

  // Ekran boyutuna göre gösterilecek eleman sayısını ayarlayan Effect
  useEffect(() => {
    function handleResize() {
      // 1024px üstü masaüstü kabul edelim ve 4 gösterelim, altı ise 1
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4)
      } else {
        setItemsPerPage(1)
      }
    }

    // İlk yüklemede çalıştır
    handleResize()

    // Ekran boyutu değişirse dinle
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function nextComment() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage
      // Eğer son elemanlara geldiysek başa dön, yoksa ilerle
      return nextIndex >= comments.length ? 0 : nextIndex
    })
  }

  function prevComment() {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - itemsPerPage
      // Eğer başa geldiysek sona git (kalan sayıya göre ayarla)
      if (prev < 0) {
        // Tam sonuna denk getirmek için basit bir mantık:
        return comments.length - itemsPerPage < 0 ? 0 : comments.length - itemsPerPage
      }
      return prev
    })
  }

  // Şu an ekranda gösterilecek kartları hesapla
  // Bu mantık diziyi dairesel yapar (listenin sonuna gelince baştan eleman alır)
  const visibleComments = []
  if (comments.length > 0) {
    for (let i = 0; i < itemsPerPage; i++) {
      // Modulo (%) operatörü ile dizi sonuna gelince başa sarmasını sağlıyoruz
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
        <button onClick={prevComment} className="comments-btn">&lt;</button>


        <div className="cards-wrapper">
          {visibleComments.map((comment, index) => (
            <div key={`${comment.id}-${index}`} className="comment-card">
              <span>
                {"⭐".repeat(Math.round(comment.rating))} ({comment.rating})
              </span>
              <h2>{comment.title}</h2>
              <p>{comment.review}</p>
              <div className="commenter-info">
                <img src={comment.customer.src || ""} alt="user avatar" />
                <div>
                  <h5>{comment.customer.name}</h5>
                  <p>{comment.customer.time_ago}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextComment} className="comments-btn">&gt;</button>
      </div>
    </section>
  )
}