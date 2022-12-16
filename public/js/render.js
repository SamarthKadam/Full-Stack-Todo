export const Render=(Todos)=>{
    const Screen=document.querySelector('.ListTodos');
    Screen.innerHTML='';
        Todos.forEach((data)=>{

//      const html=`<div class="TemplateTodo">
//      <div class="TextTodo">
//          <input type="checkbox"><div class="DetailsText">${data.TodoText}<div class="DateTime"><img src="./images/calender.png">${data.timeStamp}</div></div> 
//      </div>
//      <img class="Priority_Star" src="/${data.prio===true?'./images/favorite.png':'./images/star.png'}" alt="">
//  </div>`;

   const html=`<div class="TemplateTodo">
   <div class="TextTodo">
       <input type="checkbox"><div class="DetailsText"><div class="ContentDetails">${data.TodoText}</div><div class="DateTime"><img src="./images/calender.png"><div class="DataDate-Time" >${data.timeStamp}</div></div></div> 
   </div>
</div>`
        Screen.insertAdjacentHTML('beforeend',html);
        })

}