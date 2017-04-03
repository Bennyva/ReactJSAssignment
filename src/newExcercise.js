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

        console.log(this.reps.value.trim() + " c");
        this.props.editActivity(name, change[name]);

        //console.log(task);
        //this.props.editActivity(e.target.value);
        //this.setState({value: e.target.value});
    }
    clearForm(){
        this.props.clearForm();
    }

    handleSubmit(e){
        e.preventDefault();
        //create a property function and pass it up to the parent

        var repsText = this.reps.value.trim();
        var setsText = this.sets.value.trim();
        var excerciseText = this.activityTitle.value.trim();
        var extraNotesText = this.activityDesc.value.trim();
        console.log(repsText + 'b');

        if(repsText === "-" || setsText === "-" || !excerciseText){
        alert('Please fill in all form information.\nReps: ' + repsText + '\nSets: ' + setsText + '\nExcercise: ' + excerciseText);
        return;
        }

        //checks if it is updating or not
        if(this.props.isEdit !== 0){
            var updatedTask= {
                id:this.props.isEdit,
                reps: this.reps.value.trim(),
                sets: this.sets.value.trim(),
                activity_title: this.activityTitle.value.trim(),
                activity_description: this.activityDesc.value.trim()
            }
            console.log(updatedTask);
            this.reps.value = "-";
            this.sets.value = "-"
            this.activityTitle.value = "";
            this.activityDesc.value = "";

            this.props.onToDoUpdate(updatedTask);
            this.clearForm();
        }else{
            var newTask={
                reps: this.reps.value.trim(),
                sets: this.sets.value.trim(),
                activity_title: this.activityTitle.value.trim(),
                activity_description: this.activityDesc.value.trim()
            }
                        
            
            this.reps.value = "-";
            this.sets.value = "-"
            this.activityTitle.value = "";
            this.activityDesc.value = "";

            this.props.onToDoAdd(newTask);
            this.clearForm();
            console.log(this.reps.value);
        }

        

        
        
    }
    render() {
        return (
            <Col xs={4}>
             <Form onSubmit={this.handleSubmit}  >
                <FormGroup controlId="formReps">
                    <Col componentClass={ControlLabel} sm={12}>
                        Reps
                    </Col>
                    <Col xs={12}>
                        <FormControl componentClass="select" value={this.props.reps} onChange={this.handleChange.bind(this,'reps')} placeholder="select" inputRef={ref => { this.reps = ref; }}>
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

                <FormGroup controlId="formSets">
                    <Col componentClass={ControlLabel} sm={12}>
                    Sets
                    </Col>
                    <Col xs={12}>
                                <FormControl componentClass="select" value={this.props.sets} onChange={this.handleChange.bind(this,'sets')} placeholder="select"  inputRef={ref => { this.sets = ref; }}>
                                  <option selected value="-">-</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  
                                </FormControl>
                              </Col>
                </FormGroup>

                <FormGroup controlId="formActivityTitle">
                  <Col componentClass={ControlLabel} sm={12}>
                  Excercise
                  </Col>
                  <Col xs={12}>
                    <FormControl type="text" inputRef={ref => { this.activityTitle = ref; }} value={this.props.activity_title} onChange={this.handleChange.bind(this, 'activity_title')} placeholder="Excercise" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlsActivityDesc">
                  <Col componentClass={ControlLabel} sm={12}>
                  Notes about Excercise
                  </Col>
                  <Col xs={12}>
                    <FormControl inputRef={ref => { this.activityDesc = ref; }} value={this.props.activity_description} onChange={this.handleChange.bind(this, 'activity_description')} componentClass="textarea" placeholder="Extra Notes" />
                  </Col>
                </FormGroup>

                <FormGroup>
                    <Button type="submit">
                      Save
                    </Button>
                </FormGroup>
              </Form>
            </Col>
        );
    }
}
export default Task;