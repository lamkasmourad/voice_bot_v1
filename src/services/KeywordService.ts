import http from "@/config/axios"; 

class KeywordService {
    addKeywords(formData: any): Promise<any>{
        return http.post("contenu/keywords/save",formData).then((response: any) => {
            console.log(response.data); 
        });  
    }
}

export default new KeywordService(); 