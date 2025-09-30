const Task = {
  id: crypto.randomUUID(),   
  title: "",                 
  description: "",           
  priority: "",                           
  status: "Todo",            
  createdAt: new Date().toISOString(), 
};
export default Task