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
                Item_code: '',
                category: '',
                item_desc: '',
                image: '',
                qty: '',
                buying_price: '',
                selling_price: '',
                date_bought: new Date()
            }
        }
    }

    handleSubmit = () =>{

        axios.get('http://localhost:3002/items/lastItemCode').then((result)=>{
            this.setState({
                item: {
                    ...this.state.item,
                    Item_code: ++result.data[0].Item_code
                }
            })
        }).then(()=>{
            let data = this.state.item;
            console.log(data);
            let url = "http://localhost:3002/items/";
            axios.post(url,data).then((res)=>{
                console.log(res);
            });
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
    };

    render() {
        const Item = this.state.item;
        return (
            <div className={'form'}>
                <h3>Add New Item</h3>
                <Form >
                    <Form.Group controlId="CategorySelect">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" name='category' onChange={(e)=>this.handleDropdownChange(e.target.value)}>
                            <option>Watch</option>
                            <option>Sunglasses</option>
                            <option>Teddy Bear</option>
                            <option>Purse</option>
                            <option>Wallet</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" name='item_desc' value={Item.item_desc} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Enter Quantity" name='qty' value={Item.qty} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Buying Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" name='buying_price' value={Item.buying_price} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" name='selling_price' value={Item.selling_price} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Buying Date</Form.Label>
                        <Form.Control type="date" placeholder="Select date" name='date_bought' value={this.state.date_bought} onChange={this.handleTextInputChange}/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default AddNewItem;
