import styled from "styled-components"
import AddToCart from "../icons/AddToCart"

const StyledCard = styled.div`
    background-color: white;
    padding: 12px 8px ;
    border-radius: 12px;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: end;
        justify-content: space-between;
        li {
            p {
                margin: 0;
            }
        }
    }
`

const Price = styled.p`
    margin-top: 0;
    margin-bottom: 12px;
    color: #7A42AB;
`

const AddToCardButton = styled.button`
    border: 1px solid #7A42AB;
    background-color: transparent;
    cursor: pointer;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

const ProductCard = ({ product }) => {
    return (
        <StyledCard>
            <img src={product.imageSrc} />
            <Price>
                <strong>
                    {product.price}
                </strong>
            </Price>
            <div>
                <ul>
                    <li>
                        <p>{product.name} <br />
                        {product.color} {product.size}</p>
                    </li>
                    <li>
                        <AddToCardButton>
                            <AddToCart />
                        </AddToCardButton>
                    </li>
                </ul>
            </div>
        </StyledCard>
    )
}

export default ProductCard

