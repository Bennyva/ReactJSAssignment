import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    handleFinishedClick(){
      this.props.onFinishedClick();
    }
    handleDeleteClick(){
      this.props.onDeleteClick();
    }

    editTask(){
       this.props.editTask();     
    }
    render() {
        return (
            <div>
                <Row>
                <span onClick={this.editTask.bind(this)}>
                    <Col xs={1}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>{this.props.time}
                                <br/>
                                <span>{this.props.period}</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={10}>
                        
                            <h4>{this.props.activity_title}</h4>
                            <p>{this.props.activity_description}</p>
                        
                    </Col>
                </span>
                    <Col xs={1}>
                        <Row style={{paddingTop: '10px', cursor: 'pointer'}}>
                          <Col xs={6}>
                            
                                <FontAwesome name='times' onClick={this.handleDeleteClick.bind(this)}/>
                          </Col>
                          <Col xs={6}>
                            <FontAwesome name='check' onClick={this.handleFinishedClick.bind(this)}/>
                          </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Task;