import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency"

type Props = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem(props: Props) {
    const quantity: number = 0;

    return (
    <Card className="h-100">
        {/* {props.id}={props.name} ${props.price} */}
        <Card.Img variant="top" src={ props.imgUrl }
            height="200px" style={{ objectFit: "cover" }} 
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                <span className="fs-2">{props.name}</span>
                <span className="ms-2 text-muted"> { formatCurrency( props.price ) }</span>
            </Card.Title>
            <div className="mt-auto">
                { quantity === 0 ?
                  ( <Button className="w-100">+ Adicionar ao Carrinho</Button> ) :
                  ( <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem"}} >
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem"}}>
                        <Button>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in Cart
                        </div>
                        <Button>+</Button>
                        </div>
                        <Button variant="danger" size="sm">Remove</Button>
                    </div> )
                }
            </div>
        </Card.Body>
    </Card>
    )
}