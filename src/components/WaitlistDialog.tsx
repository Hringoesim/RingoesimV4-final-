import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { WaitlistForm } from "./WaitlistForm";

interface WaitlistDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children?: React.ReactNode;
}

export function WaitlistDialog({ open, onOpenChange, children }: WaitlistDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {children && <DialogTrigger asChild>{children}</DialogTrigger>}
            <DialogContent className="sm:max-w-md p-0 bg-transparent border-0 shadow-none">
                <WaitlistForm onSuccess={() => onOpenChange(false)} />
            </DialogContent>
        </Dialog>
    );
}
