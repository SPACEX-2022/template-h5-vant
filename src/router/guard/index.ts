import type { Router } from "vue-router";
import { setTitle } from "@/utils/domUtils";
import { useGlobSetting } from "@/hooks/setting";

const globalSetting = useGlobSetting();

export function setupRouterGuard(router: Router) {
  createMetaGuard(router);
}

function createMetaGuard(router: Router) {
  router.afterEach((to) => {
    const { meta } = to;
    if (meta && meta.title) {
      setTitle(meta.title);
    } else {
      setTitle(globalSetting.title);
    }
  });
}

