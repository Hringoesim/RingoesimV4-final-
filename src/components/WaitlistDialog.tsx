import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { WaitlistForm } from "./WaitlistForm";

interface WaitlistDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
}

export function WaitlistDialog({ open, onOpenChange, children }: WaitlistDialogProps) {
    const navigate = useNavigate();
    const location = useLocation();

    // Clear URL parameter when dialog closes
    useEffect(() => {
        if (!open) {
            const params = new URLSearchParams(location.search);
            if (params.get('join-waitlist') === 'true') {
                params.delete('join-waitlist');
                const newSearch = params.toString();
                const newUrl = location.pathname + (newSearch ? `?${newSearch}` : '');
                navigate(newUrl, { replace: true });
            }
        }
    }, [open, location.search, location.pathname, navigate]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {children && <DialogTrigger asChild>{children}</DialogTrigger>}
            <DialogContent className="sm:max-w-md p-0 bg-transparent border-0 shadow-none">
                <WaitlistForm onSuccess={() => onOpenChange(false)} />
            </DialogContent>
        </Dialog>
    );
}
