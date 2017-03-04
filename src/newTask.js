import React, {Component} from 'react';
import {Row, Col, FormControl, Form, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        //create a property function and pass it up to the parent

        var timeText = this.time.value.trim();
        var periodText = this.period.value.trim();
        var activityTitleText = this.activityTitle.value.trim();
        var activityDescText = this.activityDesc.value.trim();


        if(timeText === "-" || periodText === "-" || !activityTitleText || !activityDescText){
        alert('Please fill in all form information.\nTime: ' + timeText + '\nPeriod: ' + periodText + '\nActivity Title: ' + activityTitleText + '\nActivity Description: '  + activityDescText);    
        return;
        }
        this.props.onToDoAdd(timeText,periodText,activityTitleText, activityDescText);
        this.time.value = "-";
        this.period.value = "-"
        this.activityTitle.value = "";
        this.activityDesc.value = "";

        
        
    }
    render() {
        return (
            <div>
                {/* <Row>
                    <Col xs={1}>
                                <Row>
                                  <Col xs={6}>
                                      <ControlLabel>Time</ControlLabel>
                                          {' '}
                                  </Col>
                                  <Col xs={6}>
                                    <select class="custom-select">
                                      <option selected>-</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                    </select>
                                  </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>
                                      <ControlLabel>Period</ControlLabel>
                                        {' '}
                                            
                                    </Col>
                                    <Col xs={6}>
                                      <select class="custom-select">
                                          <option selected>-</option>
                                          <option value="AM">AM</option>
                                          <option value="PM">PM</option>
                                        </select>
                                    </Col>
                                </Row>
                    </Col>
                    <Col xs={3}>
                        <FormControl type="text" placeholder="Activity Title" />
                        
                    </Col>
                    <Col xs={7}>
                       <FormControl componentClass="textarea" placeholder="Activity Description" />
                    </Col>
                    <Col xs={1}>
                        <Row style={{paddingTop: '10px'}}>
                          <Col xs={6}>
                            <FontAwesome name='times' />
                          </Col>
                          <Col xs={6}>
                            <FontAwesome name='check' />
                          </Col>
                        </Row>
                    </Col>
                </Row> */}
                
                 <Form onSubmit={this.handleSubmit} inline >
                    <FormGroup controlId="formInlineTime">
                        <Col componentClass={ControlLabel} sm={2}>
                        Time
                        </Col>
                        <Col xs={10}>
                                    <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.time = ref; }}>
                                      <option selected value="-">-</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                    </FormControl>
                                  </Col>
                      
                      
                    </FormGroup>
                    <FormGroup controlId="formInlinePeriod">
                        <Col componentClass={ControlLabel} sm={2}>
                        Period
                        </Col>
                        <Col xs={10}>
                                    <FormControl componentClass="select" placeholder="select" inputRef={ref => { this.period = ref; }}>
                                      <option selected>-</option>
                                      <option value="AM">AM</option>
                                      <option value="PM">PM</option>
                                      
                                    </FormControl>
                                  </Col>
                      
                      
                    </FormGroup>
                    <FormGroup controlId="formInlineActivityTitle">
                      <Col componentClass={ControlLabel} sm={2}>
                      Activity
                      </Col>
                      <Col xs={10}>
                        <FormControl type="text" inputRef={ref => { this.activityTitle = ref; }} onChange={this.handleChange} placeholder="Activity Title" />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsActivityDesc">
                      <Col componentClass={ControlLabel} sm={3}>
                      Activity Description
                      </Col>
                      <Col xs={9}>
                      <FormControl inputRef={ref => { this.activityDesc = ref; }} onChange={this.handleChange} componentClass="textarea" placeholder="Activity Description" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">
                          Save
                        </Button>
                    </FormGroup>
                  </Form>
                
            </div>
        );
    }
}

export default Task;