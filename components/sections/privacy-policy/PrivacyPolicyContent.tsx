"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// 3D Assets
import privacyHero from "@/asset/images/privacy-hero-3d.png";
import privacyShape1 from "@/asset/images/privacy-shape-1.png";
import privacyShape2 from "@/asset/images/privacy-shape-2.png";

// Glow Card Component - Mouse-interactive gradient glow on edges
interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow effect overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.08), transparent 40%)`,
        }}
      />
      {/* Border glow effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 136, 0, 0.15), transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  index?: number;
}

const PolicySection = ({ title, children, index = 0 }: PolicySectionProps) => (
  <motion.div
    className="mb-10 md:mb-14 relative z-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: index * 0.05,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 pl-4 border-l-2 border-(--orange)">
      {title}
    </h2>
    <div className="text-sm md:text-base text-(--grey) space-y-4 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mt-4">
    {items.map((item, index) => (
      <motion.li
        key={index}
        className="flex items-start gap-3 text-(--grey)"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-(--orange) mt-2 shrink-0" />
        <span className="text-sm md:text-base">{item}</span>
      </motion.li>
    ))}
  </ul>
);

// Floating 3D Shape Component with smooth animation
interface FloatingShapeProps {
  src: typeof privacyShape1;
  alt: string;
  className?: string;
  floatRange?: number;
  rotateRange?: number;
  duration?: number;
  delay?: number;
  size?: number;
}

const FloatingShape = ({
  src,
  alt,
  className = "",
  floatRange = 20,
  rotateRange = 8,
  duration = 6,
  delay = 0,
  size = 200,
}: FloatingShapeProps) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0, 0.7, 0.7],
      scale: [0.8, 1, 1],
      y: [0, -floatRange, 0],
      rotate: [-rotateRange, rotateRange, -rotateRange],
    }}
    transition={{
      opacity: { duration: 1.5, delay },
      scale: { duration: 1.5, delay },
      y: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
      rotate: {
        duration: duration * 1.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    }}
    style={{ willChange: "transform, opacity" }}
  >
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="w-full h-auto drop-shadow-2xl"
      priority
    />
  </motion.div>
);

export default function PrivacyPolicyContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax for hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring physics for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms for different layers
  const heroY = useTransform(smoothProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const shape1Y = useTransform(smoothProgress, [0, 1], [0, 150]);
  const shape2Y = useTransform(smoothProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-(--background) min-h-screen"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Hero 3D Shield - Background Element with Parallax */}
      <motion.div
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="absolute top-20 right-0 md:right-10 lg:right-20 w-[300px] md:w-[450px] lg:w-[550px] pointer-events-none z-0"
      >
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={privacyHero}
            alt="Privacy Shield"
            width={550}
            height={550}
            className="w-full h-auto opacity-50 blur-[1px] drop-shadow-[0_0_100px_rgba(255,136,0,0.15)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Floating 3D Shapes - Orange (Left Side) */}
      <motion.div style={{ y: shape1Y }} className="absolute z-0">
        <FloatingShape
          src={privacyShape1}
          alt="Abstract Shape"
          className="top-[400px] md:top-[500px] -left-10 md:left-10"
          size={120}
          floatRange={25}
          duration={7}
          delay={0.5}
        />
      </motion.div>

      {/* Floating 3D Shapes - Blue (Right Side) */}
      <motion.div style={{ y: shape2Y }} className="absolute z-0">
        <FloatingShape
          src={privacyShape2}
          alt="Abstract Shape"
          className="top-[800px] md:top-[700px] -right-5 md:right-20"
          size={100}
          floatRange={30}
          rotateRange={12}
          duration={8}
          delay={1}
        />
      </motion.div>

      {/* Additional floating shape mid-page */}
      <FloatingShape
        src={privacyShape1}
        alt="Abstract Shape"
        className="top-[1400px] -left-5 md:left-5 hidden md:block"
        size={80}
        floatRange={15}
        rotateRange={6}
        duration={6}
        delay={2}
      />

      {/* Another floating shape near bottom */}
      <FloatingShape
        src={privacyShape2}
        alt="Abstract Shape"
        className="top-[2200px] right-5 md:right-32"
        size={90}
        floatRange={20}
        rotateRange={10}
        duration={9}
        delay={1.5}
      />

      <div className="relative w-full py-12 md:py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Policy Content */}
          <GlowCard className="rounded-3xl">
            <motion.div
              className="space-y-4 backdrop-blur-sm bg-white/[0.02] rounded-3xl p-6 md:p-10 border border-white/5"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <PolicySection title="1. Introduction" index={0}>
                <p>
                  Welcome to Inkam (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;). We are committed to protecting your privacy
                  and ensuring the security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our digital
                  distribution platform, website (inkam.app), mobile
                  applications, and related services (collectively, the
                  &quot;Services&quot;).
                </p>
                <p>
                  By accessing or using our Services, you agree to the terms of
                  this Privacy Policy. If you do not agree with our policies and
                  practices, please do not use our Services.
                </p>
              </PolicySection>

              <PolicySection title="2. Information We Collect" index={1}>
                <motion.div
                  className="p-4 bg-white/5 rounded-xl border border-white/5 mb-6"
                  whileHover={{ borderColor: "rgba(255,136,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium text-white mb-3 flex items-center gap-2">
                    <span className="text-(--orange)">•</span> Personal
                    Information
                  </p>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily
                    provide to us, including:
                  </p>
                  <PolicyList
                    items={[
                      "Full name",
                      "Email address",
                      "Phone number",
                      "Business name and details (for partners and agents)",
                      "Physical address or location",
                      "National ID or business registration details",
                      "Payment and banking information",
                    ]}
                  />
                </motion.div>

                <motion.div
                  className="p-4 bg-white/5 rounded-xl border border-white/5"
                  whileHover={{ borderColor: "rgba(0,92,175,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium text-white mb-3 flex items-center gap-2">
                    <span className="text-(--orange)">•</span> Automatically
                    Collected Information
                  </p>
                  <p className="mb-4">
                    When you use our Services, we may automatically collect:
                  </p>
                  <PolicyList
                    items={[
                      "Device information (device type, OS, IDs)",
                      "Log information (access times, pages viewed, IP)",
                      "Location data (with your consent)",
                      "Usage data and analytics",
                      "Cookies and similar tracking technologies",
                    ]}
                  />
                </motion.div>
              </PolicySection>

              <PolicySection title="3. How We Use Your Information" index={2}>
                <p>
                  We use the information we collect for various purposes,
                  including:
                </p>
                <PolicyList
                  items={[
                    "To provide, maintain, and improve our Services",
                    "To process agent registrations and verify identities",
                    "To facilitate digital product distribution and transactions",
                    "To communicate with you about updates, promotions, and support",
                    "To process payments and commissions for our agent network",
                    "To analyze usage patterns and optimize user experience",
                    "To detect, prevent, and address fraud and security issues",
                    "To comply with legal obligations and enforce our terms",
                    "To send marketing communications (with your consent)",
                  ]}
                />
              </PolicySection>

              <PolicySection
                title="4. Information Sharing and Disclosure"
                index={3}
              >
                <p>
                  We may share your information in the following circumstances:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "With Business Partners",
                      desc: "We share relevant information with our digital business partners to facilitate product distribution, order processing, and campaign execution.",
                    },
                    {
                      title: "With Service Providers",
                      desc: "We engage third-party service providers to assist with payment processing, analytics, communications, and hosting.",
                    },
                    {
                      title: "For Legal Compliance",
                      desc: "We may disclose your information when required by law, regulation, legal process, or government request.",
                    },
                    {
                      title: "Business Transfers",
                      desc: "In the event of a merger, acquisition, or sale of assets, your information may be transferred.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="p-4 bg-white/5 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{
                        y: -4,
                        backgroundColor: "rgba(255,255,255,0.08)",
                      }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="font-medium text-white mb-2">
                        {item.title}
                      </p>
                      <p className="leading-snug text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </PolicySection>

              <PolicySection title="5. Data Security" index={4}>
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <PolicyList
                  items={[
                    "Encryption of sensitive data in transit and at rest",
                    "Secure server infrastructure with access controls",
                    "Regular security assessments and updates",
                    "Employee training on data protection practices",
                    "Incident response procedures for potential breaches",
                  ]}
                />
                <motion.div
                  className="mt-6 p-4 bg-(--orange)/10 rounded-lg border border-(--orange)/20 flex gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--orange) shrink-0"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-sm">
                    However, no method of transmission over the Internet or
                    electronic storage is 100% secure. While we strive to
                    protect your information, we cannot guarantee absolute
                    security.
                  </p>
                </motion.div>
              </PolicySection>

              <PolicySection title="6. Data Retention" index={5}>
                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required or permitted by
                  law. When determining retention periods, we consider:
                </p>
                <PolicyList
                  items={[
                    "The nature and sensitivity of the information",
                    "The purposes for which we process the information",
                    "Applicable legal, regulatory, and contractual requirements",
                    "The potential risk of harm from unauthorized use or disclosure",
                  ]}
                />
              </PolicySection>

              <PolicySection title="7. Your Rights and Choices" index={6}>
                <p>
                  Depending on your location and applicable laws, you may have
                  the following rights:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {[
                    "Access: Request a copy of your data",
                    "Correction: Fix inaccurate info",
                    "Deletion: Request data deletion",
                    "Objection: Object to processing",
                    "Portability: Transfer your data",
                    "Withdraw Consent: Stop specific processing",
                    "Opt-out: Unsubscribe from marketing",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-(--blue)" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 text-sm italic">
                  To exercise any of these rights, please contact us using the
                  information provided below.
                </p>
              </PolicySection>

              <PolicySection
                title="8. Cookies and Tracking Technologies"
                index={7}
              >
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our platform. Cookies are small data files
                  stored on your device that help us:
                </p>
                <PolicyList
                  items={[
                    "Remember your preferences and settings",
                    "Understand how you use our Services",
                    "Analyze and improve platform performance",
                    "Deliver relevant content and advertisements",
                  ]}
                />
                <p className="mt-4">
                  You can manage your cookie preferences through your browser
                  settings. Note that disabling certain cookies may affect the
                  functionality of our Services.
                </p>
              </PolicySection>

              <PolicySection title="9. Third-Party Links" index={8}>
                <p>
                  Our Services may contain links to third-party websites,
                  applications, or services that are not operated by us. We are
                  not responsible for the privacy practices of these third
                  parties. We encourage you to review the privacy policies of
                  any third-party services you access through our platform.
                </p>
              </PolicySection>

              <PolicySection title="10. Children's Privacy" index={9}>
                <p>
                  Our Services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe your
                  child has provided us with personal information, please
                  contact us immediately.
                </p>
              </PolicySection>

              <PolicySection title="11. International Transfers" index={10}>
                <p>
                  Inkam operates primarily in Bangladesh. If you access our
                  Services from outside Bangladesh, your information may be
                  transferred to and processed in Bangladesh, where data
                  protection laws may differ from those in your country. By
                  using our Services, you consent to such transfers.
                </p>
              </PolicySection>

              <PolicySection title="12. Changes to This Policy" index={11}>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the updated
                  policy and updating the date. Your continued use of our
                  Services constitutes acceptance.
                </p>
              </PolicySection>

              <PolicySection title="13. Contact Us" index={12}>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 group"
                    whileHover={{ borderColor: "rgba(255,136,0,0.5)", y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                      <span className="p-2 bg-(--orange)/10 rounded-lg group-hover:bg-(--orange)/20 transition-colors">
                        📍
                      </span>
                      Office Address
                    </p>
                    <p className="text-sm leading-relaxed">
                      House: 654, Road: 09, Avenue: 04, <br />
                      Mirpur DOHS, Dhaka 1216, <br />
                      Bangladesh
                    </p>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div
                      className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-2 bg-(--blue)/10 rounded-lg text-(--blue)">
                        ✉️
                      </div>
                      <div>
                        <p className="text-xs text-(--grey)">Email Us</p>
                        <a
                          href="mailto:khalid@inkam.app"
                          className="text-white hover:text-(--orange) transition-colors font-medium"
                        >
                          khalid@inkam.app
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-2 bg-(--blue)/10 rounded-lg text-(--blue)">
                        📞
                      </div>
                      <div>
                        <p className="text-xs text-(--grey)">Call Us</p>
                        <a
                          href="tel:+8801784398934"
                          className="text-white hover:text-(--orange) transition-colors font-medium"
                        >
                          +880 1784-398934
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </PolicySection>

              {/* Final Note */}
              <motion.div
                className="mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-(--grey) text-center opacity-70">
                  By using Inkam&apos;s Services, you acknowledge that you have
                  read, understood, and agree to be bound by this Privacy
                  Policy.
                </p>
              </motion.div>
            </motion.div>
          </GlowCard>
        </div>
      </div>
    </div>
  );
}
