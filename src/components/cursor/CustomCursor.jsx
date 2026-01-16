import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const circleRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const circlePos = useRef({ x: 0, y: 0 });
    const isVisible = useRef(false);

    useEffect(() => {
        // Force hide system cursor across the entire app with a transparent cursor failsafe
        const style = document.createElement('style');
        style.innerHTML = `
            * { cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="), none !important; }
            html, body { cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="), none !important; }
            a, button, i, span, input, textarea, [role="button"], .nav__link, .nav__logo, .nav__toggle, .nav__close { 
                cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="), none !important; 
            }
        `;
        document.head.appendChild(style);

        const updateVisibility = (visible) => {
            isVisible.current = visible;
            if (cursorRef.current) cursorRef.current.style.opacity = visible ? '1' : '0';
            if (circleRef.current) circleRef.current.style.opacity = visible ? '1' : '0';
        };

        const handleMouseMove = (e) => {
            if (!isVisible.current) updateVisibility(true);
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => updateVisibility(false);
        const handleMouseEnter = () => updateVisibility(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        const animate = () => {
            // Smoothly move the dot
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.5;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.5;

            // Lag/Trail for the circle
            circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15;
            circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
            }

            if (circleRef.current) {
                circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0) translate(-50%, -50%)`;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(animationId);
            if (style.parentNode) style.parentNode.removeChild(style);
        };
    }, []);

    return (
        <>
            {/* The Dot */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    willChange: 'transform, opacity',
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out',
                }}
            />
            {/* The Circle */}
            <div
                ref={circleRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1.5px solid rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    willChange: 'transform, opacity',
                    opacity: 0,
                    transition: 'opacity 0.2s ease-in-out, width 0.2s, height 0.2s',
                }}
            />
        </>
    );
};

export default CustomCursor;
