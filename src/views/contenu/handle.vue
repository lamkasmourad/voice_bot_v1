<template>
  <div>
    <div
      class="max-w-5xl mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-l"
      style="background: #f3f4f6"
    >
      <div class="md:flex">
        <div class="w-full p-4" style="height: 700px">
          <div>
            <form @submit.prevent="createContenu">
              <div class="relative mb-8 z-0">
                <input
                  type="text"
                  id="text"
                  v-model="formData.text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="text"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Texte</label
                >
              </div>
              <div class="relative z-0 w-full mb-8 group">
                <input
                  type="text"
                  name="controle_question"
                  v-model="formData.controleQuestion"
                  id="controle_question"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="controle_question"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Controle question</label
                >
              </div>
              <div class="relative z-0 w-full mb-8 group">
                <input
                  type="text"
                  name="scenario"
                  id="scenario"
                  v-model="formData.scenario"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="scenario"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Sc??nario</label
                >
              </div>
              <div class="relative z-0 w-full mb-9 group top-2.5">
                <label
                  for="categories"
                  class="peer-focus:font-medium text-gray-500 dark:text-gray-400 text-sm float-left mb-2"
                  >Cat??gories</label
                >
                <multiselect
                  v-model="formData.selectedCategories"
                  :options="categories"
                  id="categories"
                  mode="tags"
                  placeholder="Choisissez le(s) produits"
                  noResultsText="Aucun r??sultat"
                  :close-on-select="true"
                />
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enregistrer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <keyword-list></keyword-list>
    <notifications position="bottom left" class="my-notification"> </notifications>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import ContenuService from "@/services/ContenuService";
import CategoryService from "@/services/CategoryService";
import KeywordList from "@/components/contenu/KeywordList.vue";
import { useNotification } from "@kyvg/vue3-notification";

const notification = useNotification();

const formData = reactive({
  text: "",
  controleQuestion: "",
  scenario: "",
  selectedCategories: [],
});

const openModal = ref(false);

const categories = ref([]);

const route = useRoute();

onMounted(() => {
  CategoryService.getAllCategories()
    .then((data: any) => {
      categories.value = data;
    })
    .then(() => {
      if (route.params.id !== undefined) {
        ContenuService.getContenu(route.params.id).then((selectedContenu: any) => {
          Object.assign(formData, selectedContenu);
        });
      }
    });
});

function createContenu() {
  //openModal.value = true;

  ContenuService.createContenu(formData).then((response) => {
    let message = "";
    if (response && response.data) {
      if (response.data.message == "success") {
        message = "Contenu a ??t?? ajout?? avec succ??s";
      } else if (response.data.message == "duplicated") {
        message = "Contenu d??j?? exist";
      }
    }
    if (message) {
      notification.notify({
        type: "success",
        title: "Contenu",
        text: message,
      });
    }
  });
}
</script>

<style scoped>
label {
  left: 0;
}

.multiselect {
  border: none;
  border-bottom: 2px solid rgb(209 213 219);
  border-radius: 0px;
  background-color: transparent;
}

.multiselect.is-open {
  border-bottom: var(--ms-border-width, 1px) solid var(--ms-border-color, #d1d5db);
  box-shadow: none;
}
</style>
