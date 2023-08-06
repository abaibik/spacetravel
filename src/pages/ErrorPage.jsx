import "./errorPage.css";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Circle from "./Circle";

const animation = gsap.timeline({
  paused: false,
  repeat: 99,
});

export function ErrorPage() {
  const timeline = useRef(animation);
  const errorPage = useRef(null);
  const circle = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current.to(".circle", {
        x: "random(-200, 200, 5)",
        y: "random(-80, 100, 5)",
        duration: 1,
        ease: "back",
        repeat: -1,
        repeatRefresh: true,
      });
    }, errorPage.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={errorPage} className="container">
      <Circle ref={circle} />
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
}
