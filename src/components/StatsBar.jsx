export default function StatsBar({ totalBooks, completedCount, readingCount }) {
  const plannedCount = totalBooks - (completedCount + readingCount);

  return (
    <section className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total Koleksi</span>
        <span className="stat-value">{totalBooks}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Selesai Dibaca</span>
        <span className="stat-value highlight">{completedCount}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Sedang & Rencana</span>
        <span className="stat-value">
          {readingCount + (plannedCount < 0 ? 0 : plannedCount)}
        </span>
      </div>
    </section>
  );
}
