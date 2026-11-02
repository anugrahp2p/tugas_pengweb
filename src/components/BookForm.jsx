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
    <section>
      <div className="action-bar">
        <h2 className="section-title">Daftar Buku</h2>
        <button
          type="button"
          className={isOpen ? "btn-secondary" : "btn-primary"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Batal" : "Tambah Buku Baru"}
        </button>
      </div>

      {isOpen && (
        <form className="book-form-card" onSubmit={handleSubmit}>
          <h3 className="form-header-title">Input Data Koleksi Buku</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title">Judul Buku *</label>
              <input
                id="title"
                type="text"
                placeholder="cth: Fear and Trembling"
                value={formData.title}
                onChange={handleChange("title")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Penulis *</label>
              <input
                id="author"
                type="text"
                placeholder="cth: Søren Kierkegaard"
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
              <label htmlFor="year">Tahun Terbit *</label>
              <input
                id="year"
                type="number"
                placeholder="cth: 1843"
                value={formData.year}
                onChange={handleChange("year")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pages">Jumlah Halaman</label>
              <input
                id="pages"
                type="number"
                placeholder="cth: 160"
                value={formData.pages}
                onChange={handleChange("pages")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status Bacaan</label>
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
              <label htmlFor="coverUrl">URL Sampul Gambar (Opsional)</label>
              <input
                id="coverUrl"
                type="url"
                placeholder="https://..."
                value={formData.coverUrl}
                onChange={handleChange("coverUrl")}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Simpan ke Arsip
          </button>
        </form>
      )}
    </section>
  );
}
