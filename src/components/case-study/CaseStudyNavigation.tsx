"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface CaseStudyNavigationProps {
  prevSlug: string | null;
  nextSlug: string | null;
}

export default function CaseStudyNavigation({
  prevSlug,
  nextSlug,
}: CaseStudyNavigationProps) {
  const router = useRouter();

  // Store current slugs in refs to ensure event listeners always see latest values without re-subscribing
  const prevSlugRef = useRef<string | null>(prevSlug);
  const nextSlugRef = useRef<string | null>(nextSlug);

  useEffect(() => {
    prevSlugRef.current = prevSlug;
    nextSlugRef.current = nextSlug;
  }, [prevSlug, nextSlug]);

  useEffect(() => {
    const isInteractiveElement = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      const tagName = el.tagName.toLowerCase();
      return (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        tagName === "button" ||
        tagName === "a" ||
        el.isContentEditable ||
        el.getAttribute("role") === "textbox" ||
        el.getAttribute("role") === "combobox" ||
        el.getAttribute("role") === "searchbox"
      );
    };

    // 1. Keyboard Navigation (Left / Right Arrow Keys)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if any modifier key is active (avoids colliding with browser history shortcuts or OS commands)
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
        return;
      }

      // Ignore if user is focused on or interacting with an input, textarea, link, or editable element
      const target = e.target as HTMLElement | null;
      const activeEl = document.activeElement as HTMLElement | null;
      if (isInteractiveElement(target) || isInteractiveElement(activeEl)) {
        return;
      }

      if (e.key === "ArrowRight") {
        if (nextSlugRef.current) {
          router.push(`/case-study/${nextSlugRef.current}`);
        }
      } else if (e.key === "ArrowLeft") {
        if (prevSlugRef.current) {
          router.push(`/case-study/${prevSlugRef.current}`);
        }
      }
    };

    // 2. Mobile Swipe Navigation (Horizontal Touch Gestures)
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isTouchValid = false;

    const handleTouchStart = (e: TouchEvent) => {
      // Ignore multi-touch (pinch-to-zoom or multi-finger gestures)
      if (e.touches.length !== 1) {
        isTouchValid = false;
        return;
      }

      // Ignore touches originating from interactive controls
      const target = e.target as HTMLElement | null;
      if (isInteractiveElement(target)) {
        isTouchValid = false;
        return;
      }

      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = Date.now();
      isTouchValid = true;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTouchValid || e.changedTouches.length !== 1) {
        return;
      }

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const deltaTime = Date.now() - touchStartTime;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Swipe requirements:
      // - Minimum horizontal displacement: 70px to avoid accidental trigger on slight finger taps
      // - Maximum swipe duration: 600ms (quick editorial flick, not a slow drag)
      // - Predominantly horizontal: horizontal travel must be at least 1.75x vertical travel to safeguard scrolling
      const MIN_SWIPE_DISTANCE = 70;
      const MAX_SWIPE_TIME = 600;

      if (
        absX >= MIN_SWIPE_DISTANCE &&
        deltaTime <= MAX_SWIPE_TIME &&
        absX > absY * 1.75
      ) {
        if (deltaX < 0) {
          // Swipe Left -> Next Case Study
          if (nextSlugRef.current) {
            router.push(`/case-study/${nextSlugRef.current}`);
          }
        } else {
          // Swipe Right -> Previous Case Study
          if (prevSlugRef.current) {
            router.push(`/case-study/${prevSlugRef.current}`);
          }
        }
      }

      isTouchValid = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router]);

  return null;
}
