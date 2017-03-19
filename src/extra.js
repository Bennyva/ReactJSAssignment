<div>
     <h1>React App</h1>
       <ul role="nav">
                <li><Link to="/nav">Nav</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/">Home</Link></li>
        </ul>
{this.props.children}
          <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList 
          //this passes all the state values to the component
            {...this.state}
            on2FinishedClick={this.handleOn2Finished.bind(this)} 
            on2DeleteClick={this.handleOn2Delete.bind(this)}
            on2EditTask={this.handleOn2EditTask.bind(this)}
           />
          <br/>
          <NewTask 
            {...this.state}
            onToDoAdd={this.handleOnToDoAdd.bind(this)} 
            onToDoUpdate={this.handleOnToDoUpdate.bind(this)}
            editActivity={this.handleEditActivity.bind(this)}
            clearForm={this.handleClearForm.bind(this)}
          />
          <AddButton onClick={this.addTask.bind(this)} />
         
      </div>



      </div>


      ___


      <Route path='tasks' component={() => (
            <div>
              <NewTask 
              {...this.state}
              onToDoAdd={this.handleOnToDoAdd.bind(this)}  
              onToDoUpdate={this.handleOnToDoUpdate.bind(this)}
              editActivity={this.handleEditActivity.bind(this)}
              clearForm={this.handleClearForm.bind(this)}
            /> 
            </div>
            )}
          />


          <Route path='add' component={() => (
                <div>
                  <AddButton 
                    onClick={this.addTask.bind(this)} 
                  />
                </div>
              )
            }
            />



            <Route path='addTask' component={addTask}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='newTask' component={() => (
            <div>
            <NewTask 
              {...this.state}
              onToDoAdd={this.handleOnToDoAdd.bind(this)}  
              onToDoUpdate={this.handleOnToDoUpdate.bind(this)}
              editActivity={this.handleEditActivity.bind(this)}
              clearForm={this.handleClearForm.bind(this)}
            /> 
             <TaskList 
                //this passes all the state values to the component
                {...this.state}
                on2FinishedClick={this.handleOn2Finished.bind(this)} 
                on2DeleteClick={this.handleOn2Delete.bind(this)}
                on2EditTask={this.handleOn2EditTask.bind(this)}
              />
           </div>
            )} 
          />
          <Route path='tasks' component={() => (
            <div>
              <NewTask 
              {...this.state}
              onToDoAdd={this.handleOnToDoAdd.bind(this)}  
              onToDoUpdate={this.handleOnToDoUpdate.bind(this)}
              editActivity={this.handleEditActivity.bind(this)}
              clearForm={this.handleClearForm.bind(this)}
            /> 
            </div>
            )}
          />
          <Route path='*' component={NotFound} />



/*const Nav = () => (
  <div>
    <Link onlyActiveOnIndex  activeStyle={{color:'#53acff'}} to='/'>Tasks</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/addTask'>New Task</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>
  </div>
)*/

const Container = (props) => <div>
  /*<Nav />*/
  {props.children}
</div>

/*const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const NotFound = () => (<h1>404.. This page is not found!</h1>)
const Home = () => <h1>Hello from Home!</h1>*/


const addTask = (props) => <div>
  <br />

  <Link to='/addTask'>Twitter Feed</Link>&nbsp;
  <Link to='/addTask/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

<div>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>
    <Link activeStyle={{color:'#53acff'}} to='/home'>Home 2</Link>
    <Link activeStyle={{color:'#53acff'}} to='/tasks'>Tasks</Link>
    <Link activeStyle={{color:'#53acff'}} to='/add'>add</Link>

  </div>
