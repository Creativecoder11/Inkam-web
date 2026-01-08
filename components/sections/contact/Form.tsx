'use client';
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

type FormValues = {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    acceptTerms: boolean;
};

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            acceptTerms: false,
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            // Send email to Admin
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // admin template
                {
                    full_name: data.fullName,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            // Auto-reply to User (must match template variable names)
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!, // auto-reply template
                {
                    to_email: data.email,   // ✅ matches {{to_email}} in template
                    to_name: data.fullName, // optional if template uses {{to_name}}
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            alert("Message sent successfully!");
            reset();
        } catch {
            alert("Failed to send message. Try again.");
        }
    };

    return (
        <div className="w-full pt-12 pb-15 md:pt-20 md:pb-25">
            <div className="max-w-7xl mx-4 md:mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16">

                    {/* LEFT COLUMN */}
                    <div>
                        <div className="mb-6 md:mb-16">
                            <div className="flex justify-start items-center gap-2 md:gap-4">
                                <p className="text-sm md:text-xl">CONTACT US</p>
                            </div>
                            <h2 className="text-2xl lg:text-5xl font-semibold mt-4">
                                Get in Touch
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {/* Call */}
                            <div className="mb-6 md:mb-10">
                                <div className="flex items-start gap-2 md:gap-4">
                                    <div className="bg-(--orange) p-2 md:p-3.5 rounded md:rounded-xl">
                                        <Phone className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[#CFCFCF] text-sm md:text-lg">Call Us:</p>
                                        <p className="text-[#FFF] text-sm md:text-lg font-semibold">
                                            +880 1784-398934
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-2.5 md:my-4 border-white/20" />
                                <p className="text-[#CFCFCF] text-xs md:text-base">
                                    Visit our office for personalized meetings, professional consultations, and reliable in-person support services.
                                </p>
                            </div>

                            {/* Email */}
                            <div className="mb-6 md:mb-10">
                                <div className="flex items-start gap-2 md:gap-4">
                                    <div className="bg-(--orange) p-2 md:p-3.5 rounded md:rounded-xl">
                                        <Mail className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[#CFCFCF] text-sm md:text-lg">Email:</p>

                                        <a href="mailto:khalid@inkam.app" className="text-[#FFF] text-sm md:text-lg font-semibold">khalid@inkam.app</a>
                                    </div>
                                </div>
                                <hr className="my-2.5 md:my-4 border-white/20" />
                                <p className="text-[#CFCFCF] text-xs md:text-base">
                                    Send us an email anytime, and our dedicated team will respond promptly with helpful assistance.
                                </p>
                            </div>

                            {/* Office */}
                            <div>
                                <div className="flex items-start gap-2 md:gap-4">
                                    <div className="bg-(--orange) p-2 md:p-3.5 rounded md:rounded-xl">
                                        <MapPin className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[#CFCFCF] text-sm md:text-lg">Office:</p>
                                        <p className="text-[#FFF] text-sm md:text-lg font-semibold">
                                            Mirpur DOHS, H: 654, R: 09 Ave: 04, Dhaka
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-2.5 md:my-4 border-white/20" />
                                <p className="text-[#CFCFCF] text-xs md:text-base">
                                    If you need help or quick answers, our friendly support team is always just a call away.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="hidden lg:flex px-24">
                        <div className="w-px bg-white/20" />
                    </div>

                    {/* RIGHT COLUMN – FORM */}
                    <div>
                        <h2 className="text-2xl md:text-[32px] font-semibold mb-8">
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-1">
                                    Full Name<span className="text-(--orange)">*</span>
                                </label>
                                <input
                                    {...register("fullName", { required: "Full name is required" })}
                                    placeholder="Please enter your full name"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white"
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-1">
                                    Email Address<span className="text-(--orange)">*</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                                    })}
                                    placeholder="Please provide your email address"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-1">
                                    Phone Number<span className="text-(--orange)">*</span>
                                </label>
                                <input
                                    type="tel"
                                    {...register("phone", { required: "Phone number is required" })}
                                    placeholder="Please enter your phone number"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-1">
                                    Subject Line<span className="text-(--orange)">*</span>
                                </label>
                                <input
                                    {...register("subject", { required: "Subject is required" })}
                                    placeholder="Please enter your subject"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white"
                                />
                                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    maxLength={750}
                                    placeholder="150 word max."
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white resize-none"
                                />
                            </div>

                            {/* Terms */}
                            <div className="flex gap-3">
                                <input
                                    id="acceptTerms"
                                    type="checkbox"
                                    {...register("acceptTerms", { required: "You must accept the terms" })}
                                />
                                <label htmlFor="acceptTerms" className="text-sm text-gray-300">
                                    I accept the{" "}
                                    <span className="text-(--orange) underline">Terms & Conditions</span> and{" "}
                                    <span className="text-(--orange) underline">Privacy Policy</span>
                                </label>
                            </div>
                            {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms.message}</p>}

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-(--orange) text-white py-4 rounded-lg font-semibold cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
