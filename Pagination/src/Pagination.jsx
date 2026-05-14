function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">

      <button
        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </button>

      <span>{page} / {totalPages}</span>

      <button
        onClick={() =>
          setPage(prev => Math.min(prev + 1, totalPages))
        }
        disabled={page === totalPages}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;