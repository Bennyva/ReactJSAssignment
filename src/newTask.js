import React, {Component} from 'react';
import {Row, Col, FormControl, Form, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = { value: ''};

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(name, e){
        var change = {};
        change[name] = e.target.value;

        
        this.props.editActivity(name, change[name]);

        //console.log(task);
        //this.props.editActivity(e.target.value);
        //this.setState({value: e.target.value});
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

        //checks if it is updating or not
        if(this.props.isEdit !== 0){
            var updatedTask= {
                id:this.props.isEdit,
                time: this.time.value.trim(),
                period: this.period.value.trim(),
                activity_title: this.activityTitle.value.trim(),
                activity_description: this.activityDesc.value.trim()
            }
            console.log(updatedTask);
            this.time.value = "-";
            this.period.value = "-"
            this.activityTitle.value = "";
            this.activityDesc.value = "";

            this.props.onToDoUpdate(updatedTask);
        }else{
            var newTask={
                time: this.time.value.trim(),
                period: this.period.value.trim(),
                activity_title: this.activityTitle.value.trim(),
                activity_description: this.activityDesc.value.trim()
            }
                        
            
            this.time.value = "-";
            this.period.value = "-"
            this.activityTitle.value = "";
            this.activityDesc.value = "";

            this.props.onToDoAdd(newTask);
        }

        

        
        
    }
    render() {
        return (
            <div>
             <Form onSubmit={this.handleSubmit} inline >
                <FormGroup controlId="formInlineTime">
                    <Col componentClass={ControlLabel} sm={2}>
                        Time
                    </Col>
                    <Col xs={10}>
                        <FormControl componentClass="select" value={this.props.time} onChange={this.handleChange.bind(this,'time')} placeholder="select" inputRef={ref => { this.time = ref; }}>
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
                                <FormControl componentClass="select" value={this.props.period} onChange={this.handleChange.bind(this,'period')} placeholder="select"  inputRef={ref => { this.period = ref; }}>
                                  <option selected value="-">-</option>
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
                    <FormControl type="text" inputRef={ref => { this.activityTitle = ref; }} value={this.props.activity_title} onChange={this.handleChange.bind(this, 'activity_title')} placeholder="Activity Title" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsActivityDesc">
                  <Col componentClass={ControlLabel} sm={3}>
                  Activity Description
                  </Col>
                  <Col xs={9}>
                    <FormControl inputRef={ref => { this.activityDesc = ref; }} value={this.props.activity_description} onChange={this.handleChange.bind(this, 'activity_description')} componentClass="textarea" placeholder="Activity Description" />
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