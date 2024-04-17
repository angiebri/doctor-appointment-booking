import { Button } from "@/components/ui/button";
import Link from "next/image";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="doctors"
              src="/doctors.png"
              width={800}
              height={800}
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
              priority
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find & Book <span className="text-primary">Appointment</span> with
              your Fav <span className="text-primary">Doctors</span>
            </h2>

            <p className="mt-4 text-gray-600">
              At Medcorder, we understand that your health is your most valuable
              asset. That's why we've designed a seamless clinic appointment
              service to ensure you receive the care you need, when you need it.
            </p>
            <p className="mt-4 text-gray-600">
              With Medcorder, you have instant access to a network of trusted
              healthcare providers, right at your fingertips. Whether you're
              seeking a routine check-up, specialist consultation, or urgent
              care, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
