import React from 'react';
import request from 'superagent' ;

class Specification extends React.Component{
	constructor(props) {
		super(props);
	}
	  render(){
	  	  var excercise = this.props.excercise ;

          var display = (
              <div>
					<ul className="specs">

				  <li>
				    <span>Muscles</span>
				    <dl>
				      <dt>Muscle Group</dt>
				      <dd>{excercise.muscles.muscleGroup}</dd>
				      <dt>Muscles Worked</dt>
				      <dd>{excercise.muscles.musclesWorked.join(', ')}</dd>


				    </dl>
				  </li>	
				  <li>
				    <span>How to do this Excercise</span>
				    <dl>

				      <dd>{excercise.extra}</dd>

				    </dl>
				  </li>

				  </ul>            
            </div>
	       )
	  	  return (
	  	       <div>
                  {display}
              </div>
	         );
      }
  }
class ImagesSection extends React.Component{
	constructor(props) {
		super(props);
	}
	  render(){
	  	  var thumbImages = this.props.excercise.images.map(function(img,index) {
              return (
              	    <li>

                       <img key={index} src={"/ExcerciseSpecs/" + img}
                           alt="missing" />
                    </li>
                    ) ;
	  	      } );
	  	  var mainImage = (


          	    <div className="excercises">
				  <img src={"/ExcerciseSpecs/" + this.props.excercise.images[0]}
				        alt={this.props.excercise.name}
				        className="excercises" />
				</div>


                ) ;
	  	return (
			<div>

			  					{mainImage}


			       <h1>{this.props.excercise.name}</h1>
		           <p>{this.props.excercise.description}</p>
		           <ul className="excercise-thumbs">
		               {thumbImages}
		           </ul>
			</div>
               );
	  }
}

class ExcerciseDetail extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			excercise:null
		}

		this.componentDidMount = this.componentDidMount.bind(this);

	}


	componentDidMount(){
	    request.get(
	         '/ExcerciseSpecs/excercises/' + this.props.params.id + '.json',
	           function(err, res) {
	         	   var json = JSON.parse(res.text);
			       this.setState({ excercise : json});
	             }.bind(this)
		).type('application/json');
	  }
	  render(){
	      var display = <p>No excercise details</p> ;
	  	  var excercise = this.state.excercise ;
          if (excercise) {
  			display =  (
  				<div>
              	   <ImagesSection  excercise={excercise} />
              	   <Specification  excercise={excercise} />
                </div>
                )
          }
	  	  return (
	  	  	    <div>
                  {display}
                </div>
	            );
	  }
	}

export default ExcerciseDetail;