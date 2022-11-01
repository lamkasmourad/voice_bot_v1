import { reactive } from "vue";
import { Keyword } from "@/types/Keyword";
import KeywordService from "@/services/KeywordService";
// import { WeightEnum } from "@/enums/WeightEnum";

export default function useKeyword() {
    //let keyword: Keyword = { value: "", level: WeightEnum.FAIBLE }
    const keywords = reactive<Array<Keyword>>([]);
    const addKeyword = (keyword: Keyword) => {
        let newKeyword = Object.assign({}, keyword);
        newKeyword.id = keyword.id + 1;
        newKeyword.label=''; 
        newKeyword.level = 0; 
        keywords.push(newKeyword)
    };
    const deleteKeyword = (index: number) => keywords.splice(index, 1);

    const saveKeywords = () => {
        KeywordService.addKeywords(keywords)
    }

    return { keywords, addKeyword, deleteKeyword, saveKeywords };
}