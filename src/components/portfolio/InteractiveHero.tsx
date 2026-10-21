import {
  useRef,
  useState,
  useEffect,
  type CSSProperties,
  type PointerEvent,
} from "react";

const cursors = [
  { label: "Backend Development", color: "#20bd83", x: 17, y: 9 },
  { label: "AI-Powered Applications", color: "#ed43c8", x: 32, y: 17 },
  { label: "Full-Stack Engineering", color: "#08b7c9", x: 11, y: 82 },
  { label: "Android App Development", color: "#168cff", x: 64, y: 67 },
  { label: "Researcher", color: "#7770f8", x: 2, y: 59 },
  { label: "Software Engineer", color: "#f4b400", x: 39, y: 92 },
  { label: "API Design & Integration", color: "#ff6547", x: 91, y: 55 },
];

const routes: number[][][] = [
  [[17, 9], [65, 14], [76, 52], [39, 76], [8, 42], [48, 20]],
  [[32, 17], [12, 38], [44, 58], [79, 28], [60, 78], [23, 65]],
  [[11, 82], [30, 61], [71, 75], [84, 35], [51, 17], [18, 47]],
  [[64, 67], [82, 43], [53, 22], [15, 28], [37, 73], [76, 82]],
  [[2, 59], [27, 32], [58, 48], [89, 20], [70, 72], [32, 86]],
  [[39, 92], [16, 70], [42, 39], [74, 57], [88, 32], [49, 12]],
  [[91, 55], [69, 31], [38, 18], [12, 53], [45, 81], [81, 66]],
];

const handles = [
  ["top-left", "nwse-resize"],
  ["top", "ns-resize"],
  ["top-right", "nesw-resize"],
  ["right", "ew-resize"],
  ["bottom-right", "nwse-resize"],
  ["bottom", "ns-resize"],
  ["bottom-left", "nesw-resize"],
  ["left", "ew-resize"],
] as const;

type Point = { x: number; y: number };

const MOVE_DURATION = 4200;
const PAUSE_DURATION = 1700;
const LEG_DURATION = MOVE_DURATION + PAUSE_DURATION;
const GROUP_SIZE = 3;
const GROUP_STAGGER = 6500;
const ROUTE_DURATION = LEG_DURATION * 6;

export default function InteractiveHero() {
  const canvas = useRef<HTMLElement>(null);
  const cursorRefs = useRef<(HTMLDivElement | null)[]>([]);

  const drag = useRef<{
    px: number;
    py: number;
    x: number;
    y: number;
  } | null>(null);

  const resize = useRef<{
    px: number;
    width: number;
    handle: string;
  } | null>(null);

  const [position, setPosition] = useState<Point>({
    x: 50,
    y: 47,
  });

  const [width, setWidth] = useState(60);

  useEffect(() => {
    const section = canvas.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotion.matches) return;

    let frame = 0;
    let startTime: number | null = null;
    let lastFrame = 0;
    let sectionWidth = section.clientWidth;
    let sectionHeight = section.clientHeight;

    const resizeObserver = new ResizeObserver(() => {
      sectionWidth = section.clientWidth;
      sectionHeight = section.clientHeight;
    });

    resizeObserver.observe(section);

    const ease = (t: number) => t * t * (3 - 2 * t);

    const setCursorPosition = (
      element: HTMLDivElement,
      x: number,
      y: number,
    ) => {
      element.style.transform =
        `translate3d(${(x / 100) * sectionWidth}px, ` +
        `${(y / 100) * sectionHeight}px, 0)`;
    };

    cursors.forEach((cursor, index) => {
      const element = cursorRefs.current[index];
      if (!element) return;

      element.style.left = "0";
      element.style.top = "0";

      setCursorPosition(element, cursor.x, cursor.y);
    });

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      if (time - lastFrame >= 24) {
        lastFrame = time;
        const elapsed = time - startTime;

        routes.forEach((route, index) => {
          const element = cursorRefs.current[index];
          if (!element) return;

          const group = Math.floor(index / GROUP_SIZE);
          const groupStart = group * GROUP_STAGGER;
          const activeTime = elapsed - groupStart;

          if (activeTime < 0) return;

          const routeTime = activeTime % ROUTE_DURATION;
          const segment = Math.floor(routeTime / LEG_DURATION);
          const timeInLeg = routeTime % LEG_DURATION;

          const [x1, y1] = route[segment];
          const [x2, y2] = route[(segment + 1) % route.length];

          const progress =
            timeInLeg >= MOVE_DURATION
              ? 1
              : ease(timeInLeg / MOVE_DURATION);

          const x = x1 + (x2 - x1) * progress;
          const y = y1 + (y2 - y1) * progress;

          setCursorPosition(element, x, y);
        });
      }

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  function startDrag(e: PointerEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest(".ih-handle")) return;

    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    drag.current = {
      px: e.clientX,
      py: e.clientY,
      x: position.x,
      y: position.y,
    };
  }

  function move(e: PointerEvent<HTMLElement>) {
    if (!canvas.current) return;

    const bounds = canvas.current.getBoundingClientRect();

    if (drag.current) {
      const dx =
        ((e.clientX - drag.current.px) / bounds.width) * 100;

      const dy =
        ((e.clientY - drag.current.py) / bounds.height) * 100;

      setPosition({
        x: Math.max(8, Math.min(92, drag.current.x + dx)),
        y: Math.max(18, Math.min(82, drag.current.y + dy)),
      });
    }

    if (resize.current) {
      const dx =
        ((e.clientX - resize.current.px) / bounds.width) * 100;

      const direction = resize.current.handle.includes("left")
        ? -1
        : resize.current.handle.includes("right")
          ? 1
          : 0;

      if (direction !== 0) {
        setWidth(
          Math.max(
            35,
            Math.min(96, resize.current.width + dx * direction),
          ),
        );
      }
    }
  }

  function endPointer(e: PointerEvent<HTMLElement>) {
    drag.current = null;
    resize.current = null;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  function startResize(
    e: PointerEvent<HTMLButtonElement>,
    handle: string,
  ) {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    resize.current = {
      px: e.clientX,
      width,
      handle,
    };
  }

  const selectionStyle = {
    left: `${position.x}%`,
    top: `${position.y}%`,
    width: `${width}%`,
  } satisfies CSSProperties;

  return (
    <section

        onPointerMove={(e) => {
  const bounds = e.currentTarget.getBoundingClientRect();

  e.currentTarget.style.setProperty(
    "--grid-hover-x",
    `${e.clientX - bounds.left}px`,
  );

  e.currentTarget.style.setProperty(
    "--grid-hover-y",
    `${e.clientY - bounds.top}px`,
  );
}}
      ref={canvas}
      className="interactive-hero"
      id="home"
      aria-label="Dinah Khan portfolio introduction"
    >
      <div className="ih-grid" aria-hidden="true" />
      

      <div
        className="ih-selection"
        style={selectionStyle}
        onPointerDown={startDrag}
        onPointerMove={move}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        role="group"
        aria-label="Movable headline. Use arrow keys to reposition."
        tabIndex={0}
        onKeyDown={(e) => {
          const step = e.shiftKey ? 5 : 1;

          if (e.key === "ArrowLeft") {
            setPosition((p) => ({
              ...p,
              x: Math.max(8, p.x - step),
            }));
          }

          if (e.key === "ArrowRight") {
            setPosition((p) => ({
              ...p,
              x: Math.min(92, p.x + step),
            }));
          }

          if (e.key === "ArrowUp") {
            setPosition((p) => ({
              ...p,
              y: Math.max(18, p.y - step),
            }));
          }

          if (e.key === "ArrowDown") {
            setPosition((p) => ({
              ...p,
              y: Math.min(82, p.y + step),
            }));
          }
        }}
      >
        <h1 className="ih-headline">
          Dinah Khan<span>.</span>
        </h1>

        {handles.map(([handle, cursor]) => (
          <button
            key={handle}
            type="button"
            className={`ih-handle ih-handle--${handle}`}
            style={{ cursor }}
            aria-label={`Resize headline ${handle}`}
            onPointerDown={(e) => startResize(e, handle)}
            onPointerMove={move}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
          />
        ))}
      </div>

      {cursors.map((item, index) => (
        <div
          key={item.label}
          ref={(element) => {
            cursorRefs.current[index] = element;
          }}
          className="ih-cursor"
          style={
            {
              left: 0,
              top: 0,
              "--cursor-color": item.color,
              willChange: "transform",
            } as CSSProperties
          }
          aria-hidden="true"
        >

            
          <svg viewBox="0 0 20 24" width="17" height="20">
            <path
              d="M2 1.5 17.5 13l-6.1 1.3-3.2 6.1L2 1.5Z"
              fill={item.color}
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span>{item.label}</span>
        </div>
        
      ))}
    </section>
  );
}