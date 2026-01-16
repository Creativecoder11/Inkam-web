import HeaderBanner from "@/components/layout/headerBanner";
import PrivacyPolicyContent from "@/components/sections/privacy-policy/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Inkam",
  description:
    "Learn how Inkam collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <HeaderBanner
        title="Privacy Policy"
        heading={
          <>
            Your Privacy
            <br />
            Matters to Us
          </>
        }
      />
      <PrivacyPolicyContent />
    </div>
  );
}
