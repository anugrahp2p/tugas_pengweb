import BookCard from "./BookCard";

export default function BookList({ books, onDeleteBook, onToggleStatus }) {
  if (books.length === 0) {
    return (
      <div className="empty-state-card">
        <h3 className="empty-title">Belum ada koleksi buku</h3>
        <p className="empty-desc">
          Klik tombol "Tambah Buku Baru" untuk mulai memasukkan data literatur.
        </p>
      </div>
    );
  }

  return (
    <ul className="book-list-container">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onDeleteBook={onDeleteBook}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
}
