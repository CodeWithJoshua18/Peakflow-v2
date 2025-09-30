const Task = {
  id: crypto.randomUUID(),   
  title: "",                 
  description: "",           
  priority: "",              
  deadline: "",              
  status: "Todo",            
  createdAt: new Date().toISOString(), 
};
export default Task