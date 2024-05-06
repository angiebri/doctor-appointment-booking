"use client";
import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

function Profile() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    user;
  }, [user]);

  /**
   * Used to Filter User Booking
   * @param {} type
   * @returns
   */

  return (
    <div className="px-4 sm:px-10 mt-10">
      <h2 className="font-bold text-2xl">Profile</h2>
      <div className="flex gap-4 items-center border p-5 m-3 rounded-lg">
        {user?.picture ? (
          <Image
            src={user?.picture}
            alt="profile-image"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
        ) : (
          <Image
            src="/user.jpg"
            alt="profile-image"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
        )}
        <div className="flex flex-col w-full">
          <h2>
            {user?.given_name} {user?.family_name}
          </h2>
          <h2 className="text-gray-500">{user?.email}</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 border p-5 m-3 rounded-lg">
        <h2 className="font-bold">Personal information</h2>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        />
        <form className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-gray-500">First Name</h2>
            <h2>{user?.given_name}</h2>
          </div>
          <div>
            <h2 className="text-gray-500">Last Name</h2>
            <h2>{user?.family_name}</h2>
          </div>
          <div>
            <h2 className="text-gray-500">Email address</h2>
            <h2>{user?.email}</h2>
          </div>
          <div>
            <h2 className="text-gray-500">Phone</h2>
            <h2>-</h2>
          </div>
          <div>
            <h2 className="text-gray-500">Bio</h2>
            <h2>-</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
