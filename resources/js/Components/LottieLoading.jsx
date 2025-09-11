import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function LoadingScreen({ isLoading }) {
    const [visible, setVisible] = useState(isLoading);

    useEffect(() => {
        if (!isLoading) {
            // kasih delay biar animasi fade-out kelihatan smooth
            const timeout = setTimeout(() => setVisible(false), 500);
            return () => clearTimeout(timeout);
        } else {
            setVisible(true);
        }
    }, [isLoading]);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
                isLoading ? "opacity-100" : "opacity-0"
            }`}
        >
            <Player
                autoplay
                loop
                src="https://lottie.host/f045194a-2c02-4cfe-8807-3f14cc356c0e/XQ18eu65BG.json"
                style={{ height: "200px", width: "200px" }}
            />
        </div>
    );
}
