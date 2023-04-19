import React from 'react'
import './Information.scss'

export const Information = () => {
    return (
        <section className="additional-info-container mt-15px">
            <div>
                <h2 className="additional-info-title">Devolución gratis</h2>
                <p className="text-grey">Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!</p>
                <p className="blue-anchor mt-24px d-inline-block">Conocer más sobre devoluciones</p>
            </div>
            <hr />
            <div>
                <h2 className="additional-info-title">Garantía</h2>
                <h3 className="additional-info-subtitle mt-0 mb-12px">Compra Protegida con Mercado Pago</h3>
                <p className="text-grey mb-24px">Recibí el producto que esperabas o te devolvemos tu dinero</p>
                <h3 className="additional-info-subtitle mt-0 mb-12px">Garantía del vendedor</h3>
                <p className="text-grey mb-24px">Sin garantía</p>
                <p className="blue-anchor d-inline-block">Conocer más sobre garantía</p>
            </div>
        </section>
    )
}

export default Information;