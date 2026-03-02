import type { ReactNode } from "react";
import { DashboardShell } from "../../../components/layout/DashboardShell";

export default function StudentDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardShell role="student">{children}</DashboardShell>;
}

