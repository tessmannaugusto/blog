type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination ({currentPage, totalPages, onPageChange}: PaginationProps) {
  return (
    <nav aria-label="Pagination" className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">Previous</button>
      <span aria-live="polite" aria-atomic="true">Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page">Next</button>
    </nav>
  )
}
