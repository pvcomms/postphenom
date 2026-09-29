import { site } from "@/content/site";

// The address is decrypted in the reader's browser once altcha's proof-of-work is solved;
// until then the page carries only the encrypted payload. The trigger becomes a mailto link.
export function Contact({ children }: { children: React.ReactNode }) {
  return (
    <altcha-widget
      data-obfuscated={site.contactPayload}
      display="floating"
      configuration='{"hideLogo":true,"hideFooter":true,"floatingPlacement":"top"}'
    >
      <button type="button" className="button" title={site.proof.hint}>
        {children}
      </button>
    </altcha-widget>
  );
}
