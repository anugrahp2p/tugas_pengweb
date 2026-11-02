const STATUS_META = {
  "Selesai Dibaca": { key: "done", nextLabel: "Kembalikan ke rencana" },
  "Sedang Dibaca": { key: "reading", nextLabel: "Tandai selesai" },
  "Rencana Dibaca": { key: "planned", nextLabel: "Mulai membaca" },
};

export default function BookCard({ book, onDeleteBook, onToggleStatus }) {
  const { key, nextLabel } =
    STATUS_META[book.status] ?? STATUS_META["Rencana Dibaca"];

  return (
    <li className="book-row">
      <div className="book-cover-frame">
        {book.coverUrl && (
          <img
            src={book.coverUrl}
            alt={`Sampul ${book.title}`}
            className="book-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
      </div>

      <div className="book-main">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>

        <div className="book-meta">
          <span>{book.category}</span>
          <span>{book.year}</span>
          {book.pages > 0 && <span>{book.pages} halaman</span>}
        </div>
      </div>

      <div className="book-side">
        <p className="book-status">
          <span className={`status-mark mark-${key}`} aria-hidden="true" />
          {book.status}
        </p>

        <div className="book-actions">
          <button
            type="button"
            className="link-btn"
            onClick={() => onToggleStatus(book.id)}
          >
            {nextLabel}
          </button>
          <button
            type="button"
            className="link-btn link-danger"
            aria-label={`Hapus ${book.title}`}
            onClick={() => onDeleteBook(book.id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </li>
  );
}
