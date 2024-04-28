"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar
            className="cursor-pointer"
            src={session.data.user.image || ""}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign OUT</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign IN
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign UP
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
