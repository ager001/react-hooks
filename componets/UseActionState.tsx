"use client";
import { useActionState } from "react";

async function increment(previousState: number, formData:FormData):Promise<number> {
  return previousState + 1;
}

export default function Counter() {
  const [count, action, isPending] = useActionState<number, FormData>(increment, 0);

  return (
    <form action={action}>
      <p>Count: {count}</p>
      <button
      className="bg-amber-400 cursor-pointer"
      type="submit" disabled={isPending}>
        {isPending ? "Updating..." : "Increment"}
      </button>
    </form>
  );
}