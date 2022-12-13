import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { store } from "@/stores";

export const useAppStore = defineStore(
  "app",
  () => {
    const activityState = reactive({
      code: "1",
    });
    const setActivityCode = (code: string) => {
      activityState.code = code;
    };
    return {
      activityState,
      setActivityCode,
    };
  },
  { persist: true }
);

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
