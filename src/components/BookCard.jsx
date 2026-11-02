const STATUS_CONFIG = {
  "Selesai Dibaca": {
    className: "status-done",
    nextLabel: "Kembalikan ke Rencana",
  },
  "Sedang Dibaca": { className: "status-reading", nextLabel: "Tandai Selesai" },
  "Rencana Dibaca": { className: "status-planned", nextLabel: "Mulai Membaca" },
};

export default function BookCard({ book, onDeleteBook, onToggleStatus }) {
  const config = STATUS_CONFIG[book.status] ?? STATUS_CONFIG["Rencana Dibaca"];

  return (
    <li className="book-card-item">
      {/* Sampul Buku */}
      <div className="book-cover-box">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={`Cover ${book.title}`}
            className="book-cover-img"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="book-cover-placeholder">No Cover</div>
        )}
      </div>

      {/* Informasi Utama */}
      <div className="book-info-main">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-tags">
          <span className="tag-category">{book.category}</span>
          <span className="tag-meta">{book.year}</span>
          {book.pages > 0 && (
            <span className="tag-meta">• {book.pages} hlm</span>
          )}
        </div>
      </div>

      {/* Status & Tombol Aksi */}
      <div className="book-status-actions">
        <span className={`status-badge ${config.className}`}>
          {book.status}
        </span>
        <div className="action-buttons">
          <button
            type="button"
            className="btn-action-text"
            onClick={() => onToggleStatus(book.id)}
          >
            {config.nextLabel}
          </button>
          <button
            type="button"
            className="btn-action-delete"
            onClick={() => onDeleteBook(book.id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </li>
  );
}
