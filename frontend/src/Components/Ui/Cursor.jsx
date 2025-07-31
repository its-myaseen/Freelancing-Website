import React, { useEffect, useRef, useContext } from 'react';
import { SiteDataContext } from '../../Contexts/SiteContext';

const Cursor = ({ positionRef }) => {
    const cursorRef = useRef(null);
    const outercursorRef = useRef(null);
    const { HoverSize, Cursoropacity, hoverBg } = useContext(SiteDataContext);

    // Track current outer cursor position
    const outerPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = () => {
            const { x, y } = positionRef.current;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }
            requestAnimationFrame(moveCursor);
        };

        requestAnimationFrame(moveCursor);
    }, [positionRef]);

    useEffect(() => {
        const lerp = (start, end, factor) => start + (end - start) * factor;

        const outermoveCursor = () => {
            const target = positionRef.current;
            outerPosition.current.x = lerp(outerPosition.current.x, target.x, 0.08);
            outerPosition.current.y = lerp(outerPosition.current.y, target.y, 0.08);

            if (outercursorRef.current) {
                outercursorRef.current.style.transform = `translate(${outerPosition.current.x}px, ${outerPosition.current.y}px) translate(-50%, -50%)`;
            }

            requestAnimationFrame(outermoveCursor);
        };

        requestAnimationFrame(outermoveCursor);
    }, [positionRef]);

    return (
        <>
            <div
                ref={cursorRef}
                className="pointer-events-none h-2 w-2 shadow-2xl rounded-full z-[1000] bg-white/70"
                style={{
                    top: '0px',
                    left: '0px',
                    position: 'fixed',
                    transform: 'translate(0, 0)',
                    opacity: Cursoropacity,
                }}
            />

            <div
                ref={outercursorRef}
                className="pointer-events-none rounded-full z-[999] border border-white/60"
                style={{
                    top: '0px',
                    left: '0px',
                    position: 'fixed',
                    transform: 'translate(0, 0)',
                    height: HoverSize,
                    width: HoverSize,
                    backgroundColor: `rgba(255, 255, 255, ${hoverBg === 'white/10' ? 0.1 : 0})`,
                    opacity: Cursoropacity,
                }}
            />

        </>
    );
};

export default Cursor;
