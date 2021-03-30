import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
const FakeAlert = () => {
    const [show, setShow] = useState(true);
    return (
        <Alert show={show} variant="danger">
            <Alert.Heading>Oh There is No Comments for this dish yet</Alert.Heading>
            <p>
                Be the first to Comment for this dish
      </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-secondary">
                    Close me y'all!
        </Button>
            </div>
        </Alert>
    );
};
export default FakeAlert;