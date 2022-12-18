export const Render=(Todos)=>{
    const Screen=document.querySelector('.ListTodos');
    Screen.innerHTML='';
        Todos.forEach((data,index)=>{

   const html=`<div class="TemplateTodo" data-itemno=${index+1}>
   <div class="TextTodo">
       <input type="checkbox"><div class="DetailsText"><div class="ContentDetails">${data.TodoText}</div><div class="DateTime"><img src="./images/calender.png"><div class="DataDate-Time" >${data.timeStamp}</div></div></div> 
   </div>
   <img class="Priority_Star" src="./images/dustbin.png" alt="">
</div>`;

        Screen.insertAdjacentHTML('beforeend',html);
        })

}