import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Col, ListGroupItem } from "react-bootstrap";


const RequestList = observer(({ user }) => {
    return (
        <ListGroup style={{
            display:'inline-block', marginTop:'25%',
            borderRadius: "0 px",
            marginLeft: 15, color: '#FFFFFF4D',
            fontSize: '48px', fontFamily: 'SeoulHangang CEB'
        }}>
            {
                user.map((data) => (
                    <ListGroup key={data.id_request} style={{ backgroundColor: '#878787', display:''}} className="my-2">
                        {/* <Col style={{
                            display:'flex', justifyContent:'center', alignItems:'center',
                            border: "1px solid #878787",
                            borderRadius: "50px", overflow: 'scroll'
                        }}>
                            {data.status_request == "Новое" ?
                             <div style={{ color: "blue" }}>Новое</div> : data.status_request == "Отклонено" ? <div
                                style={{ color: "red" }}>Отклонено</div> :
                                <div style={{ color: "green" }}>Подтверждено</div>
                            <div style={{ color: "black" }}>Описание: <div>{data.description_problem}</div>
                            </div>
                        </Col> */}
                        <ListGroup.Item style={{fontSize:'48px', background:'#878787', color:'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB', width:'1500px'}}>
                                №
                        </ListGroup.Item>
                        <ListGroup.Item style={{fontSize:'48px', background:'#878787', color:'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB'}}>
                            {data.tema}
                        </ListGroup.Item>
                        <ListGroup.Item style={{fontSize:'48px', background:'#878787', color:'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB'}}>
                            {data.description_problem}
                        </ListGroup.Item>
                        <ListGroup.Item style={{fontSize:'48px', background:'#878787', color:'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB'}}>
                            {data.date_and_time_supply}
                        </ListGroup.Item>
                        <ListGroup.Item style={{fontSize:'48px', background:'#878787', color:'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB'}}>
                        
                        </ListGroup.Item>

                    </ListGroup>
                ))
            }
        </ListGroup>
    )
})

export default RequestList;