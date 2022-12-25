export const Render=(Todos)=>{
    const Screen=document.querySelector('.ListTodos');
    Screen.innerHTML='';
        Todos.forEach((data,index)=>{

            let part;
            if(!data.prio)
            {
             part=`<input type="checkbox" class="CheckBox" checked ><div class="DetailsText"><div class="ContentDetails lineThrough">${data.TodoText}</div><div class="DateTime"><img src="./images/calender.png"><div class="DataDate-Time" >${data.timeStamp}</div></div></div> `;
            }
            else{
                part=`<input type="checkbox" class="CheckBox" ><div class="DetailsText"><div class="ContentDetails">${data.TodoText}</div><div class="DateTime"><img src="./images/calender.png"><div class="DataDate-Time" >${data.timeStamp}</div></div></div> `;
            }
            const html=`<div class="TemplateTodo" data-itemno=${index+1}>
   <div class="TextTodo">
      ${part}
   </div>
   <img class="Priority_Star" src="./images/dustbin.png" alt="">
</div>`; 

        Screen.insertAdjacentHTML('beforeend',html);
        })

}
