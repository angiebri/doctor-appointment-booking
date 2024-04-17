import Image from "next/image";
import React from "react";

function Explore() {
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
              Welcome to the <span className="text-primary">Explore</span> Page!
            </h2>
            <p className="mt-4 text-gray-600">
              Discover a world of healthcare possibilities with Medcorder.
              Whether you're looking for a primary care physician, a specialist,
              or alternative healthcare options, our Explore Page makes finding
              the right provider easy and intuitive.
            </p>
            <br />
            <ul className="mt-4 text-size text-gray-00">
              <li>
                <span className="text-primary">Browse by Specialty:</span>{" "}
                Explore our curated list of healthcare specialties to find the
                perfect provider for your needs. From cardiology to dermatology,
                we've got you covered.
              </li>
              <br />
              <li>
                <span className="text-primary">Filter by Services:</span> Narrow
                down your search results by filtering providers based on the
                services they offer. Whether you need a routine check-up,
                diagnostic tests, or telemedicine consultations, we've got you
                covered.
              </li>
              <br />
              <li>
                <span className="text-primary">Read Provider Profiles:</span>{" "}
                Get to know our providers before booking your appointment. Read
                detailed profiles, including qualifications, specialties,
                patient reviews, and more.
              </li>
              <br />
              <li>
                <span className="text-primary">Book Your Appointmen</span> Once
                you've found the perfect provider, booking your appointment is
                quick and easy. Simply select your preferred date and time, and
                you're all set.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
