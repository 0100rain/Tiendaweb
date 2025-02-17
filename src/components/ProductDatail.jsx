const ProductDetail = ({ product, onClose }) => {
    if (!product) return null;
    
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{product.name}</p>
            <button className="delete" aria-label="close" onClick={onClose}></button>
          </header>
          <section className="modal-card-body">
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Quotas:</strong> {product.quotas}</p>
            <p><strong>Long Description:</strong> {product.longDescription}</p>
          </section>
        </div>
      </div>
    );
}
  export {ProductDetail}