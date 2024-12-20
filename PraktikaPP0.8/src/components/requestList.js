import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Col, ListGroupItem } from "react-bootstrap";


const RequestList = observer(({ user }) => {
    return (
        <ListGroup style={{
            display: "inline-block", 
            borderRadius: "0 px",
            color: '#FFFFFF4D',
            fontSize: '48px', fontFamily: 'SeoulHangang CEB',
        }}>

            {
                user.map((data) => (
                    <ListGroup key={data.id_request} style={{ backgroundColor: '#878787', display: "block", marginTop: "20px" }}>

                        <ListGroup.Item style={{ fontSize: '30px', marginRight: "0px", background: '#878787', color: 'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB', display: "inline-block" }}>
                            {data.id_request}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize: '30px', marginLeft: "100px", background: '#878787', color: 'white',marginRight: "150px",
                        letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB', display: "inline-block", maxHeigh: "200px", maxWidth:"250px" }}>
                            {data.tema}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize: '30px', marginLeft: "50px", background: '#878787',
                         maxHeigh: "100px", maxWidth:"250px", color: 'white', letterSpacing: '8.16px', marginRight: "0px",
                         fontFamily: 'SeoulHangang CEB', display: "inline-block" }}>
                            {data.description_problem}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize: '25px', marginLeft: "200px", background: '#878787', maxHeigh: "100px",
                         maxWidth:"300px", color: 'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB', display: "inline-block" }}>
                        {data.date_and_time_supply.split("-")[2].split("T")[0]}.
                        {data.date_and_time_supply.split("-")[1]}.{data.date_and_time_supply.split("-")[0]} в {data.date_and_time_supply.split("-")[2].split("T")[1].split(".")[0]}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize: '30px', marginLeft: "100px", background: '#878787', maxHeigh: "100px", maxWidth:"300px", color: 'white', letterSpacing: '8.16px', fontFamily: 'SeoulHangang CEB', display: "inline-block" }}>
                            {data.status_request}
                        </ListGroup.Item>
                        
                    </ListGroup>
                ))
            }
        </ListGroup>
    )
})

export default RequestList;