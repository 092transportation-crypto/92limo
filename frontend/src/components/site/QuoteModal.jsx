import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { InquiryForm } from "@/components/site/InquiryForm";

// Inline "Get a Free Quote" modal — wraps the same InquiryForm used on the
// full /booking page (variant="modal" trims the section chrome/trust
// badges) so there is a single source of truth for the booking form logic.
export function QuoteModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="quote-modal"
        className="max-h-[88vh] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-[#C9A227]/30 bg-[#0A0A0A] p-0 gap-0 text-white sm:rounded-3xl"
      >
        <div className="h-1.5 w-full rounded-t-3xl gold-gradient" aria-hidden="true" />
        <DialogHeader className="space-y-1 px-6 pt-6 text-left sm:px-8 sm:pt-7">
          <DialogTitle className="font-display text-2xl font-bold text-white">
            Get Your Free Quote
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            No payment required — tell us about your trip and we'll confirm with an
            all-inclusive quote.
          </DialogDescription>
        </DialogHeader>
        <InquiryForm variant="modal" />
      </DialogContent>
    </Dialog>
  );
}
