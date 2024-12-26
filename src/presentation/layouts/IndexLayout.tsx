import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FRAMES } from "../../const/frames";
import Navbar from "../components/index/Navbar";
import styles from "../css/indexcss/header.module.css";

function IndexLayout() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const viewRef = useRef<HTMLDivElement | null>(null);

  const [maxScroll, setMaxScroll] = useState(0);

  const MAX_FRAMES = 150;
  const currentFrame = useRef(0);

  const updateImage = (frame: number = 0) => {
    const srcFrame = FRAMES[frame].path;
    if (imgRef.current) {
      imgRef.current.src = srcFrame;
    }
  };

  useEffect(() => {
    if (viewRef.current) {
      const viewElement = viewRef.current; // Copy ref value to a stable variable
  
      // Initialize the first image
      if (imgRef.current) {
        updateImage(currentFrame.current);
        if (mainRef.current) {
          mainRef.current.appendChild(imgRef.current);
        }
      }
  
      // Set the initial maxScroll value
      const calculateMaxScroll = () => {
        setMaxScroll(viewElement.scrollHeight - viewElement.clientHeight);
      };
  
      calculateMaxScroll();
  
      const handleScroll = () => {
        const scrollPosition = viewElement.scrollTop; // Scroll dentro del contenedor
        const scrollFraction = scrollPosition / maxScroll;
        //const frame = Math.floor(scrollFraction * MAX_FRAMES);
        const frame = Math.min(Math.floor(scrollFraction * MAX_FRAMES), FRAMES.length - 1); 

        
        // Update the frame only if it has changed
        if (currentFrame.current !== frame) {
          updateImage(frame);
          currentFrame.current = frame;
        }
      };
  
      // Event listeners
      viewElement.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", calculateMaxScroll);
  
      // Cleanup function
      return () => {
        viewElement.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", calculateMaxScroll);
      };
    }
  }, [maxScroll])
  useEffect(()=>{
    if(!viewRef.current) return
    const container = viewRef.current
    let isScrolling = false;
    let lastScroll = 0;
    let scrollTarget = 0;
    const smoothScroll = () => {
      if (!isScrolling) return;

      lastScroll += (scrollTarget - lastScroll) * 0.07; // Interpolación suave
      container.scrollTo(0, lastScroll);

      if (Math.abs(scrollTarget - lastScroll) < 0.5) {
        isScrolling = false; // Detener cuando esté casi en la posición
      } else {
        requestAnimationFrame(smoothScroll);
      }
    };
    const onWheel = (e:WheelEvent) => {
      e.preventDefault();
      scrollTarget += e.deltaY; // Ajustar objetivo del scroll
      scrollTarget = Math.max(
        0,
        Math.min(container.scrollHeight - container.clientHeight, scrollTarget)
      ); 
      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  },[])
  

  return (
    <main ref={mainRef} className="">
      <img
        ref={imgRef}
        className="w-screen h-dvh object-cover fixed"
        alt="Dynamic Frame"
      />

      <div
        ref={viewRef}
        className={`flex flex-col z-40 absolute right-0 overflow-y-auto left-0 top-0 bottom-0 
            ${styles.gradient} `}
      >
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export default IndexLayout;
