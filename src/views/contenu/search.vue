<template>
  <div>
    <div
      class="
        max-w-5xl
        mx-auto
        bg-gray-100
        shadow-lg
        rounded-lg
        overflow-hidden
        md:max-w-l
      "
      style="height: 500px; background: #f3f4f6"
    >
      <div class="md:flex">
        <div class="w-full p-4">
          <div class="relative">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              class="
                bg-white
                focus:ring 
                h-10
                px-5
                pr-10
                w-full
                rounded-full
                text-sm
                focus:outline-none
              "
            />
            <button @click="search" class="absolute right-0 top-0 mt-3 mr-4">
              <svg
                class="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
          <div>
            <loader :loading="isLoading"></loader>
          </div>
          <ul >
            <li
              class="
                flex
                justify-between
                items-center
                bg-white
                mt-2
                p-2
                hover:shadow-lg
                rounded
                cursor-pointer
                transition
              "
            >
              <div class="flex ml-2">
                <img
                  src="https://i.imgur.com/aq39RMA.jpg"
                  width="40"
                  height="40"
                  class="rounded-full"
                />
                <div class="flex flex-col ml-2">
                  <span class="font-medium text-black">Jessica Koel</span>
                  <span class="text-sm text-gray-400 truncate w-32"
                    >Hey, Joel, I here to help you out please tell me</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-gray-300">11:26</span>
                <i class="fa fa-star text-green-400"></i>
              </div>
            </li>
            <li
              class="
                flex
                justify-between
                items-center
                bg-white
                mt-2
                p-2
                hover:shadow-lg
                rounded
                cursor-pointer
                transition
              "
            >
              <div class="flex ml-2">
                <img
                  src="https://i.imgur.com/eMaYwXn.jpg"
                  width="40"
                  height="40"
                  class="rounded-full"
                />
                <div class="flex flex-col ml-2">
                  <span class="font-medium text-black">Komeial Bolger</span>
                  <span class="text-sm text-gray-400 truncate w-32"
                    >I will send you all documents as soon as possible</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-gray-300">12:26</span>
                <i class="fa fa-star text-green-400"></i>
              </div>
            </li>
            <li
              class="
                flex
                justify-between
                items-center
                bg-white
                mt-2
                p-2
                hover:shadow-lg
                rounded
                cursor-pointer
                transition
              "
            >
              <div class="flex ml-2">
                <img
                  src="https://i.imgur.com/zQZSWrt.jpg"
                  width="40"
                  height="40"
                  class="rounded-full"
                />
                <div class="flex flex-col ml-2">
                  <span class="font-medium text-black">Tamaara Suiale</span>
                  <span class="text-sm text-gray-400 truncate w-32"
                    >Are you going to business trip next week</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-gray-300">8:26</span>
                <i class="fa fa-star text-green-400"></i>
              </div>
            </li>
            <li
              class="
                flex
                justify-between
                items-center
                bg-white
                mt-2
                p-2
                hover:shadow-lg
                rounded
                cursor-pointer
                transition
              "
            >
              <div class="flex esml-2">
                <img
                  src="https://i.imgur.com/agRGhBc.jpg"
                  width="40"
                  height="40"
                  class="rounded-full"
                />
                <div class="flex flex-col ml-2">
                  <span class="font-medium text-black">Sam Nielson</span>
                  <span class="text-sm text-gray-400 truncate w-32"
                    >I suggest to start new business soon</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-gray-300">7:16</span>
                <i class="fa fa-star text-green-400"></i>
              </div>
            </li>
            <li
              class="
                flex
                justify-between
                items-center
                bg-white
                mt-2
                p-2
                hover:shadow-lg
                rounded
                cursor-pointer
                transition
              "
            >
              <div class="flex ml-2">
                <img
                  src="https://i.imgur.com/uIgDDDd.jpg"
                  width="40"
                  height="40"
                  class="rounded-full"
                />
                <div class="flex flex-col ml-2">
                  <span class="font-medium text-black">Caroline Nexon</span>
                  <span class="text-sm text-gray-400 truncate w-32"
                    >We need to start new reseatch center.</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-gray-300">9:26</span>
                <i class="fa fa-star text-green-400"></i>
              </div>
            </li>
            <li
              class="
                flex
                justify-between
                items-center
                bg-white
                mt-2
                p-2
                hover:shadow-lg
                rounded
                cursor-pointer
                transition
              "
            >
              <div class="flex ml-2">
                <img
                  src="https://i.imgur.com/tT8rjKC.jpg"
                  width="40"
                  height="40"
                  class="rounded-full"
                />
                <div class="flex flex-col ml-2">
                  <span class="font-medium text-black">Patrick Koeler</span>
                  <span class="text-sm text-gray-400 truncate w-32"
                    >May be yes</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-gray-300">3:26</span>
                <i class="fa fa-star text-green-400"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @
import { ref } from "vue";
import Loader from '@/components/Loader.vue';

let isLoading = ref(false);

function search() {
  isLoading.value = !isLoading.value;
}
</script>