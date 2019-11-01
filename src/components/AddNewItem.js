import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './styles.css';
import axios from 'axios';

class AddNewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: '',
                category: '',
                description: '',
                qty: '',
                price: ''
            }
        }
    }

    handleSubmit = () =>{
        let data = this.state.item;
        console.log(data);
        let url = "http://172.21.128.1:8080/items/";
        axios.post(url,data).then((res)=>{
            console.log(res);
        });
    };

    handleTextInputChange = event =>{
        this.setState({
            item: {...this.state.item, [event.target.name]: event.target.value}
        }
    )};

    handleDropdownChange = (category) => {
        this.setState({
            item: {...this.state.item, category: category}
        });
        // console.log(category)
    };

    render() {
        const Item = this.state.item;
        return (
            <div className={'form'}>
                <h3>Add New Item</h3>
                <Form >
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name='name' value={Item.name} onChange={this.handleTextInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="CategorySelect">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" name='category' onChange={(e)=>this.handleDropdownChange(e.target.value)}>
                            <option>Watches</option>
                            <option>Gift Packs</option>
                            <option>Teddy Bears</option>
                            <option>Purses</option>
                            <option>Wallet</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" name='description' value={Item.description} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Enter Quantity" name='qty' value={Item.qty} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" name='price' value={Item.price} onChange={this.handleTextInputChange}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
//
// a
// async async a
// a


export default AddNewItem;
