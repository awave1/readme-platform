import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Register.css'

class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
        });
      }
    
      render() {
        return (
          <div>
            <Button color="danger" onClick={this.toggle}>Register</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="register-card">
              <ModalHeader toggle={this.toggle}>Register</ModalHeader>
              <ModalBody>
                
                    
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Continue</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }

}

export default Register;