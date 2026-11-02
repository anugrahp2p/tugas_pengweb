import BookCard from "./BookCard";

export default function BookList({ books, onDeleteBook, onToggleStatus }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <h2>Belum ada data buku</h2>
        <p>Pilih "Tambah buku" di atas untuk mencatat bacaan pertama.</p>
      </div>
    );
  }

  return (
    <ul className="book-list">
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
