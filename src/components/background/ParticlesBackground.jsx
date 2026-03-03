import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let stars = [];
        let mouseParticles = [];
        let starCount = 20;
        const mouse = { x: null, y: null, radius: 100 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Adjust density for mobile
            if (window.innerWidth <= 768) {
                starCount = 10;
            } else {
                starCount = 20;
            }

            initStars();
        };

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.length = Math.random() * 100 + 20;
                this.speed = Math.random() * 2 + 1;
                this.opacity = 0;
                this.maxOpacity = Math.random() * 0.2 + 0.1; // Increased opacity
                this.angle = 135; // Traveling diagonally down-right
            }

            update() {
                const angleRad = (this.angle * Math.PI) / 180;
                this.x += Math.cos(angleRad) * this.speed;
                this.y += Math.sin(angleRad) * this.speed;

                // Simple fade in and out
                if (this.opacity < this.maxOpacity) {
                    this.opacity += 0.005;
                }

                if (this.x > canvas.width + this.length || this.y > canvas.height + this.length) {
                    this.reset();
                    this.x = Math.random() * canvas.width;
                    this.y = -20; // Start from top
                }
            }

            draw() {
                const angleRad = (this.angle * Math.PI) / 180;
                const tailX = this.x - Math.cos(angleRad) * this.length;
                const tailY = this.y - Math.sin(angleRad) * this.length;

                // Draw tail
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 0, 0, ${this.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();

                // Draw star head
                ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class MouseParticle {
            constructor(x, y, isBurst = false) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * (isBurst ? 10 : 2);
                this.vy = (Math.random() - 0.5) * (isBurst ? 10 : 2);
                this.size = Math.random() * 3 + 1;
                this.life = 1.0;
                this.decay = Math.random() * 0.02 + 0.01;
                this.color = 'rgba(0, 0, 0, ';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
                this.vx *= 0.98;
                this.vy *= 0.98;
            }

            draw() {
                ctx.fillStyle = `${this.color}${this.life * 0.4})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initStars = () => {
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push(new ShootingStar());
            }
        };


        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background stars
            stars.forEach(s => {
                s.update();
                s.draw();
            });

            // Draw mouse trail particles
            for (let i = 0; i < mouseParticles.length; i++) {
                mouseParticles[i].update();
                mouseParticles[i].draw();

                if (mouseParticles[i].life <= 0) {
                    mouseParticles.splice(i, 1);
                    i--;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
            // Spawn trail particles
            for (let i = 0; i < 2; i++) {
                mouseParticles.push(new MouseParticle(e.x, e.y));
            }
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleClick = (e) => {
            // Spawn burst particles
            for (let i = 0; i < 20; i++) {
                mouseParticles.push(new MouseParticle(e.x, e.y, true));
            }
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('click', handleClick);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="particles-canvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default ParticlesBackground;
