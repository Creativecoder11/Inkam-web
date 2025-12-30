"use client";

import HeaderBanner from "@/components/layout/headerBanner";
import Form from "@/components/sections/contact/Form";

export default function ContactSection() {
  return (
    <section className="text-white ">
      <HeaderBanner
        title="Contact Us"
        heading={
          <>
            Connect With
            <br />
            Our Support Team
          </>
        }
      />

      <Form />
    </section>
  );
}
