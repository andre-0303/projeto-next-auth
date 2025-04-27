"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button className="bg-red-600 hover:bg-red-700 transition-colors
         text-white font-semibold py-3 rounded cursor-pointer w-50 max-w-full
         " onClick={() => signOut()}>Sair</button>
    )
}