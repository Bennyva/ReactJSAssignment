import React from 'react';
import _ from 'lodash';
import Excercises from  './Data';
import './App.css' ;
import { Link } from 'react-router';

class SelectBox extends React.Component{
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);

  }

    handleChange(e, type,value) {
               e.preventDefault();
               this.props.onUserInput( type,value);
          }
      handleTextChange(e) {
            this.handleChange( e, 'search', e.target.value);
      }
      handleSortChange(e) {
          this.handleChange(e, 'sort', e.target.value);
      }

    render(){
        return (
            <div className="col-md-8 col-md-offset-2">
                <input className="form-control" type="text" placeholder="Search"
                value={this.props.filterText}
                onChange={this.handleTextChange} />
            Sort by:
                <select className="form-control" id="sort" value={this.props.order }
                onChange={this.handleSortChange} >
                    <option value="excerciseName">Excercise Name</option>
                    <option value="muscleCategory">Muscle Group</option>
               </select>
            </div>
        );
    }
}

class ExcerciseItem extends React.Component{
    constructor(props) {
    super(props);
  }
  render(){
    return(
        
        <li className="thumbnail phone-listing">
                <Link to={'/excercises/' + this.props.excercise.id} className="thumb">
                     <img src={"/ExcerciseSpecs/" + this.props.excercise.imageUrl}
                         alt={this.props.excercise.muscleCategory} /> </Link>
                <Link to={'/excercises/' + this.props.excercise.id}> {this.props.excercise.muscleCategory}</Link>
                <p>{this.props.excercise.excerciseName}</p>
        </li>
    );
  }
}


class FilteredExcerciseList extends React.Component{
    constructor(props) {
    super(props);
  }
  render(){

    var displayedExcercise = this.props.excercises.map(function(excercise) {
              return <ExcerciseItem key={excercise.id} excercise={excercise} /> ;
            }) ;

    return(

        <div className="col-md-8 col-md-offset-2">

          <ul className="excercises">

            {displayedExcercise}

          </ul>

        </div>
    );
  }
}


class ExcerciseListApp extends React.Component{
    constructor(props) {
    super(props);

    this.state = {
        search: '',
        sort: 'excerciseName'
      }

      
    this.handleChange = this.handleChange.bind(this);


  }


      
     handleChange(type,value) {
            if ( type === 'search' ) {
                this.setState( { search: value } ) ;
              } else {
                 this.setState( { sort: value } ) ;
              }
      } 


  render(){

    var list = Excercises.filter(function(e) {
                  return e.excerciseName.toLowerCase().search(
                         this.state.search.toLowerCase() ) !== -1 ;
                    }.bind(this) );
    var filteredList = _.sortBy(list, this.state.sort) ;

    return(
        
        <div className="view-container">
              <div className="view-frame">
                 <div className="container-fluid">
                   <div className="row">
                      <SelectBox onUserInput={this.handleChange } 
                             filterText={this.state.search} 
                             sort={this.state.sort} />
                       <FilteredExcerciseList excercises={filteredList} />
                  </div> 
                  </div>                   
                </div>
              </div>
    );
  }
}


export default ExcerciseListApp;