import React from "react";
import { auth } from "@/auth";
import Image from "next/image";
const Profile = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <Image
        src={user?.image ?? ""}
        width={100}
        height={100}
        className="rounded-full"
        alt={user?.name ?? "Profile image"}
      />
    </div>
  );
};

export default Profile;
