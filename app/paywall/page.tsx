import type { Metadata } from "next";
import PaywallScreen from "../components/PaywallScreen";

export const metadata: Metadata = {
  title: "Unlock full access — 64bit.games",
  description: "Choose your plan and start playing instantly.",
};

export default function PaywallPage() {
  return (
    <main className="min-h-screen bg-[#080b14] flex flex-col items-center">
      <PaywallScreen />
    </main>
  );
}
