import { useState } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { getCoverUrl } from "./utils/cover";
import "./App.css";

const INITIAL_BOOKS = [
  {
    id: "book-1",
    title: "Fear and Trembling (Ketakutan dan Gemetar)",
    author: "Søren Kierkegaard",
    category: "Filsafat",
    year: 1843,
    pages: 160,
    status: "Selesai Dibaca",
    // Penguin Classics
    coverUrl: getCoverUrl("9780140444490"),
  },
  {
    id: "book-2",
    title:
      "Sapi, Babi, Perang, dan Tukang Sihir: Menjawab Teka-teki Kebudayaan",
    author: "Marvin Harris",
    category: "Sejarah",
    year: 1974,
    pages: 300,
    status: "Sedang Dibaca",
    // Marjin Kiri, 2019
    coverUrl: getCoverUrl("9789791260886"),
  },
  {
    id: "book-3",
    title: "Madilog: Materialisme, Dialektika, Logika",
    author: "Tan Malaka",
    category: "Filsafat",
    year: 1943,
    pages: 560,
    status: "Rencana Dibaca",
    // Narasi
    coverUrl: getCoverUrl("9786025792403"),
  },
];

export default function App() {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleToggleStatus = (id) => {
    const statusCycle = {
      "Rencana Dibaca": "Sedang Dibaca",
      "Sedang Dibaca": "Selesai Dibaca",
      "Selesai Dibaca": "Rencana Dibaca",
    };

    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, status: statusCycle[book.status] } : book,
      ),
    );
  };

  const completedCount = books.filter(
    (b) => b.status === "Selesai Dibaca",
  ).length;
  const readingCount = books.filter((b) => b.status === "Sedang Dibaca").length;

  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <StatsBar
          totalBooks={books.length}
          completedCount={completedCount}
          readingCount={readingCount}
        />
        <BookForm onAddBook={handleAddBook} />
        <BookList
          books={books}
          onDeleteBook={handleDeleteBook}
          onToggleStatus={handleToggleStatus}
        />
      </main>
    </div>
  );
}
