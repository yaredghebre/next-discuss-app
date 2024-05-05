"use client";

import {Button, Input} from "@nextui-org/react";
import {useSearchParams} from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search} className="flex gap-2 items-center">
      <Input
        name="term"
        defaultValue={searchParams.get("term") || ""}
        size="sm"
        color="secondary"
      />
      <Button type="submit" color="secondary" variant="ghost" size="lg">
        Search
      </Button>
    </form>
  );
}
