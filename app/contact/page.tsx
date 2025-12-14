"use client";

import HeaderBanner from "@/components/layout/headerBanner";
import Form from "@/components/sections/contact/Form";

export default function ContactSection() {


  return (
    <section className="text-white ">
      <HeaderBanner
        title="Contact Us"
        heading={<>Under Construction</>}
      />

      <Form />
    </section>
  );
}
