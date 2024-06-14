import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "../common/Header"
import blog from '../Data/blogData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Blog = () => {

    let allBlog = blog.map((v, i) => {
        return (
            <Col lg={3} md={3} className='mb-3'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{v.title}</Card.Title>
                        <Card.Text>
                            {v.body}
                        </Card.Text>
                        <Button variant="warning"><Link to={`/blog/${v.id}`}>Go somewhere</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <>
            <Header></Header>
            <Container>
                <Row>
                    {allBlog}
                </Row>
            </Container>

        </>
    )
}
export default Blog