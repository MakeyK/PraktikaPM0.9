import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Col } from "react-bootstrap";


const RequestList = observer(({ user }) => {
    return (
        <ListGroup style={{
            display: "inline-block",
            borderRadius: "0 px",
            marginLeft: 15, color: '#FFFFFF4D',
            fontSize: 100
        }}>
            {
                user.map((data) => (
                    <ListGroup.Item key={data.id_request} style={{ backgroundColor: '#FFFFFF4D' }}>
                        <Col style={{
                            border: "1px solid black",
                            borderRadius: "10px", marginTop: "100px", overflow: 'scroll'
                        }}>
                            {data.status_request == "Новое" ? <div style={{ color: "blue" }}>Новое</div> : data.status_request == "Отклонено" ? <div
                                style={{ color: "red" }}>Отклонено</div> :
                                <div style={{ color: "green" }}>Подтверждено</div>}
                            <div style={{ color: "black" }}>Описание: <div>{data.description_problem}</div>
                            </div>
                        </Col>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
})

export default RequestList;