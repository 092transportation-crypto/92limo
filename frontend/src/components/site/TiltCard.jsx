import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

// Subtle 3D hover tilt with a gold glare that follows the cursor.
// Mouse/trackpad only: touch devices and prefers-reduced-motion get a plain card.
// Writes CSS variables via requestAnimationFrame, so React never re-renders on move.
const MAX_TILT = 6; // degrees

export const TiltCard = forwardRef(function TiltCard({ className = "", children, ...rest }, forwardedRef) {
  const innerRef = useRef(null);
  const frame = useRef(0);
  const [enabled, setEnabled] = useState(false);

  const setRefs = useCallback(
    (node) => {
      innerRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener?.("change", update);
    reduce.addEventListener?.("change", update);
    return () => {
      fine.removeEventListener?.("change", update);
      reduce.removeEventListener?.("change", update);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const onPointerMove = (e) => {
    if (!enabled || e.pointerType !== "mouse") return;
    const el = innerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--tilt-y", `${((x - 0.5) * 2 * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty("--tilt-x", `${((0.5 - y) * 2 * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty("--tilt-lift", "-6px");
      el.style.setProperty("--glare-x", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-y", `${(y * 100).toFixed(1)}%`);
      el.classList.add("is-tilting");
    });
  };

  const onPointerLeave = () => {
    const el = innerRef.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.classList.remove("is-tilting");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-lift", "0px");
  };

  return (
    <div
      ref={setRefs}
      className={`${enabled ? "tilt-card " : ""}relative ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...rest}
    >
      {children}
      {enabled && <span aria-hidden="true" className="tilt-glare pointer-events-none absolute inset-0 z-10 rounded-[inherit]" />}
    </div>
  );
});
