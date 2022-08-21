// @  
import http from "@/config/axios.ts"; 

class CategoryService {



    getAllCategories() : Promise<any> {
        return http.get("category/all").then((response: any) => {
            return response.data; 
        });  
    }

    
  }
  
  export default new CategoryService();