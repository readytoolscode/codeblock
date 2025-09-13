import React, { useMemo, useState } from "react";
import { THEME_VARS } from "./themes.js";
import useInjectCss from "./useInjectCss.js";
function applyThemeVars(theme, custom) {
    const base = THEME_VARS[theme] || THEME_VARS.midnight;
    return { ...base, ...(custom || {}) };
}

function useClipboard(text, timeout = 1500) {
    const [copied, setCopied] = useState(false);
    const onCopy = async () => {
        try {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), timeout);
            }
        } catch (e) {
            console.error("Copy failed", e);
        }
    };
    return { copied, onCopy };
}

export default function CodeBlock({
                                      code,
                                      language = "plaintext",
                                      filename,
                                      showCopy = true,
                                      showInsert = false,
                                      onInsert,
                                      theme = "midnight",
                                      customTheme,
                                      fontSize = 14,
                                      fontFamily,
                                      lineNumbers = false,
                                      startLineNumber = 1,
                                      highlightLines = [],
                                      wrap = false,
                                      copyTimeoutMs = 1500,
                                      labels = { copy: "Copy", copied: "Copied!", insert: "Insert" },
                                      className,
                                      style,
                                      autoInjectCSS = true
                                  }) {
    const { copied, onCopy } = useClipboard(code, copyTimeoutMs);

    const cssVars = useMemo(() => {
        const vars = applyThemeVars(theme, customTheme);
        return {
            ...vars,
            "--cb-font-size": `${fontSize}px`,
            ...(fontFamily ? { "--cb-font": fontFamily } : {})
        };
    }, [theme, customTheme, fontSize, fontFamily]);
    if (autoInjectCSS) useInjectCss();
    const lines = useMemo(() => code.split(/\r?\n/), [code]);
    const hlSet = useMemo(() => new Set(highlightLines || []), [highlightLines]);
    const showHeader = Boolean(filename || showCopy || (showInsert && onInsert));

    return (
        <div
            className={["rt-cb", lineNumbers ? "rt-cb--ln" : "", className].filter(Boolean).join(" ")}
            style={{ ...cssVars, ...(style || {}) }}
        >
            {showHeader && (
                <div className="rt-cb__header">
                    <div className="rt-cb__filename">{filename || ""}</div>
                    <div className="rt-cb__toolbar">
                        {showInsert && typeof onInsert === "function" && (
                            <button
                                type="button"
                                className="rt-cb__btn"
                                aria-label={labels.insert || "Insert"}
                                onClick={() => onInsert(code)}
                                title={labels.insert || "Insert"}
                            >
                                ➕ {labels.insert || "Insert"}
                            </button>
                        )}
                        {showCopy && (
                            <button
                                type="button"
                                className="rt-cb__btn"
                                aria-label={copied ? (labels.copied || "Copied!") : (labels.copy || "Copy")}
                                onClick={onCopy}
                                title={copied ? (labels.copied || "Copied!") : (labels.copy || "Copy")}
                            >
                                {copied ? "✔" : "⧉"} {copied ? (labels.copied || "Copied!") : (labels.copy || "Copy")}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* pre/code (line numbers: két oszlopos grid) */}
            <pre className={["rt-cb__pre", wrap ? "wrap" : ""].filter(Boolean).join(" ")}>
        {lineNumbers ? (
            <div className="rt-cb__grid">
                <div className="rt-cb__gutter" aria-hidden>
                    {lines.map((_, idx) => (
                        <div key={`g${idx}`} className="rt-cb__line">
                            {startLineNumber + idx}
                        </div>
                    ))}
                </div>
                <code className={`rt-cb__code language-${language}`}>
                    {lines.map((ln, idx) => {
                        const lineNo = startLineNumber + idx;
                        const hl = hlSet.has(lineNo);
                        return (
                            <div
                                key={`l${idx}`}
                                className={["rt-cb__line", hl ? "rt-cb__line--hl" : ""].filter(Boolean).join(" ")}
                            >
                                {ln || "\u200b"}
                            </div>
                        );
                    })}
                </code>
            </div>
        ) : (
            <code className={`rt-cb__code language-${language}`}>
                {code}
            </code>
        )}
      </pre>
        </div>
    );
}
