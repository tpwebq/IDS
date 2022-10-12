import {Button,Card,Col,Container,Form,Image,InputGroup,Row,Table} from "react-bootstrap";

function BlogS2(){
    return(
        <Container fluid className="blog-s2 minh-75vh d-flex align-items-start py-5">
            <Row className="w-100 mx-0 mt-5">
                <Col xs={12} md={8} lg={9} className="mx-auto">
                    <Card className="mb-3 shadow bg-white">
                        <Row className="m-0">
                            <Col lg={4} className="d-none d-lg-block px-0 bg-secondary">
                                <Image className="h-100 w-100" src="" alt=""/>
                            </Col>
                            <Col xs={12} lg={8} className="p-3">
                                <h5>
                                    Lorem ipsum
                                </h5>
                                <h6 className="small">-- -- ----</h6>
                                <p className="initialism">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, 
                                    neque vel tincidunt sollicitudin, libero magna laoreet massa, eu pretium 
                                    leo eros at mauris. Phasellus a lacus ipsum. Maecenas dapibus nisi ac 
                                    fringilla pretium.
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>     
    );
}

export default BlogS2;