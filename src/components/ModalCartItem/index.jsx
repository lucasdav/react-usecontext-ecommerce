import styled from "styled-components"

const StyledItem = styled.div`
    display: flex;
    gap: 12px;
    font-size: 16px;
    font-weight: 600;
    img {
        max-width: 90px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        flex-grow: 1;
        li {
            p {
                margin-top: 0;
            }
            strong {
                color: #7A42AB;
            }
        }
    }
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #666;
    }
`

const ModalCartItem = ({ item }) => {
    return (<StyledItem>
        <div>
            <img src={item.imageSrc} alt="" />
        </div>
        <ul>
            <li>
                <p>
                    {item.name} <br />
                    {item.color} {item.size}
                </p>
            </li>
            <li>
                <strong>
                    R$ {item.price}
                </strong>
            </li>
        </ul>
        <div>
            <button>
                x remover
            </button>
        </div>
    </StyledItem>)
}

export default ModalCartItem