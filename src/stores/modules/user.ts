import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { store } from "@/stores";
import { useErrorLogStore } from "@/stores/modules/errorLog";
import type { TaskModel } from "@/api/app/model/taskModel";
import type { UserEggInfo } from "@/api/app/model/userModel";

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref();
    const taskState = reactive({
      taskList: [] as TaskModel[],
    });
    const setTaskList = (taskList: TaskModel[]) => {
      taskState.taskList = taskList;
    };
    const setToken = (val: any) => {
      token.value = val;
    };
    const logout = (val: any) => {};
    const setSessionTimeout = (val: any) => {};
    const guideState = reactive({
      finished: false,
    });
    const unFinishGuide = () => {
      guideState.finished = false;
    };
    const finishGuide = () => {
      guideState.finished = true;
    };
    const userEggInfo = ref<UserEggInfo>({});
    const setUserEggInfo = (val: UserEggInfo) => {
      userEggInfo.value = val;
    };
    return {
      token,
      taskState,
      setTaskList,
      setToken,
      logout,
      setSessionTimeout,
      guideState,
      finishGuide,
      unFinishGuide,
      userEggInfo,
      setUserEggInfo,
    };
  },
  {
    persist: {
      paths: ["token", "guideState"],
    },
  }
);

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
