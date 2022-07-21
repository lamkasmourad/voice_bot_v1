// @ts-ignore  
import http from "@/config/axios.ts"; 

class ContenuService {
    sayHi(): Promise<any>{
        return http.get("test").then((response: any) => {
            console.log(response.data); 
        });  
    }

    createContenu(formData: any): Promise<any>{
        return http.post("contenu/create",formData).then((response: any) => {
            console.log(response.data); 
        });  
    }

    
  }
  
  export default new ContenuService();