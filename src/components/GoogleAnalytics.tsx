import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        gtag: (
            command: "config" | "event" | "js",
            targetId: string | Date,
            config?: Record<string, any>
        ) => void;
    }
}

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== "undefined") {
            window.gtag("config", "G-Y3FYNS797P", {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;
