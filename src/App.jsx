import voltNoir from "./assets/volt-noir.png";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Circle,
  Clock3,
  Droplets,
  FlaskConical,
  Gauge,
  Menu,
  MousePointer2,
  MoveUpRight,
  Package,
  Plus,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import voltNoir from "./assets/volt-noir.png";

/* =========================================================
   VOLT NOIR
   Premium fictional product landing page
   Portfolio concept — no real checkout
========================================================= */

/* =========================================================
   DATA
========================================================= */

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    number: "01",
    eyebrow: "FLAVOR",
    title: "BLACK CITRUS",
    description:
      "A fictional flavor direction built around bright citrus notes, dark character and a sharp premium finish.",
    icon: Sparkles,
  },
  {
    number: "02",
    eyebrow: "IDENTITY",
    title: "BOLD BY DESIGN",
    description:
      "A visual language built with contrast, oversized type, controlled motion and almost no unnecessary noise.",
    icon: MousePointer2,
  },
  {
    number: "03",
    eyebrow: "ENERGY",
    title: "ZERO NOISE",
    description:
      "Every section has one job: communicate the product clearly while making the experience feel unforgettable.",
    icon: Zap,
  },
];

const ingredients = [
  {
    title: "Carbonated Water",
    description: "Base liquid concept.",
    icon: Droplets,
  },
  {
    title: "Citrus Flavor",
    description: "Signature flavor direction.",
    icon: Sparkles,
  },
  {
    title: "Caffeine",
    description: "Illustrative concept ingredient.",
    icon: Zap,
  },
  {
    title: "B-Vitamins",
    description: "Illustrative formulation detail.",
    icon: FlaskConical,
  },
  {
    title: "Citric Acid",
    description: "Fictional formulation detail.",
    icon: Circle,
  },
  {
    title: "Natural Flavoring",
    description: "Conceptual flavor component.",
    icon: Sparkles,
  },
];

const specs = [
  {
    value: "330",
    suffix: "ML",
    label: "CAN SIZE",
    icon: Package,
  },
  {
    value: "01",
    suffix: "",
    label: "SIGNATURE FLAVOR",
    icon: Sparkles,
  },
  {
    value: "BLACK",
    suffix: "",
    label: "VISUAL IDENTITY",
    icon: Circle,
  },
  {
    value: "2026",
    suffix: "",
    label: "CONCEPT EDITION",
    icon: Gauge,
  },
];

const faqs = [
  {
    question: "What is VOLT NOIR?",
    answer:
      "VOLT NOIR is a fictional premium energy drink concept created as a portfolio landing-page project. The entire product identity, packaging direction and interaction design are conceptual.",
  },
  {
    question: "What is Black Citrus?",
    answer:
      "Black Citrus is the fictional signature flavor direction used for the concept. It combines the visual idea of bright citrus with a darker, sharper brand personality.",
  },
  {
    question: "Can I actually purchase VOLT NOIR?",
    answer:
      "No. This website is a portfolio demonstration and does not represent a real product or real checkout experience.",
  },
  {
    question: "Are the ingredients and specifications real?",
    answer:
      "No. The displayed ingredients, specifications and product details are illustrative design content only and should not be treated as real nutritional or product information.",
  },
  {
    question: "Why is the design so minimal?",
    answer:
      "The concept is built around the idea of removing visual noise. Large typography, negative space, product photography and controlled motion carry most of the experience.",
  },
];

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? "bg-black/30" : "bg-red-500/70"
        }`}
      />

      <span
        className={`text-[10px] font-bold uppercase tracking-[0.34em] ${
          light ? "text-black/50" : "text-white/35"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function SectionNumber({ children }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.3em] text-white/20">
      {children}
    </span>
  );
}

/* =========================================================
   STEP 1 — PREMIUM CURSOR
========================================================= */

function PremiumCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const ring = useRef({
    x: 0,
    y: 0,
  });

  const glow = useRef({
    x: 0,
    y: 0,
  });

  const frame = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouchDevice) return;

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${event.clientX - 3}px, ${event.clientY - 3}px, 0)`;
      }
    };

    const animate = () => {
      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.16;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.16;

      glow.current.x +=
        (mouse.current.x - glow.current.x) * 0.08;

      glow.current.y +=
        (mouse.current.y - glow.current.y) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate3d(${glow.current.x - 64}px, ${glow.current.y - 64}px, 0)`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-32 w-32 rounded-full bg-red-500/10 blur-3xl will-change-transform"
      />

      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-white/30 will-change-transform"
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-red-500 will-change-transform"
      />
    </>
  );
}

function MagneticButton({
  children,
  href,
  onClick,
  variant = "white",
  className = "",
}) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300";

  const styles =
    variant === "white"
      ? "bg-white text-black hover:scale-[1.04] hover:bg-white/90"
      : variant === "outline"
      ? "border border-white/15 bg-white/[0.02] text-white hover:border-white/30 hover:bg-white/[0.06]"
      : "bg-red-500 text-white hover:scale-[1.04] hover:bg-red-400";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeIngredient, setActiveIngredient] = useState(0);

  const [buyNowOpen, setBuyNowOpen] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroProductY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, 180]
  );

  const heroProductRotate = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, -8]
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openCheckout = () => {
    setOrderDone(false);
    setQuantity(1);
    setBuyNowOpen(true);
    setMenuOpen(false);
  };

  return (
    <>
      <PremiumCursor />

      <main
        id="top"
        className="min-h-screen overflow-x-hidden bg-[#030303] text-white selection:bg-red-500 selection:text-white"
      >
        {/* =====================================================
            GLOBAL PROGRESS
        ===================================================== */}

        <motion.div
          style={{
            scaleX: progressScale,
            transformOrigin: "left",
          }}
          className="fixed left-0 top-0 z-[100] h-[2px] w-full bg-red-500"
        />

        {/* =====================================================
            GLOBAL BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-red-950/20 blur-[160px]" />

          <div className="absolute right-[-15%] top-[35%] h-[500px] w-[500px] rounded-full bg-red-950/10 blur-[180px]" />

          <div className="absolute bottom-[-20%] left-[30%] h-[600px] w-[600px] rounded-full bg-red-950/10 blur-[200px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <header className="fixed left-0 top-0 z-50 w-full">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />

          <nav className="relative mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
            <a
              href="#top"
              onClick={closeMenu}
              className="group relative z-10 flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04]">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
              </span>

              <span className="text-sm font-black tracking-[0.3em]">
                VOLT
                <span className="text-white/35">NOIR</span>
              </span>
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-2xl md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-xs font-medium text-white/45 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <button
                type="button"
                onClick={openCheckout}
                className="ml-1 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition hover:scale-105"
              >
                Buy Now
              </button>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl md:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </nav>

          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              className="relative mx-4 overflow-hidden rounded-3xl border border-white/10 bg-[#080808]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 text-sm text-white/60 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}

                  <ArrowRight size={15} />
                </motion.a>
              ))}

              <button
                type="button"
                onClick={openCheckout}
                className="mt-2 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black"
              >
                Buy Now
              </button>
            </motion.div>
          )}
        </header>

        {/* =====================================================
            ADVANCED HERO — STEP 2
        ===================================================== */}

        <section
          id="hero"
          className="relative z-10 min-h-screen scroll-mt-24 overflow-hidden px-5 pt-20 sm:px-8 lg:px-12"
        >
          {/* HERO ATMOSPHERE */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[55%] top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.08] blur-[140px]"
            />

            <motion.div
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-10%] top-[15%] h-[350px] w-[350px] rounded-full bg-red-500/[0.05] blur-[120px]"
            />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "90px 90px",
              }}
            />

            <div className="absolute left-[50%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1500px] items-center">
            <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-20">
              {/* HERO COPY */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -70,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-20"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.7,
                  }}
                  className="mb-8 flex flex-wrap items-center gap-3"
                >
                  <Eyebrow>Black Citrus / 330 ML</Eyebrow>

                  <span className="hidden h-4 w-px bg-white/10 sm:block" />

                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white/35 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.9)]" />
                    Concept 001
                  </span>
                </motion.div>

                <div className="relative">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="max-w-6xl text-[4rem] font-black leading-[0.76] tracking-[-0.08em] sm:text-[6.5rem] md:text-[8rem] lg:text-[8.4rem] xl:text-[9.5rem]"
                  >
                    ENERGY.
                    <br />

                    <span className="relative text-white/[0.11]">
                      WITHOUT
                    </span>

                    <br />

                    <span className="relative">
                      THE{" "}
                      <span className="relative text-red-500">
                        NOISE.

                        <motion.span
                          initial={{
                            scaleX: 0,
                          }}
                          animate={{
                            scaleX: 1,
                          }}
                          transition={{
                            delay: 1,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-red-500 sm:-bottom-3"
                        />
                      </span>
                    </span>
                  </motion.h1>

                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.8,
                      duration: 1.5,
                    }}
                    className="pointer-events-none absolute -left-3 top-[35%] -z-10 hidden select-none text-[13rem] font-black leading-none tracking-[-0.09em] text-white/[0.018] xl:block"
                  >
                    NOIR
                  </motion.span>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-10 flex max-w-xl gap-5"
                >
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: 48,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.6,
                    }}
                    className="mt-1 w-[2px] shrink-0 bg-red-500"
                  />

                  <p className="text-sm leading-7 text-white/45 sm:text-base">
                    A fictional premium energy drink concept
                    engineered around dark citrus, bold typography
                    and a brutally focused visual identity.
                  </p>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                  }}
                  className="mt-10 flex flex-wrap gap-3"
                >
                  <MagneticButton href="#buy">
                    Enter the experience

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </MagneticButton>

                  <MagneticButton
                    href="#story"
                    variant="outline"
                  >
                    Explore VOLT NOIR

                    <ArrowDown
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </MagneticButton>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.75,
                    duration: 0.8,
                  }}
                  className="mt-14 flex flex-wrap items-center gap-6 sm:gap-8"
                >
                  <div className="group">
                    <p className="text-2xl font-black transition group-hover:text-red-400">
                      330
                      <span className="ml-1 text-xs text-white/30">
                        ML
                      </span>
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                      Concept Can
                    </p>
                  </div>

                  <div className="h-9 w-px bg-white/10" />

                  <div className="group">
                    <p className="text-2xl font-black transition group-hover:text-red-400">
                      01
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                      Signature
                    </p>
                  </div>

                  <div className="h-9 w-px bg-white/10" />

                  <div className="group">
                    <p className="flex items-center gap-2 text-2xl font-black">
                      <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,.9)]" />
                      LIVE
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                      Concept
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,
                  }}
                  className="mt-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/15 sm:flex"
                >
                  <span className="h-px w-8 bg-white/10" />

                  Crafted for the digital night

                  <span className="h-px w-8 bg-white/10" />
                </motion.div>
              </motion.div>

              {/* HERO PRODUCT */}

              <motion.div
                style={{
                  y: heroProductY,
                  rotate: heroProductRotate,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.65,
                  rotate: 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.25,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex min-h-[520px] items-center justify-center lg:min-h-[700px]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.65, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[330px] w-[330px] rounded-full bg-red-600/10 blur-[100px] sm:h-[450px] sm:w-[450px]"
                />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[310px] w-[310px] rounded-full border border-red-500/[0.08] sm:h-[400px] sm:w-[400px]"
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,.9)]" />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[420px] w-[420px] rounded-full border border-white/[0.05] sm:h-[530px] sm:w-[530px]"
                >
                  <span className="absolute right-[13%] top-[13%] h-1.5 w-1.5 rounded-full bg-white/50" />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 42,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[500px] w-[500px] rounded-full border border-dashed border-white/[0.045] sm:h-[620px] sm:w-[620px]"
                />

                <div className="absolute h-[230px] w-[230px] rounded-full border border-white/[0.035] sm:h-[310px] sm:w-[310px]" />

                <motion.div
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="absolute inset-10 rounded-full bg-red-500/10 blur-[80px]" />

                  <img
                    src={voltNoir}
                    alt="VOLT NOIR fictional energy drink"
                    draggable="false"
                    className="relative w-[260px] select-none object-contain drop-shadow-[0_55px_90px_rgba(0,0,0,.95)] sm:w-[340px] lg:w-[420px]"
                  />

                  <div className="absolute inset-x-8 bottom-[-12px] h-10 rounded-full bg-red-500/20 blur-2xl" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-[22%] hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,.8)]" />

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                        Flavor
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        BLACK CITRUS
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[20%] right-0 hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-right text-[8px] uppercase tracking-[0.2em] text-white/30">
                        Edition
                      </p>

                      <p className="mt-1 text-right text-xs font-bold">
                        001 / 026
                      </p>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-white/50" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-[10%] left-[8%] hidden h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl md:flex"
                >
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/10" />

                  <div className="text-center text-[7px] font-bold uppercase tracking-[0.2em] text-white/35">
                    VOLT
                    <br />
                    NOIR
                    <br />
                    2026
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.a
            href="#story"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 1,
            }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-white/25 transition hover:text-white/60 md:flex"
          >
            <span>Scroll to explore</span>

            <span className="h-px w-12 bg-white/10" />

            <motion.span
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={13} />
            </motion.span>
          </motion.a>
        </section>

        {/* =====================================================
            MARQUEE
        ===================================================== */}

        <section className="relative z-10 overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-8 px-4"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/25">
                  VOLT NOIR
                </span>

                <span className="text-red-500">✦</span>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/25">
                  BLACK CITRUS
                </span>

                <span className="text-red-500">✦</span>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/25">
                  ZERO NOISE
                </span>

                <span className="text-red-500">✦</span>

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/25">
                  BOLD ENERGY
                </span>

                <span className="text-red-500">✦</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* =====================================================
            STORY
        ===================================================== */}

        <section
          id="story"
          className="relative z-10 scroll-mt-24 border-b border-white/[0.06] px-5 py-28 sm:px-8 sm:py-40 lg:px-12"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
              <Reveal>
                <div className="sticky top-32">
                  <Eyebrow>The concept</Eyebrow>

                  <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                    DARK.
                    <br />

                    <span className="text-white/20">
                      DISTINCT.
                    </span>

                    <br />

                    DELIBERATE.
                  </h2>

                  <div className="mt-10 flex items-center gap-3 text-xs text-white/30">
                    <SectionNumber>01 / 05</SectionNumber>

                    <span className="h-px w-10 bg-white/10" />

                    <span>THE STORY</span>
                  </div>
                </div>
              </Reveal>

              <div>
                <Reveal delay={0.1}>
                  <p className="max-w-3xl text-2xl font-medium leading-[1.45] tracking-tight text-white/75 sm:text-4xl">
                    VOLT NOIR is built around one simple
                    principle:
                    <span className="text-white">
                      {" "}
                      remove everything that doesn't matter.
                    </span>
                  </p>
                </Reveal>

                <Reveal delay={0.18}>
                  <p className="mt-10 max-w-2xl text-base leading-8 text-white/35">
                    The visual system takes the familiar energy
                    drink category and strips it down. No
                    explosive graphics. No overloaded packaging.
                    No endless badges fighting for attention.
                  </p>
                </Reveal>

                <Reveal delay={0.24}>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/35">
                    Instead, the concept uses black space,
                    aggressive typography, restrained red accents
                    and a product-first composition to create a
                    premium identity.
                  </p>
                </Reveal>

                <div className="mt-16 grid gap-3 sm:grid-cols-2">
                  {[
                    ["01", "Minimal", "Less visual noise."],
                    ["02", "Premium", "Controlled contrast."],
                    ["03", "Focused", "One clear message."],
                    ["04", "Memorable", "Strong identity."],
                  ].map(([number, title, description], index) => (
                    <Reveal
                      key={number}
                      delay={0.1 + index * 0.05}
                    >
                      <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-red-400">
                            {number}
                          </span>

                          <MoveUpRight
                            size={15}
                            className="text-white/15 transition group-hover:text-white"
                          />
                        </div>

                        <h3 className="mt-12 text-xl font-bold">
                          {title}
                        </h3>

                        <p className="mt-2 text-sm text-white/30">
                          {description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="relative z-10 scroll-mt-24 border-b border-white/[0.06] px-5 py-28 sm:px-8 sm:py-40 lg:px-12"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Reveal>
                <div>
                  <Eyebrow>Experience</Eyebrow>

                  <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-0.05em] sm:text-7xl">
                    BUILT TO
                    <br />

                    <span className="text-white/20">
                      STAND OUT.
                    </span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="max-w-sm">
                  <p className="text-sm leading-7 text-white/35">
                    Three principles define the fictional
                    product experience from the first frame to the
                    final CTA.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.number}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    className="group relative min-h-[430px] overflow-hidden bg-[#050505] p-8 transition duration-500 hover:bg-[#090909] sm:p-10"
                  >
                    <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-red-500/0 blur-3xl transition duration-700 group-hover:bg-red-500/10" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-xs text-red-400">
                        {feature.number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-white/25 transition duration-500 group-hover:rotate-12 group-hover:text-red-400"
                      />
                    </div>

                    <div className="relative z-10 mt-24">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                        {feature.eyebrow}
                      </p>

                      <h3 className="mt-3 text-2xl font-black tracking-tight">
                        {feature.title}
                      </h3>

                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/35">
                        {feature.description}
                      </p>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="h-px w-full bg-white/5" />

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                          VOLT / 2026
                        </span>

                        <ArrowRight
                          size={15}
                          className="text-white/15 transition group-hover:translate-x-2 group-hover:text-white"
                        />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCT SHOWCASE
        ===================================================== */}

        <section className="relative z-10 overflow-hidden border-b border-white/[0.06] px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080808]">
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.06] blur-[130px]" />

                <div
                  className="absolute inset-0 opacity-[0.025]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, white 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>

              <div className="relative z-10 grid min-h-[700px] items-center lg:grid-cols-2">
                <div className="px-7 py-16 sm:px-14 lg:px-20">
                  <Reveal>
                    <Eyebrow>Signature flavor</Eyebrow>

                    <h2 className="mt-7 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
                      BLACK
                      <br />

                      <span className="text-white/20">
                        CITRUS.
                      </span>
                    </h2>

                    <p className="mt-8 max-w-md text-base leading-8 text-white/35">
                      A fictional flavor direction where bright
                      citrus energy meets a darker, sharper
                      personality.
                    </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div className="mt-10 flex flex-wrap gap-2">
                      {[
                        "CITRUS",
                        "SHARP",
                        "DARK",
                        "CLEAN",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-4 py-2 text-[9px] font-bold tracking-[0.25em] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <a
                      href="#details"
                      className="group mt-10 inline-flex items-center gap-3 text-sm font-bold text-white"
                    >
                      Explore details

                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </a>
                  </Reveal>
                </div>

                <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden lg:min-h-[700px]">
                  <div className="absolute h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[110px]" />

                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <img
                      src={voltNoir}
                      alt="VOLT NOIR product concept"
                      className="w-[280px] object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,.9)] sm:w-[360px]"
                    />
                  </motion.div>

                  <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-white/20">
                    <span className="h-px w-10 bg-white/10" />
                    Product concept 001
                    <span className="h-px w-10 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DETAILS
        ===================================================== */}

        <section
          id="details"
          className="relative z-10 scroll-mt-24 border-b border-white/[0.06] px-5 py-28 sm:px-8 sm:py-40 lg:px-12"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
              <Reveal>
                <div>
                  <Eyebrow>Product details</Eyebrow>

                  <h2 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
                    WHAT'S
                    <br />

                    <span className="text-white/20">
                      INSIDE.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-md text-sm leading-7 text-white/35">
                    Conceptual product information created
                    specifically for this portfolio case study.
                    Real-world product information should always
                    come from verified packaging and documentation.
                  </p>

                  <div className="mt-10 flex items-center gap-3 text-xs text-white/30">
                    <FlaskConical
                      size={16}
                      className="text-red-400"
                    />

                    Illustrative concept data
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ingredients.map((ingredient, index) => {
                    const Icon = ingredient.icon;
                    const active =
                      activeIngredient === index;

                    return (
                      <button
                        type="button"
                        key={ingredient.title}
                        onClick={() =>
                          setActiveIngredient(index)
                        }
                        className={`group rounded-3xl border p-6 text-left transition duration-500 ${
                          active
                            ? "border-red-500/30 bg-red-500/[0.05]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition ${
                              active
                                ? "border-red-500/30 bg-red-500/10 text-red-400"
                                : "border-white/10 text-white/30"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <span
                            className={`font-mono text-[9px] ${
                              active
                                ? "text-red-400"
                                : "text-white/15"
                            }`}
                          >
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="mt-12 text-sm font-bold">
                          {ingredient.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-white/30">
                          {ingredient.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <motion.div
              key={activeIngredient}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 rounded-3xl border border-red-500/10 bg-red-500/[0.025] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                    Selected component
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {ingredients[activeIngredient].title}
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-white/30">
                  {ingredients[activeIngredient].description}
                  {" "}
                  This information is part of the fictional
                  portfolio concept and is not product guidance.
                </p>
              </div>
            </motion.div>

            <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4">
              {specs.map((spec, index) => {
                const Icon = spec.icon;

                return (
                  <Reveal
                    key={spec.label}
                    delay={index * 0.05}
                  >
                    <div className="group border-b border-white/10 p-7 transition hover:bg-white/[0.03] sm:border-r sm:last:border-r-0 lg:border-b-0">
                      <div className="flex items-center justify-between">
                        <Icon
                          size={18}
                          className="text-white/20 transition group-hover:text-red-400"
                        />

                        <SectionNumber>
                          0{index + 1}
                        </SectionNumber>
                      </div>

                      <p className="mt-14 text-3xl font-black tracking-tight">
                        {spec.value}

                        {spec.suffix && (
                          <span className="ml-1 text-xs text-white/25">
                            {spec.suffix}
                          </span>
                        )}
                      </p>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
                        {spec.label}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            RESPONSIBLE USE
        ===================================================== */}

        <section className="relative z-10 px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 sm:p-10 lg:p-14">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-500/[0.04] blur-[90px]" />

                <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div>
                    <Eyebrow>Responsible concept</Eyebrow>

                    <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                      ENERGY PRODUCTS
                      <br />

                      <span className="text-white/25">
                        AREN'T FOR EVERYONE.
                      </span>
                    </h2>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-white/35">
                    This is a fictional portfolio concept. Any
                    real caffeinated product should follow
                    applicable labeling requirements, caffeine
                    guidance and age-related regulations. Always
                    check actual product information rather than
                    relying on a concept website.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            NUMBERS / VISUAL BREAK
        ===================================================== */}

        <section className="relative z-10 overflow-hidden border-y border-white/[0.06] px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ["01", "FLAVOR", "Black Citrus"],
                ["02", "FORM", "330 ML"],
                ["03", "MOOD", "Zero Noise"],
              ].map(([number, label, value], index) => (
                <Reveal
                  key={number}
                  delay={index * 0.08}
                >
                  <div className="group flex items-end justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                        {label}
                      </p>

                      <p className="mt-3 text-xl font-bold">
                        {value}
                      </p>
                    </div>

                    <span className="font-mono text-[10px] text-red-400">
                      {number}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section
          id="faq"
          className="relative z-10 scroll-mt-24 border-b border-white/[0.06] px-5 py-28 sm:px-8 sm:py-40 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <Eyebrow>Questions</Eyebrow>

                <h2 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
                  FAQ
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/30">
                  Everything important about the fictional
                  VOLT NOIR concept.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <Reveal
                    key={faq.question}
                    delay={index * 0.04}
                  >
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:border-white/15">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(
                            isOpen ? null : index
                          )
                        }
                        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[9px] text-red-400">
                            0{index + 1}
                          </span>

                          <span className="text-sm font-bold sm:text-base">
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition ${
                            isOpen
                              ? "rotate-45 bg-white text-black"
                              : "text-white/40"
                          }`}
                        >
                          <Plus size={15} />
                        </span>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl px-6 pb-7 pl-[3.9rem] text-sm leading-7 text-white/35 sm:px-7 sm:pl-[4.1rem]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          id="buy"
          className="relative z-10 scroll-mt-24 px-5 pb-20 pt-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="relative min-h-[680px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025]">
              <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.07] blur-[150px]" />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                }}
              />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[46%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
              >
                <img
                  src={voltNoir}
                  alt=""
                  className="w-[420px] object-contain blur-[1px] sm:w-[550px]"
                />
              </motion.div>

              <div className="relative z-10 flex min-h-[680px] flex-col items-center justify-center px-6 text-center">
                <Reveal>
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,.9)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
                      Final concept
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h2 className="mt-7 max-w-5xl text-[4rem] font-black leading-[0.82] tracking-[-0.075em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                    READY FOR
                    <br />

                    <span className="text-white/15">
                      THE
                    </span>{" "}
                    <span className="text-red-500">
                      DARK?
                    </span>
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/35">
                    The button below is intentionally a portfolio
                    interaction. VOLT NOIR is not a real product
                    and there is no real checkout.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <MagneticButton href="#story">
                      Explore the Concept

                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </MagneticButton>

                    <MagneticButton
                      href="#details"
                      variant="outline"
                    >
                      View Details
                    </MagneticButton>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="relative z-10 border-t border-white/[0.06] px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <a
                  href="#top"
                  className="text-lg font-black tracking-[0.3em]"
                >
                  VOLT
                  <span className="text-white/25">
                    NOIR
                  </span>
                </a>

                <p className="mt-4 max-w-sm text-xs leading-6 text-white/20">
                  A fictional premium energy drink concept
                  created as a modern landing-page portfolio
                  case study.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 text-xs text-white/25">
                <a
                  href="#story"
                  className="transition hover:text-white"
                >
                  Story
                </a>

                <a
                  href="#experience"
                  className="transition hover:text-white"
                >
                  Experience
                </a>

                <a
                  href="#details"
                  className="transition hover:text-white"
                >
                  Details
                </a>

                <a
                  href="#faq"
                  className="transition hover:text-white"
                >
                  FAQ
                </a>

                <button
                  type="button"
                  onClick={openCheckout}
                  className="transition hover:text-white"
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/[0.06] pt-6 text-[9px] uppercase tracking-[0.2em] text-white/15 sm:flex-row">
              <span>
                © 2026 VOLT NOIR / FICTIONAL CONCEPT
              </span>

              <span>
                DESIGNED FOR A PREMIUM DIGITAL EXPERIENCE
              </span>
            </div>
          </div>
        </footer>

        {/* =====================================================
            MOBILE BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{
            y: 100,
          }}
          animate={{
            y: 0,
          }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <button
            type="button"
            onClick={openCheckout}
            className="flex w-full items-center justify-between rounded-full border border-white/10 bg-black/80 px-5 py-3 shadow-2xl backdrop-blur-2xl"
          >
            <span className="text-xs font-bold">
              VOLT NOIR
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold text-black">
              Buy Now
              <ArrowRight size={13} />
            </span>
          </button>
        </motion.div>

        {/* =====================================================
            DEMO CHECKOUT POPUP
        ===================================================== */}

        {buyNowOpen && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
            onClick={() => setBuyNowOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] border border-white/10 bg-[#080808] p-6 shadow-2xl sm:p-8"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.04] blur-[100px]" />

              <div className="relative z-10">
                <button
                  type="button"
                  aria-label="Close checkout"
                  onClick={() => setBuyNowOpen(false)}
                  className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <X size={18} />
                </button>

                {!orderDone ? (
                  <>
                    <div className="pr-12">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-400">
                        Secure Checkout
                      </p>

                      <h2 className="mt-3 text-3xl font-black tracking-tight">
                        VOLT NOIR
                      </h2>

                      <p className="mt-2 text-sm text-white/35">
                        Black Citrus / 330 ML
                      </p>
                    </div>

                    <div className="mt-7 flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex h-24 w-20 items-center justify-center rounded-2xl bg-black">
                        <img
                          src={voltNoir}
                          alt="VOLT NOIR"
                          className="h-20 w-auto object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-bold">
                          VOLT NOIR
                        </p>

                        <p className="mt-1 text-xs text-white/30">
                          Concept Edition 001
                        </p>

                        <p className="mt-3 text-lg font-black">
                          ₹149
                          <span className="ml-1 text-xs font-normal text-white/25">
                            / can
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                        Quantity
                      </p>

                      <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-2">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity((value) =>
                              Math.max(1, value - 1)
                            )
                          }
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                        >
                          −
                        </button>

                        <span className="text-lg font-black">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            setQuantity((value) =>
                              Math.min(10, value + 1)
                            )
                          }
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <p className="mt-2 text-center text-[9px] uppercase tracking-[0.2em] text-white/15">
                        1–10 cans
                      </p>
                    </div>

                    <div className="mt-6 space-y-3">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-red-500/40"
                      />

                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-red-500/40"
                      />

                      <input
                        type="text"
                        placeholder="Card number (demo)"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-red-500/40"
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                          Total
                        </p>

                        <p className="mt-1 text-2xl font-black">
                          ₹{149 * quantity}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOrderDone(true)}
                        className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:scale-[1.03] hover:bg-white/90"
                      >
                        Pay ₹{149 * quantity}
                      </button>
                    </div>

                    <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-white/15">
                      Portfolio demo · No real payment processed
                    </p>
                  </>
                ) : (
                  <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_0_50px_rgba(239,68,68,.12)]">
                      <Check size={34} />
                    </div>

                    <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.3em] text-red-400">
                      Payment Successful
                    </p>

                    <h2 className="mt-3 text-4xl font-black tracking-tight">
                      Order Confirmed.
                    </h2>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/35">
                      Your demo order for {quantity} VOLT NOIR
                      {quantity > 1 ? " cans" : " can"} has been
                      confirmed.
                    </p>

                    <div className="mt-7 flex gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                          Quantity
                        </p>

                        <p className="mt-1 text-xl font-black">
                          {quantity}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                          Demo total
                        </p>

                        <p className="mt-1 text-xl font-black">
                          ₹{149 * quantity}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setBuyNowOpen(false)}
                      className="mt-8 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition hover:scale-[1.03]"
                    >
                      Done
                    </button>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-white/15">
                      Fictional portfolio interaction
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;