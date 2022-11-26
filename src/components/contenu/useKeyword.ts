import { reactive } from "vue";
import { Keyword } from "@/types/Keyword";
import KeywordService from "@/services/KeywordService";
// import { WeightEnum } from "@/enums/WeightEnum";
import { ref } from 'vue'

export default function useKeyword() {

    const MAX_KEYWORDS = 10;
    //let keyword: Keyword = { value: "", level: WeightEnum.FAIBLE }
    const keywords = reactive<Array<Keyword>>([]);
    const error =ref("");
    const addKeyword = (keyword: Keyword) => {
        if (keywords.length >= MAX_KEYWORDS) {
            error.value = "Vous ne pouvez pas ajouter plus de " + MAX_KEYWORDS + " mots clès";
        } else {
            let newKeyword = Object.assign({}, keyword);
            newKeyword.id = keyword.id + 1;
            newKeyword.label = '';
            newKeyword.level = 0;
            newKeyword.synonyms=[];
            keywords.push(newKeyword);
            error.value = "";
        }

    };

    const deleteKeyword = (index: number) => {
        if (keywords.length > 1) {
            error.value = "";
            keywords.splice(index, 1)
        }
    }

    const saveKeywords = () => {
        KeywordService.addKeywords(keywords)
    }

    const addSynonym = (index: number) => {
        keywords[index].synonyms?.push(""); 
        
    }

    return { keywords, error, addKeyword, addSynonym, deleteKeyword, saveKeywords };
}