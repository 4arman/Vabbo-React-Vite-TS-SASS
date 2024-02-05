import React from 'react'
import styled from "styled-components"

const ProductType = styled.div`
width: 100%;
height: 300px;
cursor: pointer;
padding: 25px;
`

const ProductTypeTitle = styled.div`
color: #111;
font-size: 22px;
font-weight: 600;
text-align: left;
margin-top: 20px;
cursor: pointer;
`

interface typeProduct {
    title: string,
    productImg: string
}

const CatalogProductType: React.FC<typeProduct> = ({ title, productImg }) => {
    return (
        <div style={{ width: '100%', margin:'15px' }}>
        <ProductType style={{ 
                background: `url(${ productImg })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
        </ProductType>
        <ProductTypeTitle>{ title }</ProductTypeTitle>
        </div>
    )
}

export default CatalogProductType