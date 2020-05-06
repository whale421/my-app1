import React, {Fragment,Component  } from 'react';
require('./App.css');

const numbers = [
"❥王博锋❤",
"谢谢你这么爱我",
"有时候我反应很慢",
"做事比较粗心大意",
"但是你一直都很耐心",
"身为一个钢铁直男的你",
"给足了我恋爱的仪式感",
"每天那么忙但是还是抽很多时间陪我",
"也一直默默地规划我们的未来"
];
const numbers1 = [
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  "我爱你 , 不畏人潮的拥挤 , 用尽余生的勇气 , 只为能靠近你哪怕一厘米",
  ];

class todoList extends Component {
  constructor(props) {
    super(props);
  this.state = {
    inputValue: '',
  } 
  }
NumberList(number) {
  const numbers = number;
  const listItems = (numbers || []).map((number) =>
    <div class="uu" key={number.toString()}>
      {number}
    </div>
  );
  return (
    <ul>{listItems}</ul>
  );
}
NumList(number) {
  const numbers1 = number;
  const listItems = (numbers1 || []).map((number) =>
    <div class="mm">
     <div key={number.toString()}>
      {number}
     </div>
    </div>
  );
  return (
    <div class="kk">{listItems}</div>
  );
}
   render() {
    return (
      <div class="dd">
        <div class="nav">
         <div class="box">
          <div class="style5">
            <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-xingkongmianmao"></use>
            </svg>
            <a href="#"> 爱情 </a>
          </div>
            <div class="style1">
            <input 
              type="text" 
              value="某猪是大坏蛋"
            />
            </div>
          </div>
          <div class="style3">
              <div class="one">
                <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-bojuelvpai-baipai"></use>
                </svg>
                <a href="#">恋爱小册</a>
              </div>
                <div class="two">
                  <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-bojuelvpai-baipai2"></use>
                  </svg>
                  <a href="#">下载恋爱 App</a>
                </div>
                  <div class="fin">
                   <select class="ss">
                    <option value="相识">相识</option>
                    <option value="相知">相知</option>
                    <option value="相爱">相爱</option>
                   </select>
                  </div>
           </div>
          </div>
      <div class="dd2">
         <div class="cc">
          {this.NumberList(numbers)}
         </div>
         <div class="hh">
           <div class="oo">
             <div class="ww">
               <div class="style2">
                 <svg className="icon" aria-hidden="true">
                 <use xlinkHref="#icon-icon-test2"></use>
                 </svg>
                 <a href="#"> 大猪猪和小可爱 </a>
               </div>
               <div>
                   <select class="sss">
                    <option value="可爱①">可爱①</option>
                    <option value="可爱②">可爱②</option>
                   </select>
               </div>
               <div>
                   <select class="sss">
                    <option value="校园">校园</option>
                    <option value="工作">工作</option>
                   </select>
               </div>
              </div>
              <div>
                   <svg  className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-xihuan"></use>
                   </svg>
                   <select class="sss">
                    <option value="java">java</option>
                    <option value="html">html</option>
                   </select>
              </div>
           </div>
           <div class="ee">
              
              {this.NumList(numbers1)}
              
           </div>
         </div>
        </div>
      </div>
    )
}
}
export default todoList;
