import Footer from "../Footer/Footer";
import CatalogProductType from "./CatalogProductType";

export default function Catalog() {
    return (
        <section>
            <div style={{ display: 'flex' }}>
            <CatalogProductType
            productImg="https://h0.uz/thumb/2/c1JvY8tAIV_PCHqrjMg7rg/900r600/d/denver_bahama_graphite.webp"
            title="Диваны и кресла"/>
             <CatalogProductType 
            productImg="https://h0.uz/d/oslo_light_camel.webp"
            title="Кровати и матрасы"/>
            </div>
            <div style={{ display: "flex" }}>
             <CatalogProductType 
            productImg="https://h0.uz/d/afiny_01.webp"
            title="Столы и стулья"/>
            <CatalogProductType
            productImg="https://h0.uz/d/tumba_lima_4.webp"
            title="Полки"/>
            </div>
            <div style={{ display: 'flex' }}>
            <CatalogProductType 
            productImg="https://h0.uz/d/komod_valensiya_01.webp"
            title="Комоды"/>
            <CatalogProductType 
            productImg="https://cdn0.divan.by/img/v1/pzo5K9HyWoDu58PpR0GSGkvemRDSySFPAi7FuKlVQ2Y/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzUwNDY3MzIucG5n.jpg"
            title="Шкафы и стеллажи"/>
            </div>

            <Footer />
        </section>
    )
}