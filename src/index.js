import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import ReactDOM from "react-dom"
require('./App.css');

const fack = {
  ee : true,
  signout(cb) {
    setTimeout(cb, 100);
  },
  signup(cb) {
    setTimeout(cb, 100);
}
};

function Wetting() {
  return fack.ee ? (
  <h2>恭喜你获得大笨猪的荣誉称号
    <svg className="icon" aria-hidden="true">
                 <use xlinkHref="#icon-icon-test2"></use>
                 </svg>
  </h2>
  ) :(<h1>1</h1>)
}

function Loving() {
  let history = useHistory();
    return fack.ee ? (
    <p>
    这个是古拉拉黑暗之门，你需要回答几个问题才能进入。
    <button
      onClick={() => {
        fack.signout(() => history.push("/ques"));
      }}
    >
     开始回答问题
    </button>
  </p>
    ): ( <p>you are pig</p>);
}

function Ques() {
  let history = useHistory();
  return fack.ee ? (
    <p>
    你是一个可爱并且善良的人吗？
    <li>
      <label>是的</label>
      <input type="radio" value="1"  name="yes" checked="checked"/>
    </li>
    <li>
      <label>不是</label>
      <input type="radio" value="2"  name="yes" />
    </li>
    <hr/>
   你有物理考95分以上的经历吗？
   <li>
     <label>没有</label>
     <input type="radio" value="3"  name="no" checked="checked"/>
   </li>
   <li>
     <label>肯定没有</label>
     <input type="radio" value="4"  name="no" />
   </li>
   <button 
    onClick={() => {
      fack.signup(()=> history.push("/wetting"));
    }}>
     提交
   </button>
 </p>
    ): ( <p>you are pig</p>);
  
}
      
function DingDing() {
  return <h2>你是猪
  <div class="dd">
  <svg className="icon" aria-hidden="true">
                 <use xlinkHref="#icon-icon-test2"></use>
                 </svg>
   </div> 
   </h2>
}

function FengFeng() {
  return <h2>你是大笨猪
    <div class="dd">
    <svg className="icon" aria-hidden="true">
                 <use xlinkHref="#icon-icon-test2"></use>
                 </svg>
  </div>
  </h2>
}

ReactDOM.render((
   <Router>
      <div>
          <p>通道</p>
             <ul>
            <li>
              <Link to="/love">通道一</Link>
            </li>
            <li>
              <Link to="/about">通道二</Link>
            </li>
            <li>
              <Link to="/users">通道三</Link>
            </li>
          </ul>
        <hr/>
        <Switch>
           <Route path="/love">
            <Loving />
          </Route>
          <Route path="/about">
            <FengFeng />
          </Route>
          <Route path="/users">
            <DingDing />
          </Route>
          <Route path="/ques">
            <Ques />
          </Route>
          <Route path="/wetting">
            <Wetting />
          </Route>
        </Switch>
      </div>
    </Router>
),
  document.getElementById('root')
);

