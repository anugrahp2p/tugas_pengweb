import { useState } from "react";

const EMPTY_FORM = {
  title: "",
  author: "",
  category: "Filsafat",
  year: "",
  pages: "",
  status: "Rencana Dibaca",
  coverUrl: "",
};

export default function BookForm({ onAddBook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.year) return;

    onAddBook({
      id: `book-${Date.now()}`,
      title: formData.title,
      author: formData.author,
      category: formData.category,
      year: parseInt(formData.year, 10),
      pages: parseInt(formData.pages, 10) || 0,
      status: formData.status,
      coverUrl: formData.coverUrl.trim(),
    });

    setFormData(EMPTY_FORM);
    setIsOpen(false);
  };

  return (
    <section className="form-section">
      <button
        type="button"
        className={isOpen ? "btn-secondary" : "btn-primary"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Tutup form" : "Tambah buku"}
      </button>

      {isOpen && (
        <form className="book-form" onSubmit={handleSubmit}>
          <h3>Data buku baru</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title">Judul</label>
              <input
                id="title"
                type="text"
                placeholder="Fear and Trembling"
                value={formData.title}
                onChange={handleChange("title")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Penulis</label>
              <input
                id="author"
                type="text"
                placeholder="Søren Kierkegaard"
                value={formData.author}
                onChange={handleChange("author")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Kategori</label>
              <select
                id="category"
                value={formData.category}
                onChange={handleChange("category")}
              >
                <option value="Filsafat">Filsafat</option>
                <option value="Sejarah">Sejarah</option>
                <option value="Sains & Teknologi">Sains & Teknologi</option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Sastra">Sastra</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="year">Tahun terbit</label>
              <input
                id="year"
                type="number"
                placeholder="1843"
                value={formData.year}
                onChange={handleChange("year")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pages">
                Jumlah halaman <span className="hint">(opsional)</span>
              </label>
              <input
                id="pages"
                type="number"
                placeholder="160"
                value={formData.pages}
                onChange={handleChange("pages")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status bacaan</label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange("status")}
              >
                <option value="Selesai Dibaca">Selesai Dibaca</option>
                <option value="Sedang Dibaca">Sedang Dibaca</option>
                <option value="Rencana Dibaca">Rencana Dibaca</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="coverUrl">
                URL sampul <span className="hint">(opsional)</span>
              </label>
              <input
                id="coverUrl"
                type="url"
                placeholder="https://"
                value={formData.coverUrl}
                onChange={handleChange("coverUrl")}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Tambah
          </button>
        </form>
      )}
    </section>
  );
}
