import { Package, CreditCard, Shield } from "lucide-react"

export function BlockPurchaseInfo() {
  return (
    <section className="bg-black py-12 border-y border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="purchase-info-item">
            <div className="purchase-info-icon-container">
              <Package className="purchase-info-icon" strokeWidth={1.5} />
            </div>
            <div className="purchase-info-content">
              <h3 className="purchase-info-title">ENVÍOS A TODO EL PAÍS</h3>
              <p className="purchase-info-subtitle">COMPRÁ SIN SALIR DE TU CASA</p>
            </div>
          </div>

          <div className="purchase-info-item">
            <div className="purchase-info-icon-container">
              <CreditCard className="purchase-info-icon" strokeWidth={1.5} />
            </div>
            <div className="purchase-info-content">
              <h3 className="purchase-info-title">ACEPTAS PAGOS</h3>
              <p className="purchase-info-subtitle">CON TODAS LAS TARJETAS</p>
            </div>
          </div>

          <div className="purchase-info-item">
            <div className="purchase-info-icon-container">
              <Shield className="purchase-info-icon" strokeWidth={1.5} />
            </div>
            <div className="purchase-info-content">
              <h3 className="purchase-info-title">COMPRA SEGURA</h3>
              <p className="purchase-info-subtitle">PROTEGEMOS TUS DATOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
