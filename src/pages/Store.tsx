import {Col, Row} from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {

    return (
    <>
        <h2>Store Shopping Cart</h2>    
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                    {/* {JSON.stringify(item)} */}
                    
                </Col>
            ))}
        </Row>
    </>
    );
}