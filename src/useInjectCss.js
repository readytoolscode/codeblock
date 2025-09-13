import { useEffect } from "react";
import cssText from "./_css.js";

export default function useInjectCss(id = "rt-codeblock-styles") {
    useEffect(() => {
        if (typeof document === "undefined") return; // SSR safe
        if (document.getElementById(id)) return;

        const style = document.createElement("style");
        style.id = id;
        style.textContent = cssText;
        document.head.appendChild(style);

    }, [id]);
}
