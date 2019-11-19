import React,{Component} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {connect} from 'react-redux';
import {addDress} from '../actions/dressActions';

class DressModal extends Component {

    state={
        modal:false,
        Dressname:'',
        Price:0,
        Brand:'',
        Category:''
    }

    toggle = () => {
        this.setState({
            modal:!this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const newDress = {
            Dressname:this.state.Dressname,
            Price:this.state.Price,
            Brand:this.state.Brand,
            Category:this.state.Category
        }

        // console.log(newDress)

        this.props.addDress(newDress)

        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick =  {this.toggle}
                >
                    Add Dress
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to collection</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="dress">Dress</Label>
                                <Input
                                    type="text"
                                    name="Dressname" 
                                    id="Dressname"
                                    placeholder="Give Name of the Dress"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    name="Price"
                                    id="Price"
                                    step="0.01"
                                    placeholder="Give it a Price"
                                    onChange={this.onChange} 
                                />
                                <Input
                                    type="text"
                                    name="Brand"
                                    id="Brand"
                                    placeholder="Brand name please"
                                    onChange={this.onChange} 
                                />
                                <Input
                                    type="text"
                                    name="Category"
                                    id="Category"
                                    placeholder="Give a category"
                                    onChange={this.onChange} 
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop:"2rem"}}
                                    block
                                >
                                    Add Dress
                                </Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>

                </Modal>
            </div>

        );
    }

}

const mapStateToProps = state => ({
    dress:state.dress
});

export  default connect(mapStateToProps,{addDress})(DressModal);