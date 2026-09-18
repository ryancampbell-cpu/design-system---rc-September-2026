/* @ds-bundle: {"format":4,"namespace":"HumanaQBRDesignGuide_4ec619","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Quote","sourcePath":"components/data-display/Quote.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Colors","sourcePath":"ui_kits/brand-hub/Colors.jsx"},{"name":"Hero","sourcePath":"ui_kits/brand-hub/Hero.jsx"},{"name":"Logos","sourcePath":"ui_kits/brand-hub/Logos.jsx"},{"name":"VisualIdentity","sourcePath":"ui_kits/brand-hub/VisualIdentity.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ed2055ef8ecc","components/data-display/Badge.jsx":"f67c74a2dd6d","components/data-display/Card.jsx":"79b645271561","components/data-display/Quote.jsx":"bb86604f6ed2","components/data-display/Tag.jsx":"40c0b9810418","components/forms/Checkbox.jsx":"c72164f6b435","components/forms/Input.jsx":"883e4754735f","components/forms/Radio.jsx":"69802e440516","components/forms/Select.jsx":"2aea0bcff848","components/icons/Icon.jsx":"10018fc266f6","components/navigation/Tabs.jsx":"771937757088","ui_kits/brand-hub/Colors.jsx":"898dd1ff2d1c","ui_kits/brand-hub/Hero.jsx":"317a52685b6a","ui_kits/brand-hub/Logos.jsx":"1e6380cd6f0a","ui_kits/brand-hub/VisualIdentity.jsx":"12140c39b850"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HumanaQBRDesignGuide_4ec619 = window.HumanaQBRDesignGuide_4ec619 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * H1 Button — editorial, sharp-cornered, 1px border. Variants: primary (solid
 * ink), secondary (outline), tertiary (inline text link). `invert` flips
 * colors for use on saturated brand fields.
 */
function Button({
  variant = "primary",
  size = "medium",
  invert = false,
  disabled = false,
  icon = null,
  iconPosition = "right",
  as,
  href,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const pad = size === "small" ? "0.5rem 1.25rem" : variant === "tertiary" ? "0.5rem 0" : "0.75rem 1.5rem";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontSize: size === "small" ? "var(--text-sm)" : "var(--text-base)",
    fontWeight: 400,
    lineHeight: 1,
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "var(--radius-none)",
    border: "1px solid transparent",
    padding: pad,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "opacity var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard)",
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  };
  const variants = {
    primary: invert ? {
      background: "var(--color-white)",
      color: "var(--color-black)",
      borderColor: "var(--color-white)"
    } : {
      background: "var(--color-black)",
      color: "var(--color-white)",
      borderColor: "var(--color-black)"
    },
    secondary: invert ? {
      background: "transparent",
      color: "var(--color-white)",
      borderColor: "var(--color-white)"
    } : {
      background: "transparent",
      color: "var(--color-black)",
      borderColor: "var(--color-black)"
    },
    tertiary: {
      background: "transparent",
      color: invert ? "var(--color-white)" : "var(--text-link)",
      borderColor: "transparent",
      padding: pad
    }
  };
  const styles = {
    ...base,
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.opacity = "0.8";
  };
  const onLeave = e => {
    if (!disabled) e.currentTarget.style.opacity = "1";
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    type: Tag === "button" ? type : undefined,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    style: styles,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }), icon && iconPosition === "left" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon), children, icon && iconPosition === "right" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  sapphire: {
    solid: ["var(--color-sapphire)", "#fff"],
    soft: ["var(--color-blue-50)", "var(--color-blue-900)"],
    outline: ["transparent", "var(--color-sapphire)"]
  },
  plum: {
    solid: ["var(--color-plum)", "#fff"],
    soft: ["var(--color-plum-50)", "var(--color-plum-900)"],
    outline: ["transparent", "var(--color-plum)"]
  },
  neutral: {
    solid: ["var(--color-neutral-900)", "#fff"],
    soft: ["var(--color-neutral-100)", "var(--color-neutral-900)"],
    outline: ["transparent", "var(--color-neutral-900)"]
  }
};

/**
 * H1 Badge — compact caps-tracked status label. Tones follow the brand ramps;
 * `solid` fills, `soft` tints, `outline` uses a hairline border.
 */
function Badge({
  tone = "sapphire",
  variant = "soft",
  children,
  style,
  ...rest
}) {
  const [bg, fg] = (tones[tone] || tones.sapphire)[variant];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      padding: "0.25rem 0.625rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      lineHeight: 1.4,
      color: fg,
      background: bg,
      border: variant === "outline" ? `1px solid ${fg}` : "1px solid transparent",
      borderRadius: "var(--radius-none)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * H1 Card — flat editorial container. White surface, 1px silver border, sharp
 * corners, no shadow. Optional media tile uses the brand's photography radius.
 */
function Card({
  variant = "outline",
  media,
  mediaAlt = "",
  eyebrow,
  title,
  children,
  footer,
  href,
  onClick,
  padding = "var(--space-small)",
  style,
  ...rest
}) {
  const Tag = href ? "a" : "div";
  const surfaces = {
    outline: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      color: "var(--text-body)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid var(--surface-subtle)",
      color: "var(--text-body)"
    },
    invert: {
      background: "var(--surface-invert)",
      border: "1px solid var(--surface-invert)",
      color: "var(--text-inverse)"
    }
  };
  const clickable = !!(href || onClick);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--radius-none)",
      overflow: "hidden",
      textDecoration: "none",
      transition: "opacity var(--duration-base) var(--ease-standard)",
      cursor: clickable ? "pointer" : "default",
      ...surfaces[variant],
      ...style
    },
    onMouseEnter: clickable ? e => e.currentTarget.style.opacity = "0.85" : undefined,
    onMouseLeave: clickable ? e => e.currentTarget.style.opacity = "1" : undefined
  }), media && /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: mediaAlt,
    style: {
      width: "100%",
      display: "block",
      borderRadius: "var(--radius-photo)",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      padding
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: variant === "invert" ? "var(--color-blue-200)" : "var(--color-sapphire)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      fontWeight: 400,
      color: variant === "invert" ? "var(--color-white)" : "var(--text-heading)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)",
      color: variant === "invert" ? "rgba(255,255,255,0.85)" : "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.5rem"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * H1 Quote — editorial pull quote. Serif GT Sectra italic with a thick left rule.
 */
function Quote({
  children,
  cite,
  author,
  accent = "ink",
  style,
  ...rest
}) {
  const ruleColor = accent === "sapphire" ? "var(--color-sapphire)" : accent === "plum" ? "var(--color-plum)" : "var(--color-black)";
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      borderLeft: `3px solid ${ruleColor}`,
      padding: "0.75rem 1.25rem",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "var(--text-h4)",
      lineHeight: 1.5,
      color: "var(--text-heading)"
    }
  }, children), (author || cite) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "0.75rem",
      paddingLeft: "1.25rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, author), author && cite && " · ", cite));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Quote.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * H1 Tag — rounded category chip, optionally removable. Softer than Badge;
 * uses the pill radius and neutral or sapphire tinting.
 */
function Tag({
  tone = "neutral",
  onRemove,
  children,
  style,
  ...rest
}) {
  const palette = tone === "sapphire" ? {
    bg: "var(--color-blue-50)",
    fg: "var(--color-blue-900)",
    br: "var(--color-blue-200)"
  } : {
    bg: "var(--color-white)",
    fg: "var(--text-body)",
    br: "var(--border-default)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      padding: "0.3125rem 0.75rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.2,
      color: palette.fg,
      background: palette.bg,
      border: `1px solid ${palette.br}`,
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1rem",
      height: "1rem",
      padding: 0,
      border: "none",
      background: "transparent",
      color: "currentColor",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** H1 checkbox — sharp 1.125rem box, 1px ink border, fills solid ink when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  ...rest
}) {
  const inputId = id || (label ? `cb-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: inputId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.125rem",
      height: "1.125rem",
      border: "1px solid var(--color-black)",
      borderRadius: "var(--radius-none)",
      background: on ? "var(--color-black)" : "var(--color-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-white)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const fieldLabel = {
  display: "block",
  marginBottom: "0.5rem",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-base)",
  fontWeight: 400,
  color: "var(--text-strong)"
};
const hintStyle = {
  marginTop: "0.375rem",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  color: "var(--text-muted)"
};
const errorStyle = {
  marginTop: "0.375rem",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  color: "var(--color-plum)"
};

/** H1 text input — sharp corners, 1px ink border, sans-serif UI type. */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: fieldLabel
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "2.75rem",
      padding: "0.5rem 0.75rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: 1.6,
      color: "var(--text-strong)",
      background: disabled ? "var(--color-neutral-100)" : "var(--color-white)",
      border: `1px solid ${error ? "var(--color-plum)" : "var(--color-black)"}`,
      borderRadius: "var(--radius-none)",
      outline: "none",
      boxShadow: focus ? "0 0 0 2px var(--color-blue-200)" : "none",
      boxSizing: "border-box",
      ...style
    }
  })), error ? /*#__PURE__*/React.createElement("div", {
    style: errorStyle
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: hintStyle
  }, hint) : null);
}

/** H1 textarea — matches Input, taller default. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 5,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: fieldLabel
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "11.25rem",
      padding: "0.75rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: 1.6,
      color: "var(--text-strong)",
      background: disabled ? "var(--color-neutral-100)" : "var(--color-white)",
      border: `1px solid ${error ? "var(--color-plum)" : "var(--color-black)"}`,
      borderRadius: "var(--radius-none)",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "0 0 0 2px var(--color-blue-200)" : "none",
      boxSizing: "border-box",
      ...style
    }
  })), error ? /*#__PURE__*/React.createElement("div", {
    style: errorStyle
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: hintStyle
  }, hint) : null);
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * H1 radio — 1.125rem round control; selection is a thick ink ring (6px border)
 * around a white center, matching the brand hub.
 */
function Radio({
  label,
  checked,
  name,
  value,
  onChange,
  disabled,
  id,
  ...rest
}) {
  const inputId = id || (value ? `rd-${String(value).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1.125rem",
      height: "1.125rem",
      borderRadius: "var(--radius-pill)",
      background: "var(--color-white)",
      border: checked ? "6px solid var(--color-black)" : "1px solid var(--color-black)",
      boxSizing: "border-box",
      transition: "border-width var(--duration-fast) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** H1 select — native select styled to match the input system. */
function Select({
  label,
  hint,
  error,
  id,
  children,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      marginBottom: "0.5rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "2.75rem",
      padding: "0.5rem 2.25rem 0.5rem 0.75rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: disabled ? "var(--color-neutral-100)" : "var(--color-white)",
      border: `1px solid ${error ? "var(--color-plum)" : "var(--color-black)"}`,
      borderRadius: "var(--radius-none)",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      boxShadow: focus ? "0 0 0 2px var(--color-blue-200)" : "none",
      boxSizing: "border-box",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }), children), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.375rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--color-plum)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.375rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * H1 Icon — renders a glyph from the H1 secondary icon set by CSS-masking a
 * PNG. Icons inherit color from any brand token (currentColor by default).
 * `basePath` points at the folder of PNG glyphs relative to the page.
 *
 * NOTE: The commercial H1 icon PNGs are not shipped in this open kit. Drop
 * your `name`.png files into `assets/icons/` or override `basePath`.
 */
function Icon({
  name,
  size = 24,
  color = "currentColor",
  basePath = "assets/icons/",
  title,
  style,
  ...rest
}) {
  const url = `${basePath}${name}.png`;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    role: "img",
    "aria-label": title || name,
    title: title,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "none",
      backgroundColor: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * H1 Tabs — underline tab bar: muted labels, 2px ink underline on the active
 * tab, horizontal scroll when crowded.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.id);
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  const activeItem = items.find(t => t.id === active);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: style
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      overflowX: "auto"
    }
  }, items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => select(t.id),
      style: {
        flex: "none",
        padding: "0.5rem 0",
        background: "transparent",
        border: "none",
        borderBottom: `2px solid ${on ? "var(--color-black)" : "transparent"}`,
        marginBottom: "-1px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        color: on ? "var(--color-black)" : "rgba(0,0,0,0.55)",
        cursor: "pointer",
        transition: "color var(--duration-base) var(--ease-standard)",
        whiteSpace: "nowrap"
      }
    }, t.label);
  })), activeItem?.content !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-small)"
    }
  }, activeItem.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-hub/Colors.jsx
try { (() => {
const {
  useState
} = React;
/** Colors section — click a swatch to copy its hex. */
function Colors() {
  const [copied, setCopied] = useState(null);
  const copy = hex => {
    if (navigator.clipboard) navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1200);
  };
  const core = [{
    name: "Sapphire",
    hex: "#064997",
    rgb: "6, 73, 151"
  }, {
    name: "Plum",
    hex: "#8F1752",
    rgb: "143, 23, 82"
  }, {
    name: "Medium Gray",
    hex: "#636D7B",
    rgb: "99, 109, 123"
  }];
  const blue = ["#003B80", "#175CAD", "#3B77BE", "#6E9CD0", "#A7C7EC", "#C4DBF5", "#D9EBFE", "#EFF6FF"];
  const plum = ["#7C003D", "#9B255F", "#B14179", "#D67DA8", "#E7A0C3", "#F0C8DC", "#F9DDE9", "#FFF2F9"];
  const Ramp = ({
    list
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, list.map(hex => /*#__PURE__*/React.createElement("button", {
    key: hex,
    onClick: () => copy(hex),
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: "0 0 8px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, copied === hex ? "Copied!" : `HEX: ${hex}`), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "50%",
      minHeight: "2.5rem",
      background: hex
    }
  }))));
  return /*#__PURE__*/React.createElement("section", {
    id: "colors",
    style: {
      padding: "5rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 3.75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "3px solid var(--color-neutral-900)",
      paddingBottom: "1rem",
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Colors")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1.25rem",
      marginBottom: "2rem"
    }
  }, core.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    onClick: () => copy(c.hex),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "11.25rem",
      background: c.hex
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "1rem 0 .5rem"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-muted)",
      lineHeight: 1.5
    }
  }, copied === c.hex ? "Copied!" : /*#__PURE__*/React.createElement(React.Fragment, null, "HEX: ", c.hex, /*#__PURE__*/React.createElement("br", null), "RGB: ", c.rgb))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement(Ramp, {
    list: blue
  }), /*#__PURE__*/React.createElement(Ramp, {
    list: plum
  }))));
}
Object.assign(__ds_scope, { Colors });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-hub/Colors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-hub/Hero.jsx
try { (() => {
/** H1 Brand Hub — hero. Sapphire full-bleed, white logo, overlay photograph. */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      background: "var(--color-sapphire)",
      minHeight: 600,
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-brand-photo.webp",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      mixBlendMode: "overlay"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: "80rem",
      width: "100%",
      margin: "0 auto",
      padding: "0 3.75rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    alt: "H1",
    style: {
      height: 84,
      marginBottom: "3rem"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "28.5rem",
      marginBottom: "1.875rem"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      margin: 0,
      fontSize: "3.875rem",
      lineHeight: "4.5625rem",
      fontFamily: "var(--font-display)",
      fontWeight: 400
    }
  }, "Welcome to the H1 Brand Hub")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "27.875rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: "1.25rem",
      margin: 0
    }
  }, "This site serves as a resource to help you navigate H1 brand standards and expectations as we become a more unified organization."))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-hub/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-hub/Logos.jsx
try { (() => {
/** Three logo lockups with faux download links, from the brand hub source. */
function Logos() {
  const cards = [{
    name: "Sapphire",
    src: "../../assets/logo-sapphire.svg",
    bg: "#fff",
    border: true
  }, {
    name: "White",
    src: "../../assets/logo-white.svg",
    bg: "var(--color-sapphire)",
    border: false
  }, {
    name: "Grayscale",
    src: "../../assets/logo-grayscale.svg",
    bg: "#fff",
    border: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "logos",
    style: {
      padding: "5rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 3.75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "3px solid var(--color-neutral-900)",
      paddingBottom: "1rem",
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Logos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1.25rem"
    }
  }, cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "13.875rem",
      padding: "0 3.5rem",
      background: c.bg,
      border: c.border ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.src,
    alt: `H1 logo — ${c.name}`,
    style: {
      maxHeight: "4.6875rem"
    }
  })), /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: "1.5rem 0 1rem"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "2rem"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tertiary",
    size: "small",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Download PNG"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tertiary",
    size: "small",
    href: "#",
    onClick: e => e.preventDefault()
  }, "Download SVG")))))));
}
Object.assign(__ds_scope, { Logos });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-hub/Logos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-hub/VisualIdentity.jsx
try { (() => {
/** Bordered 3-column identity grid — sapphire labels absolutely positioned. */
function VisualIdentity({
  onJump
}) {
  const S = "var(--color-sapphire)";
  const items = [{
    label: "Logos",
    target: "logos",
    render: () => /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-sapphire.svg",
      alt: "",
      style: {
        maxHeight: 64
      }
    })
  }, {
    label: "Color & Typography",
    target: "colors",
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, ["#064997", "#8f1752", "#636d7b", "#a7c7ec"].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 26,
        height: 26,
        background: c
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        color: "var(--color-neutral-900)"
      }
    }, "Aa"))
  }, {
    label: "Photography",
    target: "photography",
    render: () => /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hero-brand-photo.webp",
      alt: "",
      style: {
        maxWidth: "100%",
        maxHeight: 110,
        borderRadius: 12,
        objectFit: "cover"
      }
    })
  }, {
    label: "Illustration",
    target: "illustration",
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/illus-eye.png",
      alt: "",
      style: {
        maxHeight: 96
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/illus-uncover.png",
      alt: "",
      style: {
        maxHeight: 96
      }
    }))
  }, {
    label: "Components",
    target: "components",
    render: () => /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        color: "var(--color-neutral-900)"
      }
    }, "Buttons \xB7 Cards")
  }, {
    label: "Tokens",
    target: "tokens",
    render: () => /*#__PURE__*/React.createElement("code", {
      style: {
        fontFamily: "ui-monospace, Menlo, monospace",
        fontSize: 13,
        color: "var(--color-neutral-900)",
        textAlign: "center",
        lineHeight: 1.6
      }
    }, "--color-sapphire", /*#__PURE__*/React.createElement("br", null), "--font-display", /*#__PURE__*/React.createElement("br", null), "--space-medium")
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "5rem 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 3.75rem"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: "3rem"
    }
  }, "Visual Identity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      border: `2px solid ${S}`,
      borderRight: "none",
      borderBottom: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      padding: "2.5rem 2rem",
      borderRight: `2px solid ${S}`,
      borderBottom: `2px solid ${S}`
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: S,
      margin: 0,
      maxWidth: "22rem"
    }
  }, "Brand elements that define the H1 visual identity")), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.label,
    onClick: () => onJump && onJump(it.target),
    style: {
      position: "relative",
      minHeight: 200,
      border: "none",
      borderRight: `2px solid ${S}`,
      borderBottom: `2px solid ${S}`,
      background: "transparent",
      cursor: "pointer",
      padding: "4rem 2rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .25s"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--color-blue-50)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      position: "absolute",
      top: "1.5rem",
      left: "2rem",
      margin: 0,
      color: S
    }
  }, it.label), it.render())))));
}
Object.assign(__ds_scope, { VisualIdentity });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-hub/VisualIdentity.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Colors = __ds_scope.Colors;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Logos = __ds_scope.Logos;

__ds_ns.VisualIdentity = __ds_scope.VisualIdentity;

})();
