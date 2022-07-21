// @ts-ignore  
import http from "@/config/axios.ts"; 

class CategoryService {



    getAllCategories() : Promise<any> {
        return http.get("category/all").then((response: any) => {
            let type = typeof response.data; 
            console.log(type);
            return response.data; 
        });  
    }

    
  }
  
  export default new CategoryService();