"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MenubarShortcut } from "@/components/ui/menubar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import Header from "@/mycomponents/Header";
import IndentBlock from "@/mycomponents/IndentBlock";
import TopicCard from "@/mycomponents/TopicCard";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("./works")
  return (
    <>
    </>
  );
}
